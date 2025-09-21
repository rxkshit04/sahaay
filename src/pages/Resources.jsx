import "./Resources.css";

const Resources = () => {
  return (
    <>
    <div className="Resource_container">
     <div id="upper">
      <h1>Mental Health Resources</h1>
      <p>Curated content to support your mental health journey, including articles, videos,<br></br> guided meditations, and tools available in multiple languages.</p>
    </div>

    <div className="Resources_card_main">
    <div className="Resource_cards">
      <div id="Resource_card1">
        <img src="/Resources1.png" />
       <h3>Anxiety & Stress</h3>
       <p>Coping strategies, breathing exercises, and mindfulness techniques</p>
       <span>
      <p><img id="dot" src="/dot.png"></img></p><p id="sub_para">24 resources available</p>
       </span>
      </div>


      <div id="Resource_card1">
        <img src="/TalkToPage.png"/>
        <h3>Depression Support</h3>
       <p>Understanding depression and finding pathways to healing</p>
      <span>
       <p><img id="dot" src="/dot.png"></img></p><p id="sub_para">18 resources available</p>
       </span>
      </div>
      <div id="Resource_card1">
        <img src="/Phonecall (2).png"/>
        <h3>Academic Burnout</h3>
        <p>Managing study stress and maintaining work-life balance</p>
       <span>
       <p><img id="dot" src="/dot.png"></img></p><p id="sub_para">15 resources available</p>
       </span>
      </div>
            <div id="Resource_card1">
        <img src="/Phonecall (2).png"/>
        <h3>Sleep & Wellness</h3>
        <p>Improving sleep hygiene and overall mental wellness</p>
        <span>
       <p><img id="dot" src="/dot.png"></img></p><p id="sub_para">12 resources available</p>
       </span>
      </div>
            <div id="Resource_card1">
        <img src="/Phonecall (2).png"/>
        <h3>Crisis Resources</h3>
        <p>Immediate help and crisis intervention resources</p>
      <span>
       <p><img id="dot" src="/dot.png"></img></p><p id="sub_para">8 resources available</p>
       </span>
      </div>
            <div id="card3">
        <img src="/Phonecall (2).png"/>
        <h3>Multilingual Support</h3>
        <p>Resources available in multiple regional languages</p>
      <span>
       <p><img id="dot" src="/dot.png"></img></p><p id="sub_para">32 resources available</p>
       </span>
      </div>
    </div>
    </div>
    <div class="help-section">
    <div class="help-container">
        <h1>Need Immediate Help?</h1>
        <p>If you're in crisis or need immediate support, please reach out to these resources:</p>
        <div class="resource-links">
            <a href="tel:988">National Suicide Prevention Lifeline: 988</a>
            <a href="sms:741741">Crisis Text Line: Text "HI" to 741741</a>
            <a href="tel:14416">National Mental Health Helpline : 14416</a>
        </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default Resources;
