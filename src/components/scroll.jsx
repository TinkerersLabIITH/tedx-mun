import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import IMG1 from "../assets/DSC09244 1.png";
import IMG2 from "../assets/DSC09342 1.png";
import IMG3 from "../assets/DSC09582 1.png";
import IMG4 from "../assets/Group 1437254112.png";

function Scroll() {
  const images = [
    {
      text: "First slide",
      image1: IMG1,
      image2: IMG2,
    },
    {
      text: "Second slide",
      image1: IMG2,
      image2: IMG3,
    },
    {
      text: "Third slide",
      image1: IMG3,
      image2: IMG1,
    },
  ];

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <Carousel fade>
        {images.map((slide, index) => (
          <Carousel.Item key={index}>
            {/* IMG4 centered in the carousel */}
            <img
              src={IMG4}
              alt="Center Image"
              style={{
                zIndex: "10",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "20%", // Adjust as needed
                objectFit: "contain",
              }}
            />
            <div
              style={{
                display: "flex",
                height: "70vh",
                width: "100%",
                margin: "0",
              }}
            >
              <div
                style={{
                  flex: "1",
                  overflow: "hidden",
                  transition: "all 0.5s ease-in-out",
                  borderRadius: "10px 0 0 10px",
                }}
              >
                <img
                  src={slide.image1}
                  alt={`${slide.text} - Image 1`}
                  style={{
                    width: "100%",
                    height: "65vh",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1",
                  overflow: "hidden",
                  transition: "all 0.5s ease-in-out",
                  borderRadius: "0 10px 10px 0",
                }}
              >
                <img
                  src={slide.image2}
                  alt={`${slide.text} - Image 2`}
                  style={{
                    width: "100%",
                    height: "65vh",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      {/* Custom styles for next and prev buttons */}
      <style>
        {`
        .carousel-control-prev,
        .carousel-control-next {
          width: auto;
          height: 50px;
          top: 50%;
          transform: translateY(-50%);
          background-color: #615a48;
          padding: 2vw;
          box-shadow: none;
        }

        .carousel-control-prev {
          left: 0;
          border-radius: 0px 5px 5px 0px;
        }
        .carousel-control-next {
          right: 0;
          border-radius: 5px 0 0 5px;
        }
        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          width: 20px;
          height: 20px;
        }
        .carousel-control-prev:hover,
        .carousel-control-next:hover,
        .carousel-control-prev:focus,
        .carousel-control-next:focus {
          background-color: #615a48; /* Same as default */
          box-shadow: none;
        }
      `}
      </style>
    </div>
  );
}

export default Scroll;
