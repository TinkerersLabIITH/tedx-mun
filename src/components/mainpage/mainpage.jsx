import React from "react";
import Scroll from "../scroll";
import IMG1 from "../../assets/DSC09582 1.png";
import MUN25IMG from "../../assets/Group 1437254130.png";
import BACKMUN25IMG from "../../assets/DSC09196 1.png";
import "./mainpage.css"; // Importing the CSS file

function MainPage() {
  return (
    <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <div style={{width:"90%",borderRadius:"10px", height:"60vh",}}>
        <Scroll />
      </div>
      <div className="about-us-container" style={{marginBottom:"10%",marginTop:"10%"}}>
        <div className="about-us-title" style={{ margin:"auto",marginBottom: "1.5rem" }}>
          ABOUT <span style={{ color: "white", fontSize: "48px" }}>US</span>
        </div>
        <div
          className="section1"
          style={{
            padding: "1.5rem",
            background: "#1c1c1c",
            borderRadius: "10px",
          }}
        >
          <div className="section-title">
            What is a&nbsp;
            <span style={{ color: "#f95107", fontSize: "36px" }}>MUN</span> ?
          </div>
          <div className="section-content">
            <span style={{ fontWeight: "950", fontSize: "20px" }}>
              "Ideas Worth Sharing"
            </span>
            : We believe that for humankind to truly progress and achieve our
            potential, the exchange of ideas between people is essential. TED
            helps us list the problems people face even in the remotest corners
            of the world. This promotes discussions to come up with solutions
            and ideas from pioneers and amateurs in different backgrounds. Most
            ideas, often end up being ignored or rejected, and even the ones
            that are accepted are often not implemented. We aim to play our
            little role in guiding these embryos and nurture them with the hope
            that they help us progress and march forward.
          </div>
        </div>
        <div
          className="section2"
          style={{
            padding: "1.5rem",
            background: "#1c1c1c",
            borderRadius: "10px",
          }}
        >
          <div className="section-title">What Do we Do ?</div>
          <div
            className="section-row"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1vw",
            }}
          >
            <div className="section-content" style={{ flex: 1 }}>
              <span style={{ fontWeight: "950", fontSize: "20px" }}>
                "Ideas Worth Sharing"
              </span>{" "}
              : We believe that for humankind to truly progress and achieve our
              potential, the exchange of ideas between people is essential. TED
              helps us list the problems people face even in the remotest
              corners of the world. This promotes discussions to come up with
              solutions and ideas from pioneers and amateurs in different
              backgrounds. Most ideas, often end up being ignored or rejected,
              and even the ones that are accepted are often not implemented. We
              aim to play our little role in guiding these embryos and nurture
              them with the hope that they help us progress and march forward.
            </div>
            <div>
              <img src={IMG1} alt="MUN Event" className="section-image" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="mun25-container"
        style={{
          backgroundImage: `url(${BACKMUN25IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mun25-content">
          {/* Left Section */}
          <div className="mun25-logo">
            <img src={MUN25IMG} alt="MUN 25 Logo" />
          </div>

          {/* Right Section */}
          <div className="mun25-details">
            <h1 className="mun25-title">MUN <span style={{color:"white",fontSize:"max(20px,3.5vw)"}}>25</span></h1>
            <p className="mun25-date">Date - 32 / 13 / 2025</p>
            <div className="mun25-agendas">
              <h2 className="mun25-agenda-title">Agendas</h2>
              <ul className="mun25-agenda-list">
                <li>
                  UNGA DISEC: Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Velit, rem aut nemo alias accusamus magnam
                  repellendus nam enim.
                </li>
                <li>
                  UNHRC: Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Earum beatae, excepturi sunt fugit quos consequatur
                  reiciendis culpa asperiores.
                </li>
                <li>
                  UNHRC: Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Porro eos nam aliquam. Ipsam hic laudantium quas
                  corrupti fugit, rem possimus.
                </li>
              </ul>
            </div>
            <button className="register-button">Register Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
