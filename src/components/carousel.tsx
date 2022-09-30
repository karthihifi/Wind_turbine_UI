import * as React from "react";
import Carousel from "react-bootstrap/Carousel";
import Wind_model from "../model/Model";

function Carousel_img() {
   let ref = new Wind_model();
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ref.Carousel[0].img}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ref.Carousel[1].img}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel_img;
