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

function Committees() {
  return (
    <div className="Committees" style={{margin:"auto", marginTop:"-5vw"}}>
      {/* Committees Section */}
      <section id="committees" className="committees-section">
        <h2 className="committee-heading" style={{fontSize:"2.75vw",fontWeight:"900",marginTop:"5vw"}}>COMMITTEES</h2>
        <h3 className="committee-heading" style={{fontSize:"1.2vw",fontWeight:"200",marginTop:"-2.5vw"}}>Agendas yet to be released.</h3>
        <div className="cards-container" style={{gap:"10px"}}>
          {committees.map((committee) => (
            <div
              key={committee.id}
              className="card"
              style={{ backgroundImage: `url(${cardB})`,width:"400px",height:"270px",marginTop:"60px" }}
            >
              <div className="icon" style={{width:"250px",height:"250px"}}>
                <img src={committee.logo} alt={`${committee.title} logo`} style={{width:"200px",heigth:"200px"}}/>
              </div>
              <h3 style={{marginTop:"160px",fontSize:"2.75vw",fontWeight:"900"}}>{committee.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Committees;
