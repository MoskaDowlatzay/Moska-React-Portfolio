import React from 'react';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Portfolio = () => {
    return (
  <div>
    <h1>My Work</h1>
    <h2>A few examples of projects I have completed</h2>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner text-center">
    <div class="carousel-item active">
      <img class=" w-100" src="./assets/me.jpg" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-40" src="./assets/me.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-40" src="./assets/me.jpg" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>  </div>
  );
    };

export default Portfolio;
