import "./TalkToCounsellor.css";

const TalkToCounsellor = () => {
  const mentors = [
    {
      name: "Dr. Sarah Johnson",
      role: "Licensed Clinical Psychologist",
      specialization: "Specializes in anxiety and depression",
      availability: "Mon-Fri 9AM-5PM",
      img: "/1.png",
    },
    {
      name: "Dr. Amit Sharma",
      role: "Career Counselor",
      specialization: "Guidance for students",
      availability: "Mon-Sat 10AM-6PM",
      img: "/2.png",
    },
    {
      name: "Dr. Emily Brown",
      role: "Child Psychologist",
      specialization: "Child behavior and development",
      availability: "Tue-Sat 11AM-7PM",
      img: "/3.png",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Trauma & Crisis Counsellor",
      specialization: "Crisis intervention and trauma therapy",
      availability: "Fri-Mon 10AM-5PM",
      img: "/4.png",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Trauma & Crisis Counsellor",
      specialization: "Crisis intervention and trauma therapy",
      availability: "Fri-Mon 10AM-5PM",
      img: "/5.png",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Trauma & Crisis Counsellor",
      specialization: "Crisis intervention and trauma therapy",
      availability: "Fri-Mon 10AM-5PM",
      img: "/6.png",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Trauma & Crisis Counsellor",
      specialization: "Crisis intervention and trauma therapy",
      availability: "Fri-Mon 10AM-5PM",
      img: "/7.png",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Trauma & Crisis Counsellor",
      specialization: "Crisis intervention and trauma therapy",
      availability: "Fri-Mon 10AM-5PM",
      img: "/8.png",
    },
  ];

  return (
    <>
      <div id="main_container">
        <div id="upper">
          <h1>Talk To Counsellor</h1>
          <p>
            Connect with our free counselling services. All sessions are
            completely confidential <br /> and available at no cost to students.
          </p>
        </div>

        <div className="cards">
          <div id="card1">
            <img src="/TalkToPage.png" />
            <h3>Individual Counseling</h3>
            <p>One-on-one sessions with licensed mental health professionals</p>
            <span id="subdetail">
              <img id="clock" src="/TalkToCouncellorclock.png" />
              <p>50 minutes</p>
            </span>
            <span id="subdetail2">
              <img id="clock" src="/TalkToCouncellorcalender.png" />
              <p>Mon-Fri 9AM-5PM</p>
            </span>
          </div>

          <div id="card1">
            <img src="/TalkToPage.png" />
            <h3>Group Therapy</h3>
            <p>Structured group sessions focused on specific mental health topics</p>
            <span id="subdetail">
              <img id="clock" src="/TalkToCouncellorclock.png" />
              <p>75 minutes</p>
            </span>
            <span id="subdetail2">
              <img id="clock" src="/TalkToCouncellorcalender.png" />
              <p>Weekly sessions</p>
            </span>
          </div>
          <div id="card3">
            <img src="/Phonecall (2).png" />
            <h3>Crisis Support</h3>
            <p>Immediate support for mental health emergencies</p>
            <span id="subdetail">
              <img id="clock" src="/TalkToCouncellorclock.png" />
              <p>As needed</p>
            </span>
            <span id="subdetail2">
              <img id="clock" src="/TalkToCouncellorcalender.png" />
              <p>24/7 hotline</p>
            </span>
          </div>
        </div>

        {/* Mentor Section */}
        <div>
          <div className="mentors">
            {mentors.map((mentor, index) => (
              <div key={index} className="card">
                <img src={mentor.img} alt={mentor.name} />
                <h3>{mentor.name}</h3>
                <p>{mentor.role}</p>
                <p>{mentor.specialization}</p>
                <span id="subdetail">
                  <p>Available: {mentor.availability}</p>
                </span>
                <button className="connect-btn">Connect Now-Free</button>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Protection Section under Counsellor */}
        <div className="Privacy_main">
          <div className="Privacy">
            <img src="/TalkToCounsellorSheld.png" />
            <h3>Your Privacy is Protected</h3>
            <p>
              All appointments are completely confidential. We follow strict
              HIPAA guidelines to ensure your privacy and security.
            </p>
          </div>
        </div>

        <div className="contact">
          <div id="location">
            <div id="loc_detail">
              <img src="/location.png" />
              <h3>Campus Locations</h3>
            </div>
            <div id="loc_subdetail">
              <p>Student Health Center - Location...</p>
              <p>Counseling Services - Location...</p>
              <p>Wellness Center - Location...</p>
            </div>
          </div>
          <div id="location">
            <div>
              <div id="loc_detail">
                <img src="/Phone.png" />
                <h3>Contact Information</h3>
              </div>
              <div id="loc_subdetail">
                <p>Emergency: 911</p>
                <p>Crisis Line: 988</p>
                <p>Campus Counseling: (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TalkToCounsellor;
