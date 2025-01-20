import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Mainpage from "./components/mainpage/mainpage";
import Committees from "./components/Commitees/Commitees";

function App() {
  const [activeMenu, setActiveMenu] = useState("home");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <>
      <Header activeMenu={activeMenu} onMenuClick={handleMenuClick} />
      {activeMenu === "home" ? <Mainpage /> : <Committees />}
      <Footer />
    </>
  );
}

export default App;
