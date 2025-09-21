import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import admin from "firebase-admin";
import serverless from "serverless-http";
import { createRequire } from "module";

dotenv.config();

const require = createRequire(import.meta.url);
const serviceAccount = require("../serviceAccountKey.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

const app = express();

app.use(cors());
app.use(express.json());

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "No token provided" });

  try {
    const decoded = await admin.auth().verifyIdToken(token);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ error: "Invalid token" });
  }
};

app.get("/profile", verifyToken, async (req, res) => {
  try {
    const userRef = db.collection("users").doc(req.user.uid);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ uid: req.user.uid, ...userDoc.data() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/profile", verifyToken, async (req, res) => {
  try {
    const userRef = db.collection("users").doc(req.user.uid);
    await userRef.set(
      {
        fullname: req.body.fullname,
        updatedAt: new Date().toISOString(),
      },
      { merge: true }
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/", (req, res) => res.send("API is running ✅"));

export const handler = serverless(app);
