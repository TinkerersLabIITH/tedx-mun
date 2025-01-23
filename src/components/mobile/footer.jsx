import React from 'react';
import './footer.css'; // Create this CSS file for styling
import TedxMUN from '../../assets/TedxMUN.png';
import TedxTl from '../../assets/TedxTl.png';
import youtube from '../../assets/youtube.png';
import linkedIn from '../../assets/linkedIn.png';
import instagram from '../../assets/instagram.png';
import mail from '../../assets/mail.png';
import phone from '../../assets/phone.png'

const MobileFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* TEDx Logo Section */}
        <div className="footer-section">
          <div className="footer-section logos">
            <div>
              <img
                src={TedxMUN}
                alt="MUN Logo"
                className="flogo"
              />
            </div>
          </div>
          <h2>TEDX<span style={{color:"white"}}>MUN</span></h2>
          <p className="para">IIT Hyderabad</p>
        </div>

        {/* Partner Logos Section */}
        <div className="footer-secion logo">
          {/* Main Combined Image */}
          <img src={TedxTl} alt="TEDx and Tinkerers Lab" className="main-image" />

          {/* Social Media Icons */}
          <div className="social-media">
            <a href = {"https://www.youtube.com/@TEDx"} target='blank'
            ><img src={youtube} alt="YouTube" /></a>
            <a href = {"#"} target='blank'
            ><img src={linkedIn} alt="LinkedIn" /></a>
            <a href = {"https://www.instagram.com/tedx.iithyderabad/?igsh=MWMxcnFub3Z3YzNxMA%3D%3D#"} target='blank'
            ><img src={instagram} alt="Instagram" style={{marginRight:"40px"}}/></a>
            <a href = {"https://www.instagram.com/tinkererslab_iith/?igsh=MTdsMTQ3NTExd3JvdA%3D%3D#"} target='blank'
            ><img src={instagram} alt="Instagram" /></a>
            <a href = {"https://www.linkedin.com/company/tinkerers-lab-iith/posts/?feedView=all"} target='blank'
            ><img src={linkedIn} alt="LinkedIn" /></a>
            <a href = {"#"} target='blank'
            ><img src={youtube} alt="YouTube" /></a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <div className="contact-item">
            <img src={mail} alt="Mail" className="contact-icon" />
            <a href="mailto:tedxiithyderabad@iith.ac.in" style={{ color: "white" }}>
              tedxiithyderabad@iith.ac.in
            </a>
          </div>
          <div className="contact-item">
            <img src={mail} alt="Mail" className="contact-icon" />
            <a href="mailto:tinkerers@iith.ac.in" style={{ color: "white" }}>
              tinkerers@iith.ac.in
            </a>
          </div>
          <div className="contact-item">
            <img src={phone} alt="Phone" className="contact-icon" />
            <p>9090909090</p>
          </div>
          <div className="contact-item">
            <img src={phone} alt="Phone" className="contact-icon" />
            <p>9898989898</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © Copyright by TEDxIITHyderabad and TinkerersLab IIT Hyderabad. This
          independent event is operated under license from TED.
        </p>
      </div>
    </footer>
  );
};

export default MobileFooter;
