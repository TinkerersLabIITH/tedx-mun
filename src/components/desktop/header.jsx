import React from "react";
import TEDXIMG from "../../assets/TEDx White_T 4.png";
import TLIMG from "../../assets/Group 1437254103.png";
import COLLABIMG from "../../assets/Group 1437254104.png";

function Header({ activeMenu, onMenuClick }) {  

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        margin: "auto",
        padding: "1vw",
        fontSize: "1vw",
        marginBottom: "5vw",
        flexDirection: "row",
        position:"sticky",
        top:0,
        zIndex:"10",
        gap:"10vw"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "2vw",
          backgroundColor: "#1d1d1d",
          height: "4vw",
          padding: "0 1vw",
          borderRadius: "5px",
          fontWeight: "700",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src={TEDXIMG}
            alt="TEDX image"
            width="70%"
          />
        </a>
        <img
          src={COLLABIMG}
          alt="Collab image"
          width="10%"
        />
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src={TLIMG}
            alt="TL image"
            width="70%"
          />
        </a>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection:"row",
          gap: "2vw",
          backgroundColor: "#1d1d1d",
          height: "4vw",
          alignItems: "center",
          padding: "0 1vw",
          borderRadius: "5px",
          width: "80%",
          justifyContent: "center"
        }}
      >
        <a
          href="#"
          onClick={() => onMenuClick("home")}
          style={{
            color: activeMenu === "home" ? "#fc5103" : "white",
            textDecoration: "none",
            fontSize: "1vw"
          }}
        >
          Home
        </a>
        <a
          href="#"
          onClick={() => onMenuClick("committees")}
          style={{
            color: activeMenu === "committees" ? "#fc5103" : "white",
            textDecoration: "none",
            fontSize: "1vw"
          }}
        >
          Committees
        </a>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1vw",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            color: "white",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            cursor: "pointer",
            backgroundColor: "#1d1d1d",
            fontSize: "1vw",
          }}
        >
          Contact
        </button>
        <button
          style={{
            backgroundColor: "#ff6600",
            color: "white",
            border: "none",
            padding: "1vw 2vw",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "900",
            fontSize: "1vw",
          }}
        >
          Register Now
        </button>
      </div>
    </div>
  );
}

export default Header;
