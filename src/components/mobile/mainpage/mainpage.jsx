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
import SingleCarousel from "./singleCar";
import "./mainpage.css"; // Importing the CSS file

function MobileMainPage() {
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
        className="mabout-us-container"
        style={{
          margin: "10% 0",
          width: "100%",
          paddingLeft: "0",
          paddingRight: "0",
        }}
      >
        <div
          className="mabout-us-title"
          style={{ margin: "auto", marginBottom: "1.5rem", fontSize: "24px" }}
        >
          ABOUT <span style={{ color: "white" }}>US</span>
        </div>
        <div
          className="msection1"
          style={{
            width: "100%",
            padding: "1.5rem",
            background: "#1c1c1c",
            borderRadius: "10px",
          }}
        >
          <div className="msection-title" style={{ fontSize: "24px" }}>
            What is a&nbsp;
            <span style={{ color: "#f95107" }}>MUN</span> ?
          </div>
          <div className="msection-content" style={{ fontSize: "16px" }}>
            A Model United Nations (MUN) is a simulation of the United Nations
            where students role-play as delegates from different countries,
            engaging in debates and discussions on global issues. Participants
            research and represent their assigned nations' positions, fostering
            a deeper understanding of international relations and diplomacy.
          </div>
        </div>
        <div
          className="msection2"
          style={{
            width: "100%",
            padding: "1.5rem",
            background: "#1c1c1c",
            borderRadius: "10px",
          }}
        >
          <div className="msection-title" style={{ fontSize: "24px" }}>
            Event{" "}
            <span style={{ color: "#f95107", fontSize: "24px" }}>
              Highlight
            </span>
          </div>
          <div
            className="msection-row"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1vw",
            }}
          >
            <div>
              <img
                src={IMG1}
                alt="MUN Event"
                className="msection-image"
                style={{ borderRadius: "5px", marginBottom: "15px" }}
              />
            </div>
            <div
              className="msection-content"
              style={{ flex: 1, fontSize: "16px" }}
            >
              <ul
                style={{
                  listStyleType: "none",
                  padding: "0",
                  fontSize: "16px",
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
          </div>
        </div>
      </div>
      <div
        style={{
          background: "#1c1c1c",
          padding: "1.5rem",
          borderRadius: "10px",
          marginBottom: "10%",
          width: "100%",
        }}
      >
        <div
          className="section-title"
          style={{
            margin: "auto",
            marginBottom: "1.5rem",
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "700",
          }}
        >
          Past{" "}
          <span
            style={{ color: "#f95107", fontSize: "24px", fontWeight: "700" }}
          >
            MUN
          </span>{" "}
          at a glance
        </div>
        <SingleCarousel />
      </div>

      <div
        className="mmun25-container"
        style={{
          flexDirection: "column",
          paddingLeft: "0",
          paddingRight: "0",
          marginTop: "30%",
          height: "auto",
          background: "none",
        }}
      >
        <div
          className="mmun25-content"
          style={{
            width: "100%",
            paddingLeft: "0",
            paddingRight: "0",
            paddingBottom: "4.5rem",
          }}
        >
          <h1 className="mmun25-title" style={{ fontSize: "32px" }}>
            X-MUN <span style={{ color: "white" }}>'25</span>
          </h1>
          <p className="mmun25-date">Date - 20/ 03/ 2025 - 22/03/2025</p>
          <div className="mmun25-logo" style={{ width: "100%" }}>
            <img src={MUN25IMG} alt="MUN 25 Logo" style={{ maxWidth: "90%" }} />
          </div>
          <div
            className="mmun25-agendas"
            style={{ padding: "1.5rem 1.5rem 0 1.5rem" }}
          >
            <h2
              className="mmun25-agenda-title"
              style={{ textAlign: "", fontSize: "20px" }}
            >
              Committees
            </h2>
            <ul className="mmun25-agenda-list" >
              <li style={{textAlign:"left" }}>
              United Nations Security Council {" "}<strong>UNSC</strong>
              </li>
              <li style={{textAlign:"left" }}>
              United Nations Security Council Historic {" "}<strong>UNSC</strong>
              </li>
              <li style={{textAlign:"left" }}>
                United Nations Educational, Scientific and Cultural Organization{" "}
                <strong>UNESCO</strong>
              </li>
              <li style={{textAlign:"left" }}>
                United Nations Human Rights Council {" "}<strong>UNHRC</strong>
              </li>
              <li style={{textAlign:"left" }}>
                United Nations General Assembly {" "}<strong>UNGA</strong>
              </li>
            </ul>
          </div>
          <button
            className="mregister-button"
            style={{ width: "90%", padding: "15px", fontSize: "20px" }}
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileMainPage;
