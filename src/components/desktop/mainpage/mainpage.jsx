import React from "react";
import Scroll from "../scroll";
import IMG1 from "../../../assets/DSC09582 1.png";
import IMG2 from "../../../assets/DSC09080 1.png";
import IMG3 from "../../../assets/DSC09244 1.png";
import IMG4 from "../../../assets/DSC09196 1.png";
import IMG5 from "../../../assets/DSC09342 1.png";
import IMG6 from "../../../assets/DSC09365 1.png";
import IMG7 from "../../../assets/DSC09399 1.png";
import IMG8 from "../../../assets/DSC09582 1 (1).png";

import MUN25IMG from "../../../assets/Group 1437254130.png";
import BACKMUN25IMG from "../../../assets/backgroundimg.png";
import "./mainpage.css"; // Importing the CSS file

function MainPage() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "90%", borderRadius: "10px", height: "60vh" }}>
        <Scroll />
      </div>
      <div
        className="about-us-container"
        style={{
          marginBottom: "10%",
          marginTop: "10%",
          background: "transparent",
        }}
      >
        <div
          className="about-us-title"
          style={{ margin: "auto", marginBottom: "1.5rem" }}
        >
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
            A Model United Nations (MUN) is a simulation of the United Nations
            where students role-play as delegates from different countries,
            engaging in debates and discussions on global issues. Participants
            research and represent their assigned nations' positions, fostering
            a deeper understanding of international relations and diplomacy.
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
          <div className="section-title">
            Event{" "}
            <span style={{ color: "#f95107", fontSize: "36px" }}>
              Highlight
            </span>
          </div>
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
              <ul
                style={{
                  listStyleType: "none",
                  padding: "0",
                  fontSize: "22px",
                }}
              >
                <li>
                  <strong style={{ fontWeight: "900" }}>Dates:</strong> March
                  23rd & 24th
                </li>
                <li>
                  <strong style={{ fontWeight: "900" }}>Venue:</strong> Indian
                  Institute of Technology Hyderabad (Hybrid Mode)
                </li>
                <li>
                  <strong style={{ fontWeight: "900" }}>Organizers:</strong>{" "}
                  TEDxIITHyderabad & Tinkerers' Lab IITH
                </li>
                <li>
                  <strong style={{ fontWeight: "900" }}>Under:</strong> THRUST –
                  The Annual Techno-Innovation Fest of IIT Hyderabad
                </li>
                <li>
                  <strong style={{ fontWeight: "900" }}>Format:</strong> Two-day
                  event with engaging committees simulating real-world
                  diplomacy.
                </li>
              </ul>
            </div>
            <div>
              <img src={IMG1} alt="MUN Event" width="100%" height="300px" style={{marginTop:"-10%", borderRadius:"10px"}}/>
            </div>
          </div>
        </div>
      </div>
      <div style={{background: "#1c1c1c", padding: "1.5rem", borderRadius: "10px", marginBottom: "10%", width: "70%"}}>
        <div className="section-title" style={{margin: "auto", marginBottom: "1.5rem", textAlign: "center", fontSize: "48px", fontWeight: "700"}}>
          Past <span style={{ color: "#f95107", fontSize: "48px", fontWeight: "700"}}>MUN</span>{" "}
          at a glance
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
          <img src={IMG1} width="300px" height="150px" style={{borderRadius:"10px"}}/>
          <img src={IMG2} width="300px" height="150px" style={{borderRadius:"10px"}} />
          <img src={IMG3} width="300px" height="150px" style={{borderRadius:"10px"}} />
          <img src={IMG4} width="300px" height="150px" style={{borderRadius:"10px"}} />
          <img src={IMG5} width="300px" height="150px" style={{borderRadius:"10px"}} />
          <img src={IMG6} width="300px" height="150px" style={{borderRadius:"10px"}} />
          <img src={IMG7} width="300px" height="150px" style={{borderRadius:"10px"}} />
          <img src={IMG8} width="300px" height="150px" style={{borderRadius:"10px"}} />
        </div>
      </div>
      <div
        className="mun25-container"
        style={{
          backgroundImage: `url(${BACKMUN25IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mun25-content">
          {/* Left Section */}
          <div className="mun25-logo">
            <img src={MUN25IMG} alt="MUN 25 Logo" />
          </div>

          {/* Right Section */}
          <div className="mun25-details">
            <h1 className="mun25-title">
              X-MUN{" "}
              <span style={{ color: "white", fontSize: "max(20px,3.5vw)" }}>
                '25
              </span>
            </h1>
            <p className="mun25-date">Date - 20/ 03/ 2025 - 22/03/2025</p>
            <div className="mun25-agendas">
              <h2 className="mun25-agenda-title">Committees</h2>
              <ul className="mun25-agenda-list">
                <li>United Nations Security Council (UNSC)</li>
                <li>United Nations Security Council Historic (UNSC)</li>
                <li>
                  United Nations Educational, Scientific and Cultural
                  Organization (UNESCO)
                </li>
                <li>United Nations Human Rights Council (UNHRC)</li>
                <li>United Nations General Assembly (UNGA)</li>
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
