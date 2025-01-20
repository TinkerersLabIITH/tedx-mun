import React, { useState, useEffect } from "react";
import TEDXIMG from "../assets/TEDx White_T 4.png";
import TLIMG from "../assets/Group 1437254103.png";
import COLLABIMG from "../assets/Group 1437254104.png";

function Header({ activeMenu, onMenuClick }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile screen width threshold
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial window size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        margin: "auto",
        padding: isMobile ? "2vw" : "1vw",
        fontSize: isMobile ? "3vw" : "1vw",
        marginBottom: isMobile ? "5vw" : "5vw",
        flexDirection: isMobile ? "column" : "row", // Stack items on mobile
        position:"sticky",
        top:0,
        zIndex:"10",
        gap:"10vw"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row", // Stack logo images on mobile
          alignItems: "center",
          gap: "2vw",
          backgroundColor: "#1d1d1d",
          height: isMobile ? "auto" : "4vw",
          padding: "0 1vw",
          borderRadius: "5px",
          fontWeight: "700",
          width: "100%",
          justifyContent: "center", // Center logo images on mobile
        }}
      >
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src={TEDXIMG}
            alt="TEDX image"
            width={isMobile ? "50px" : "70%"} // Adjust image size for mobile
          />
        </a>
        <img
          src={COLLABIMG}
          alt="Collab image"
          width={isMobile ? "16px" : "10%"} // Adjust image size for mobile
        />
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src={TLIMG}
            alt="TL image"
            width={isMobile ? "50px%" : "70%"} // Adjust image size for mobile
          />
        </a>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row", // Stack menu on mobile
          gap: "2vw",
          backgroundColor: "#1d1d1d",
          height: isMobile ? "auto" : "4vw",
          alignItems: "center",
          padding: "0 1vw",
          borderRadius: "5px",
          width: "80%",
          justifyContent: "center", // Center menu on mobile
        }}
      >
        <a
          href="#"
          onClick={() => onMenuClick("home")}
          style={{
            color: activeMenu === "home" ? "#fc5103" : "white",
            textDecoration: "none",
            fontSize: isMobile ? "4vw" : "1vw", // Adjust font size for mobile
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
            fontSize: isMobile ? "4vw" : "1vw", // Adjust font size for mobile
          }}
        >
          Committees
        </a>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row", // Stack buttons on mobile
          gap: "1vw",
          width: "100%",
          justifyContent: "center", // Center buttons on mobile
        }}
      >
        <button
          style={{
            color: "white",
            border: "none",
            padding: isMobile ? "1vw 2vw" : "0.5rem 1rem", // Adjust button padding for mobile
            borderRadius: "5px",
            cursor: "pointer",
            backgroundColor: "#1d1d1d",
            fontSize: isMobile ? "4vw" : "1vw", // Adjust font size for mobile
          }}
        >
          Contact
        </button>
        <button
          style={{
            backgroundColor: "#ff6600",
            color: "white",
            border: "none",
            padding: isMobile ? "1vw 2vw" : "1vw 2vw",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "900",
            fontSize: isMobile ? "4vw" : "1vw", // Adjust font size for mobile
          }}
        >
          Register Now
        </button>
      </div>
    </div>
  );
}

export default Header;
