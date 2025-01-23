import React from "react";
import "./Commitees.css";
import wto from "../../../assets/wto.png";
import unsc from "../../../assets/unsc.png";
import who from "../../../assets/who.png";
import unicef from "../../../assets/unicef.png";
import unesco from "../../../assets/unesco.png";
import imf from "../../../assets/imf.png";
import unhrc from "../../../assets/unhrc.png";
import fao from "../../../assets/fao.png";
import iaea from "../../../assets/iaea.png";
import logo from "../../../assets/logo.png";

const committees = [
  {
    id: 1,
    title: "WTO",
    description: 'We believe that for humankind to truly progress...',
    background: wto,
  },
  {
    id: 2,
    title: "UNSC",
    description: 'We believe that for humankind to truly progress...',
    background: unsc,
  },
  {
    id: 3,
    title: "WHO",
    description: 'We believe that for humankind to truly progress...',
    background: who,
  },
  {
    id: 4,
    title: "UNICEF",
    description: 'We believe that for humankind to truly progress...',
    background: unicef,
  },
  {
    id: 5,
    title: "UNESCO",
    description: 'We believe that for humankind to truly progress...',
    background: unesco,
  },
  {
    id: 6,
    title: "IMF",
    description: 'We believe that for humankind to truly progress...',
    background: imf,
  },
  {
    id: 7,
    title: "UNHRC",
    description: 'We believe that for humankind to truly progress...',
    background: unhrc,
  },
  {
    id: 8,
    title: "FAO",
    description: 'We believe that for humankind to truly progress...',
    background: fao,
  },
  {
    id: 9,
    title: "IAEA",
    description: `We believe that for humankind to truly progress...`,
    background: iaea,
  },
];

function MobileCommittees() {
  return (
    <div className="Committees" style={{margin:"auto", marginTop:"-5vw"}}>
      {/* Committees Section */}
      <section id="committees" className="committees-section">
        <h2 className="committee-heading" style={{fontSize:"3vw",fontWeight:"900"}}>COMMITTEES</h2>
        <p className="description">
          <span style={{fontWeight:"900"}}>"Ideas Worth Sharing: "</span>We believe that for humankind to truly progress and achieve our
          potential, the exchange of ideas between people is essential. TED helps us list the problems
          people face even in the remotest corners of the world. This promotes discussions to come up
          with solutions and ideas from pioneers and amateurs.
        </p>
        <div className="cards-container">
          {committees.map((committee) => (
            <div
              key={committee.id}
              className="card"
              style={{ backgroundImage: `url(${committee.background})` }}
            >
              <div className="icon">
                <img src={logo} alt={`${committee.title} logo`} />
              </div>
              <h3>{committee.title}</h3>
              <p><span style={{fontWeight:"900"}}>"Ideas Worth Sharing: "</span>{committee.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MobileCommittees;
