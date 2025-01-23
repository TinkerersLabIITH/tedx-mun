import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/desktop/header";
import Footer from "./components/desktop/footer";
import Mainpage from "./components/desktop/mainpage/mainpage";
import Committees from "./components/desktop/Commitees/Commitees";

import MobileHeader from "./components/mobile/header";
import MobileFooter from "./components/mobile/footer";
import MobileMainpage from "./components/mobile/mainpage/mainpage";
import MobileCommittees from "./components/mobile/Commitees/Commitees";


function App() {
  const [activeMenu, setActiveMenu] = useState("home");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile screen width threshold
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial window size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <>
        <MobileHeader activeMenu={activeMenu} onMenuClick={handleMenuClick} />
        {activeMenu === "home" ? <MobileMainpage /> : <MobileCommittees />}
        <MobileFooter />
      </>
    );
  } else {
    return (
      <>
        <Header activeMenu={activeMenu} onMenuClick={handleMenuClick} />
        {activeMenu === "home" ? <Mainpage /> : <Committees />}
        <Footer />
      </>
    );
  }
}

export default App;
