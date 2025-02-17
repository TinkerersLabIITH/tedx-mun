import React from "react";
import "./Commitees.css";
import cardB from "../../../assets/cardB.png"
import logo1 from "../../../assets/logo1.png";
import logo2 from "../../../assets/logo2.png";
import logo3 from "../../../assets/logo3.png";

const committees = [
  {
      id: 1,
      title: "UNSC",
      description: 'We believe that for humankind to truly progress...',
      logo: logo3,
    },
    {
      id: 2,
      title: "UNHRC",
      description: 'We believe that for humankind to truly progress...',
      logo: logo1,
    },
    {
      id: 3,
      title: "UNGA",
      description: 'We believe that for humankind to truly progress...',
      logo: logo3,
    },
    {
      id: 4,
      title: "UNESCO",
      description: 'We believe that for humankind to truly progress...',
      logo: logo2,
    },
    {
      id: 5,
      title: `UNSC Historic`,
      description: 'We believe that for humankind to truly progress...',
      logo: logo3,
    },
];
function MobileCommittees() {
  return (
    <div className="Committees" style={{margin:"auto", marginTop:"-5vw"}}>
      {/* Committees Section */}
      <section id="committees" className="committees-section">
        <h2 className="committee-heading" style={{fontSize:"3vh",fontWeight:"900"}}>COMMITTEES</h2>
        <div className="cards-container" style={{alignItems: "center"}}>
          {committees.map((committee) => (
            <div
              key={committee.id}
              className="card"
              style={{ backgroundImage: `url(${cardB})`, margin: "20% 0",height:"250px" }}
            >
              <div className="icon">
                <img src={committee.logo} alt={`${committee.title} logo`} />
              </div>
              <h3 style={{fontSize: "32px"}}>{committee.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MobileCommittees;
