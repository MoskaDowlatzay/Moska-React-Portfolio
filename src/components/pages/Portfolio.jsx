import React from 'react';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';

const Portfolio = () => {
    return (
  <div>
    <h1>My Work</h1>
    <h2>A few examples of projects I have completed</h2>
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner text-center">
    <div className="carousel-item active">
      <img src="./assets/portfolio1.png" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img src="./assets/me.jpg" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img src="./assets/bowtie-cat.png" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>  
</div>
  );
    };

export default Portfolio;
