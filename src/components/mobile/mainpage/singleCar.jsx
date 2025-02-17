import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import IMG1 from "../../../assets/DSC09582 1.png";
import IMG2 from "../../../assets/DSC09080 1.png";
import IMG3 from "../../../assets/DSC09244 1.png";
import IMG4 from "../../../assets/DSC09196 1.png";
import IMG5 from "../../../assets/DSC09342 1.png";
import IMG6 from "../../../assets/DSC09365 1.png";
import IMG7 from "../../../assets/DSC09399 1.png";
import IMG8 from "../../../assets/DSC09582 1 (1).png";

function SingleCarousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <ol className="carousel-indicators">
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={IMG1} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={IMG2} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={IMG3} alt="Third slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={IMG4} alt="Fourth slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={IMG5} alt="Fifth slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={IMG6} alt="Sixth slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={IMG7} alt="Seventh slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={IMG8} alt="Eighth slide" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
}

export default SingleCarousel;
