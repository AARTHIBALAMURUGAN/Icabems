import React from "react";
import Navbar from "./Navbar";
import Marquee from "react-fast-marquee"
import light from './assets/light-bulb.png'
import user from './assets/user.png'
import book from './assets/book.png'
import building from './assets/building.png'
import steel from './assets/steel.png'
import global from './assets/global.png'
import people from './assets/people.png'
import education from './assets/education.png'
import medal from './assets/medal.png'
import mic from './assets/mic.png'
import setting from './assets/settings.png'
import clarivatee from "./assets/clarivate.png"

import { FaCalendarAlt, FaMapMarkerAlt,  FaHome,
  FaInfoCircle,

  FaFileAlt,
  FaUserPlus,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube, 
  FaWhatsapp,
  
  FaPhoneAlt,
  
  FaMailBulk} from "react-icons/fa";

function Home(){
    return(
    <>   
    <header >
            
    <Marquee speed={60} className="mark"><b>HYBRID EVENT:</b> <>You can participate in <b>person</b> at <b>Bangkok,Thailand</b> or <b>virtually</b> from your home or office (Scrolling) </></Marquee>
<Navbar/>
</header>
<div className="conference">
    <div className="conference-details">
 <h1 >“International Conference on Applied Science, Engineering, Education, Business,
Management and Social Science &amp; Humanities (ICAEBMS)”</h1>  
<h3><b>Theme:</b> “Interdisciplinary Innovations for a Sustainable Future”</h3>
<h3 className="hybrid">Hybrid Conference: In Person + Online</h3>

<div className="dateloc">
<p className="date"><FaCalendarAlt/> Date:<b>10-11 Aug,2026</b></p>
<p className="location"><FaMapMarkerAlt/> Location:<b> Bangkok,Thailand</b></p>
</div>
<h3><b>Organized by:</b> Confworld Educational Research and Development Association</h3>


<p><b>ISBN:</b>978-95-813001-3-6</p>
    </div>
   <div className="video">
<video src="https://icaebms.com/videos/icaebms-hero-video.webm" type="video/mp4" autoPlay Loop></video>
   </div>
</div >
<div className="logo">
    <img src="https://icaebms.com/images/logo/cerada-logo.webp"/>
    <img src="https://icaebms.com/images/logo/icaebmslogo.png"/>
    <img src="https://icaebms.com/images/sdg/no-poverty.webp"/>
    <img src="https://icaebms.com/images/sdg/zero-hunger.webp" />
    <img src="https://icaebms.com/images/sdg/good-health-and-well-being.webp" />
    <img src="https://icaebms.com/images/sdg/quality-education.webp" />
    <img src="https://icaebms.com/images/sdg/gender-equality.webp" /> 
    <img src="https://icaebms.com/images/sdg/affordable-energy.webp" />
     <img src="	https://icaebms.com/images/sdg/decent-work-and-economic-growth.webp" />
      <img src="https://icaebms.com/images/sdg/industry-innovation.webp" />
       <img src="https://icaebms.com/images/sdg/sustainable-cities-and-communities.webp" />
        <img src="https://icaebms.com/images/sdg/responsible-consumption-and-production.webp" />
         <img src="https://icaebms.com/images/sdg/partnerships-goals.webp" />

    <img src="https://icaebms.com/images/logo/scopus-logo.webp"/>
</div>
<h1 className="welcome-head">Welcome to ICAEBMS-2026</h1>
<div className="Welcome">
<div className="welcome-para">
<p>
We warmly welcome you to the <b>International Conference on Applied Science,
Engineering, Education, Business, Management and Social Science &amp; Humanities
(ICAEBMS).</b></p>

<p>Theme <b>“Interdisciplinary Innovations for a Sustainable Future”</b> ICAEBMS serves as a
global platform where researchers, academicians, professionals and students from around the
world come together to exchange ideas, present findings and build collaborations across
disciplines.</p>
<p>
This conference is not just an academic gathering, it is a space for innovation, interchange
and the creation of solutions that address real-world challenges. By bringing together experts
in science, engineering, education, business, management, social sciences and humanities,
ICAEBMS fosters interdisciplinary connections that pave the way for impactful change.
</p>
</div>

<div className="welcome-side">

<p>
Join us in shaping the future through knowledge, research and collaboration. Together, we
can drive progress for a more sustainable and inclusive world.
</p>

</div>

</div>

<br/>
<div className="conference-theme">
    <div className="conference-theme-content">
<h1 className="welcome-head">Conference Theme</h1>
<h2 >“Interdisciplinary Innovations for a Sustainable Future”</h2>
<p>
    The theme reflects the core vision of ICAEBMS bringing together diverse fields of
knowledge to address global challenges. By uniting applied science, engineering, education,
business, management, social sciences and humanities, the conference aims to foster
creativity, collaboration and sustainable solutions that transcend traditional boundaries.
</p>
</div>
<div className="conference-theme-side">
    <h3 className="create">
        Creativity
    </h3>

    <h3 className="collab">Collabration</h3>
</div>
</div>

    <h1 style={{margin:"15px"}}>Through this theme, ICAEBMS seeks</h1>
<div  className="theme">

<div className="theme-div">
    <img src={user}/>
    <div className="theme-content">
<h3> <b>Encourage interdisciplinary collaboration </b></h3>
<p>among researchers, academicians,
industry experts and policymakers.</p>
</div>
</div>

<div className="theme-div">
    <img src={building}/>
    <div className="theme-content">
<h3><b> Promote innovative research and practices that</b></h3>
<p> contribute to sustainable
development.</p>
</div>
</div>

<div className="theme-div">
    
    <img src={book}/>
    <div className="theme-content">
 <h3>
    <b>Bridge the gap between science, technology, business and society</b></h3>
  <p>
through knowledge-sharing and discourse.</p>
</div>
</div>

<div className="theme-div1">
    <img src={steel}/>
    <div className="theme-content">
<h3><b>Empower future leaders and young scholars </b></h3>
<p>with insights and opportunities for
global engagement.</p>
</div>
</div>


<div className="theme-div">
    <img src={light}/>
    <div className="theme-content">
    <h3><b>Faster solutions that are practical, inclusive and impactful</b></h3>
    <p> in addressing real-
world challenges.</p>
</div>
</div>
</div>


<h1  className="welcome-head">
    Key Highlights of ICAEBMS
</h1>
<div className="key-highlight">
    <div className="empty">
    <div className="emp">01</div>
    <div className="key-right">
        <div className="right">
             <img src={user}/>
        <h3>Multidisciplinary Platform </h3>
        </div>
        <p> A unique forum uniting applied science, engineering,
education, business, management, social sciences and humanities.</p>
    </div>
    </div>


<div className="empty">
    
        <div className="key-left">
            <div className="left">
                 <img src={global}/>
    <h3> Global Participation </h3>
            </div>
           
    <p> Engage with renowned scholars, industry leaders and
professionals from across the world.
</p>
    </div>
    <div className="emp1">02</div>
</div>

<div className="empty">
    <div className="emp">03</div>
    <div className="key-right">
        <div className="right">
            <img src={book}/>
            <h3>Call for Papers &amp; Publications </h3>
        </div>
    
    <p> Opportunities to publish in reputed scopus indexed
journals. Selected papers from the conference will be considered for publication in
high-impact journals, offering authors the chance to showcase their research on a
global platform.</p>
</div>
</div>

<div className="empty">
<div className='key-left'>
    <div className="left">
          <img src={mic}/>
 <h3>Expert Keynote Sessions </h3>
    </div>
 
    <p> Insights from distinguished speakers on cutting-edge
research and global challenges.</p>
   
</div>
<div className="emp1"> 04</div>
</div>


<div className="empty">
    <div className="emp">05</div>
    <div className="key-right">
        <div className="right">
            <img src={setting}/>
            <h3>Interactive Workshops &amp; Panel Discussions – </h3>
        </div>
        <p>Hands-on learning and thought-
provoking debates on contemporary issues.</p>
    

</div>
</div>


<div className="empty">
       
        <div className="key-left ">
            <div className="left">
                  <img src={people}/>
                <h3>Networking Opportunities </h3>
    
            </div>
            <p> Build academic, industrial and international
collaborations.</p>

    
</div>
 <div className="emp1">06</div>
</div>

<div className="empty">
    <div className="emp">07</div>
<div className="key-right">
    <div className="right">
          <img src={medal}/>
         <h3> Recognition &amp; Awards </h3>
   
    </div>
     <p> Best paper and presentation awards to acknowledge
outstanding contributions.</p>
   
</div>

</div>

<div className="empty">
   
    <div className='key-left'>
        <div className="left">
              <img src={education}/>
            <h3>Student &amp; Young Researcher Engagement </h3>
    
        </div>
        <p>Special sessions to inspire and guide
the next generation of scholars.</p>
    
</div>
 <div className="emp1">08</div>
</div>


</div>
<h1 className="session-head">Session Tracks/Call for papers</h1>
<p style={{textAlign:"center",fontSize:"larger",lineHeight:"1.8"}}>We invite researchers, academicians and professionals to submit their papers.Topics of
interest include, but are not limited to:</p>


<div className="sessions">
    <div className="session">
       <img src="https://icaebms.com/images/session/session%201/session%201%20img.webp" />
    </div>

    <div className="session">
        <img src="https://icaebms.com/images/session/session%202/session%202%20img.webp" />

    </div>

    <div className="session">
           <img src="https://icaebms.com/images/session/session%203/session%203%20img.webp" />
    </div>

    <div className="session">
           <img src="https://icaebms.com/images/session/session%204/session%204%20img.webp" />
    </div>

    <div className="session">
           <img src="https://icaebms.com/images/session/session%205/session%205%20img.webp" />
    </div>

    <div className="session">
           <img src="https://icaebms.com/images/session/session%206/session%206%20img.webp" />
    </div>
</div>


<h1 className="session-head">Submission Deadlines</h1>
<br/>
<div className="d">
    <div className="dot">
            <div className="dot1"></div>
            <div className="dot1"></div><div className="dot1"></div><div className="dot1"></div>
         </div>

</div>
 
<div className="submission">
   
    
    <div className="sub-container">
        
        <div className="sub-head">
          Early Bird registration deadline
        </div>
        <div className="sub-date">
            <p> 31<sup>th</sup></p> 
             
             Dec 2025
        </div>
    </div>

    <div className="sub-container">
        <div className="sub-head">
          Abstract submission
        </div>
        <div className="sub-date">
             <p>31<sup>th</sup></p>
             
             Jan 2026
        </div>
    </div>

<div className="sub-container">
        <div className="sub-head">
      Full paper submission
        </div>
        <div className="sub-date">
             <p>28<sup>th</sup></p> 
              
              Feb 2026
        </div>
    </div>

    <div className="sub-container">
        <div className="sub-head">
         Final Registration
        </div>
        <div className="sub-date">
             <p>31<sup>th</sup> </p> 
              
             Mar 2026
        </div>
    </div>
    

</div>

<div className="sub-detail">
    <p>For detailed submission guidelines, please visit the [Submission Page].</p>
    <button>View More for Guideline</button>
</div>

<div className="join">

<h1>Why Join Us at ICAEBMS?</h1>
<p>The International Conference on Applied Science, Engineering, Education, Business,
Management <br/> and Social Science &amp; Humanities (ICAEBMS) is more than just an academic
event, 
<br/>it’s a global platform for innovation, collaboration and growth.</p>

<h2>Benefits of Joining ICAEBMS</h2>

<div className="join-cont">
<div className="join-box">
    <img src={mic}/>
    <h3>Present Your Research</h3> 
    <p>Share your ideas, findings and innovations with a global
audience.
</p>
</div>
<div className="join-box">
     <img src={book}/>
    <h3>Get Published</h3> 
    <p>Opportunities to publish in reputed journals with high impact factor
and indexed conference proceedings.
</p>
</div>

<div className="join-box">
     <img src={education}/>
    <h3>Learn from Experts</h3> 
    <p>Gain insights from keynote addresses, workshops and panel
discussions by leading scholars and professionals
</p>
</div>


<div className="join-box">
     <img src={people}/>
    <h3>Expand Your Network</h3> 
    <p>Connect with academicians, industry leaders, policymakers
and fellow researchers worldwide.
</p>
</div>

<div className="join-box">
     <img src={user}/>
    <h3>Interdisciplinary Exposur</h3> 
    <p>Explore diverse perspectives by engaging with
multiple fields of study.
</p>
</div>

<div className="join-box">
     <img src={medal}/>
    <h3>Recognition &amp; Awards</h3>
    <p>Compete for Best Paper and Best Presentation awards.</p>

</div>


<div className="join-box">
     <img src={global}/>
    <h3>Global Visibility</h3>
    <p>Enhance your academic profile and contribute to international
collaborations.</p>
</div>

<div className="join-box">
     <img src={setting}/>
    <h3>Empower the Future</h3> 
    <p>Inspire and be inspired by young researchers, innovators and
thought leaders.
</p>
</div>
</div>

</div>

<div className="proceed">
    <h1 className="proceed-head">Proceedings & Publications</h1>
    <div className="last-logo">
        <img src="https://icaebms.com/images/logo/scopus-logo.webp"/>
        <img src="https://www.scie.ac.in/wp-content/uploads/2025/03/logo.png" />
        <img src={clarivatee} />
        
    </div>
    <p> <b>Note:</b> ICAEBMS - 2026 Proceedings will be submitted to the Web of science Book
citation index (BkCI) and Scopus for evaluation and indexing purposes (T&amp;C)* apply.</p>

</div>

<footer>
    <div className="footer">
  <div  className="foot">
    <div className="foot-1">
        <img src="https://icaebms.com/images/logo/ceradalogo.webp" />
        <h4>International Conference on Applied Science, Engineering, Education, Business, Management and Social Science & Humanities (ICAEBMS-2026)</h4>
        <p><b>Theme:</b> "Interdisciplinary Innovations for a Sustainable Future"</p>
        <p><b>Organized by:</b> Confworld Educational Research and Development Association</p>
    </div>

    <div className="foot-2">
        <ul>
           <li> <FaHome/><b>Home</b></li>
            <li>
                <FaInfoCircle/><b>About</b></li>
            <li><FaCalendarAlt/><b>Session</b></li>
            <li><FaFileAlt/><b>Paper Submission</b></li>
            <li><FaUserPlus/><b>Registration</b></li>
        </ul>
    </div>

    <div className="foot-2">
        <ul>
            <li><FaFacebook/><b>Facebook</b></li>
            <li><FaInstagram/><b>Instagram</b></li>
            <li><FaWhatsapp/><b>Whatsapp</b></li>
            <li><FaTwitter/><b>Twitter</b></li>
            <li><FaYoutube/><b>Youtube</b></li>
            <li><FaLinkedin/><b>Linkedin</b></li>
        </ul>
    </div>
    <div className="foot-4">
        <p><FaPhoneAlt/><b>+91 8072381719</b></p>
        <p><FaMailBulk/><b> info@icaebms.com</b></p>
        <div className="foot-3">
            <h4>Organizer Address:</h4>
            <p>No.147/383A, Second Floor, Paper Mills Road, Peravallur, Chennai-600082, Tamil Nadu, India.</p>
        </div>
    </div>
    <div>
</div>
     
    </div>
    <div className="copy">
    <hr/>
    <p>© 2026 CERADA. All Rights Reserved.</p>
    </div>
   

    </div>

</footer>
</> 

)

}
export default Home;