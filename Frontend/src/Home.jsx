import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
import { motion } from "framer-motion";
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
  
  FaMailBulk,
  FaBuilding} from "react-icons/fa";

function Home(){
    return(
    <>   
  

    <header >
            
    <Marquee speed={60} className="mark"><b>HYBRID EVENT:</b> <>You can participate in <b>person</b> at <b>Bangkok,Thailand</b> or <b>virtually</b> from your home or office (Scrolling) </></Marquee>
<Navbar/>
</header>
<div className="conference" >
    <div className="conference-details">
 <h1 ><i>International</i> <br/>Conference on Applied Science, Engineering, Education, Business,
Management and Social Science &amp; Humanities (ICAEBMS)</h1> 
<div className="lines">
    <div className="line"></div>
<p> <b>Theme:</b> “Interdisciplinary Innovations for a Sustainable Future”</p></div>
<p className="hybrid">Hybrid Conference: In Person + Online</p>


<div className="dateloc">
<p className="date"><FaCalendarAlt/> <b>10-11 Aug,2026</b></p>
<p className="location"><FaMapMarkerAlt/><b> Bangkok,Thailand</b></p>
</div>
<div className="last">
    <p><b>ISBN:</b>978-95-813001-3-6</p>
    <p><b>Organized by:</b> CERADA</p>

</div>

    </div>
   <div className="video">
<video src="https://icaebms.com/videos/icaebms-hero-video.webm" type="video/mp4" autoPlay loop muted></video>
   </div>
</div >

<div className="logo">
    <Marquee>
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
    </Marquee>
</div>
<h1 className="welcome-head">Welcome to <i>ICAEBMS-2026</i></h1>
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
<div className="side-in">
    <p><FaBuilding/> Confworld Educational Research and Development Association</p>
</div>

</div>

</div>

<div className="conference-theme">
    <div className="conference-theme-content">
<h1 className="conference-head">-Conference Theme</h1>
<h2 >“Interdisciplinary Innovations for a <b>Sustainable Future</b>”</h2>
<p>
    The theme reflects the core vision of ICAEBMS bringing together diverse fields of
knowledge to address global challenges. By uniting applied science, engineering, education,
business, management, social sciences and humanities, the conference aims to foster
creativity, collaboration and sustainable solutions that transcend traditional boundaries.
</p>
</div>

    {/* <h1 style={{margin:"15px"}}>Through this theme, ICAEBMS seeks</h1> */}
<div  className="conference-theme-side">


    <div className="theme-content">
        <img src={user}/>
<h5>Interdisciplinary collaboration </h5>
<p>Among researchers, academicians,
industry experts and policymakers.</p>

</div>


   
    <div className="theme-content">
         <img src={building}/>
<h5>Innovative research and practices </h5>
<p> Promote contribute to sustainable
development.</p>

</div>


    
    
    <div className="theme-content">
        <img src={book}/>
 <h5>
    Bridge the gap </h5>
  <p>
    Between science, technology, business and society
through knowledge-sharing and discourse.</p>

</div>





    
    <div className="theme-content">
        <img src={light}/>
    <h5>Faster solutions </h5>
    <p>Practical, inclusive and impactful  addressing real-
world challenges.</p>

</div>

  
    <div className="theme-content1">
          <img src={steel}/>
<h5>Empower future leaders  </h5>
<p>Young scholarswith insights and opportunities for
global engagement.</p>
</div>


</div>

</div>



<h1  className="key-head">
    Key <i>Highlights</i> of ICAEBMS
</h1>
<div className="key-highlight">
    
    
    <div className="key-right">
        
             <img src={user}/>
        <h3>Multidisciplinary Platform </h3>
        
        <p> A unique forum uniting applied science, engineering,
education, business, management, social sciences and humanities.</p>
    </div>
    



    
        <div className="key-right">
            
                 <img src={global}/>
    <h3> Global Participation </h3>
        
           
    <p> Engage with renowned scholars, industry leaders and
professionals from across the world.
</p>
    </div>
    

    
    <div className="key-right">
       
            <img src={book}/>
            <h3>Call for Papers &amp; Publications </h3>
        
    
    <p> Opportunities to publish in reputed scopus indexed
journals. </p>

</div>


<div className='key-right'>
   
          <img src={mic}/>
 <h3>Expert Keynote Sessions </h3>
    
 
    <p> Insights from distinguished speakers on cutting-edge
research and global challenges.</p>
   
</div>


    
    <div className="key-right">
     
            <img src={setting}/>
            <h3>Interactive Workshops &amp; Panel Discussions – </h3>
        
        <p>Hands-on learning and thought-
provoking debates on contemporary issues.</p>
    


</div>



       
        <div className="key-right ">
            
                  <img src={people}/>
                <h3>Networking Opportunities </h3>
    
            
            <p> Build academic, industrial and international
collaborations.</p>

    
</div>




    
<div className="key-right">
   
          <img src={medal}/>
         <h3> Recognition &amp; Awards </h3>

     <p> Best paper and presentation awards to acknowledge
outstanding contributions.</p>
   
</div>




   
    <div className='key-right'>
        
              <img src={education}/>
            <h3>Student &amp; Young Researcher Engagement </h3>
    
  
        <p>Special sessions to inspire and guide
the next generation of scholars.</p>
    
</div>




</div>
<h1 className="session-head">Session <i>Tracks</i></h1>
<p style={{color:"white",fontSize:"medium",lineHeight:"1.5",}}>We invite researchers, academicians and professionals to submit their papers.Topics of
interest include, but are not limited to:</p>


<div className="sessions">
     <img src="https://icaebms.com/images/session/session%201/session%201%20img.webp"  />
    <img src="https://icaebms.com/images/session/session%202/session%202%20img.webp" />
 <img src="https://icaebms.com/images/session/session%203/session%203%20img.webp" />
   <img src="https://icaebms.com/images/session/session%204/session%204%20img.webp" />
    <img src="https://icaebms.com/images/session/session%205/session%205%20img.webp" />
    <img src="https://icaebms.com/images/session/session%206/session%206%20img.webp" />
    
</div>


<h1 className="session-head">Submission <i>Deadlines</i></h1>
<br/>

 
<div className="submission">
   
    
    <div className="sub-container">
        
            <h1>31<sup>th</sup></h1>   
            <h4> Dec 2025</h4>
           <p> Early Bird registration</p>
           <button className="btn">Passed</button>
        
        
    </div>

    <div className="sub-container">
           <h1>31<sup>th</sup></h1>   
            <h4> jan 2025</h4>
           <p> Abstract submission</p>
           <button className="btn">Passed</button>
        
    </div>

<div className="sub-container">
      <h1>28<sup>th</sup></h1>   
            <h4> Feb 2026</h4>
           <p> Full paper submission</p>
           <button className="btn">Passes</button>
        
    </div>

    <div className="sub-container">
         <h1>31<sup>th</sup></h1>   
            <h4>Mar 2026</h4>
           <p>   Final Registration</p>
           <button className="btn1">Open Now</button>
        
    </div>
    

</div>

<div className="sub-detail">
    <p>For detailed submission guidelines, please visit the [Submission Page].</p>
    <button>View More for Guideline</button>
</div>

<div className="join">

<h5>-Why Join Us</h5>
<p>The International Conference on Applied Science, Engineering, Education, Business,
Management <br/> and Social Science &amp; Humanities (ICAEBMS) is more than just an academic
event, 
<br/>it’s a global platform for innovation, collaboration and growth.</p>

<h1>Benefits of Joining <i>ICAEBMS</i></h1>

<div className="join-cont">
<div className="join-box">
    <img src={mic}/>
    <h5>Present Your Research</h5> 
    <p>Share your ideas, findings and innovations with a global
audience.
</p>
</div>
<div className="join-box">
     <img src={book}/>
    <h5>Get Published</h5> 
    <p>Opportunities to publish in reputed journals with high impact factor
and indexed conference proceedings.
</p>
</div>

<div className="join-box">
     <img src={education}/>
    <h5>Learn from Experts</h5> 
    <p>Gain insights from keynote addresses, workshops and panel
discussions by leading scholars and professionals
</p>
</div>


<div className="join-box">
     <img src={people}/>
    <h5>Expand Your Network</h5> 
    <p>Connect with academicians, industry leaders, policymakers
and fellow researchers worldwide.
</p>
</div>

<div className="join-box">
     <img src={user}/>
    <h5>Interdisciplinary Exposur</h5> 
    <p>Explore diverse perspectives by engaging with
multiple fields of study.
</p>
</div>

<div className="join-box">
     <img src={medal}/>
    <h5>Recognition &amp; Awards</h5>
    <p>Compete for Best Paper and Best Presentation awards.</p>

</div>


<div className="join-box">
     <img src={global}/>
    <h5>Global Visibility</h5>
    <p>Enhance your academic profile and contribute to international
collaborations.</p>
</div>

<div className="join-box">
     <img src={setting}/>
    <h5>Empower the Future</h5> 
    <p>Inspire and be inspired by young researchers, innovators and
thought leaders.
</p>
</div>
</div>

</div>
 <h1 className="proceed-head">Proceedings & <i>Publications</i></h1>
<div className="proceed">
   
    <div className="last-logo">
        <img src="https://icaebms.com/images/logo/scopus-logo.webp"/>
        <img src="https://www.scie.ac.in/wp-content/uploads/2025/03/logo.png" />
        <img src={clarivatee} />
        
    </div>
    <div className="line2"></div>
    <p> <b>Note:</b> ICAEBMS - 2026 Proceedings will be submitted to the <b>Web of science Book
citation index (BkCI)</b> and <b>Scopus</b> for evaluation and indexing purposes (T&amp;C)* apply.</p>

</div>

<footer>
    <div className="footer">
  <div  className="foot">
    <div className="foot-1">
        <img src="https://icaebms.com/images/logo/ceradalogo.webp" />
        <p>International Conference on Applied Science, Engineering, Education, Business, Management and Social Science & Humanities (ICAEBMS-2026)</p>
        <p><b>Theme:</b> "Interdisciplinary Innovations for a Sustainable Future"</p>
        <p><b>Organized by:</b> Confworld Educational Research and Development Association</p>
    </div>

    <div className="foot-2">
        <h4>Navigation</h4>
        <ul>
           <li>🏠 Home</li>
            <li>
                ℹ️ About</li>
            <li>📅 Session</li>
            <li>📄 Paper Submission</li>
            <li>👤 Registration</li>
        </ul>
    </div>

    <div className="foot-2">
        <h4>Social Media</h4>
        <ul>
            <li>📘Facebook</li>
            <li>📸 Instagram</li>
            <li>💬 Whatsapp</li>
            <li>🐦 Twitter</li>
            <li>▶️ Youtube</li>
            <li>💼 Linkedin</li>
        </ul>
    </div>
    <div className="foot-4">
        <h4>Contact Us</h4>
        <p>📞 <b>+91 8072381719</b></p>
        <p>✉️<b> info@icaebms.com</b></p>
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