// import React from 'react';
import "./style.css";
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import $ from 'jquery';

// // const Portfolio = () => {
// //     return (
// //   <div>
// //     <h1>My Work</h1>
// //     <h2>A few examples of projects I have completed</h2>
// //     <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
// //   <div className="carousel-inner text-center">
// //     <div className="carousel-item active">
// //       <img src="./assets/portfolio1.png" alt="First slide"/>
// //     </div>
// //     <div className="carousel-item">
// //       <img src="./assets/me.jpg" alt="Second slide"/>
// //     </div>
// //     <div className="carousel-item">
// //       <img src="./assets/bowtie-cat.png" alt="Third slide"/>
// //     </div>
// //   </div>
// //   <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
// //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
// //     <span className="sr-only">Previous</span>
// //   </a>
// //   <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
// //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
// //     <span className="sr-only">Next</span>
// //   </a>
// // </div>  
// // </div>
// //   );
// //     };

// // export default Portfolio;


// import { Carousel } from 'react-bootstrap';
// const Portfolio = () => {
//   return (
//     <Carousel>
//       <Carousel>
//   <Carousel.Item>
//     <img
//       // className="d-block w-100"
//       src="./assets/me.jpg"
//       alt="First slide"
//     />
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       // className="d-block w-100"
//       src="./assets/Portfolio1.png"
//       alt="Second slide"
//     />
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       // className="d-block w-100"
//       src="./assets/bowtie-cat.png"
//       alt="third slide"
//     />
//   </Carousel.Item>
// </Carousel>
//     </Carousel>
//   );
// }
// export default Portfolio;

import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 
  
export default function App() { 
  return ( 
    <div style={{ display: 'block', width: 700, padding: 30 }}> 
<h1>Here are some examples of the applications I have created</h1>      
<Carousel> 
        <Carousel.Item interval={1500}> 
          <img 
            className="d-block w-100"
src="./assets/Portfolio1 2.jpg"
            alt="Image One"
          /> 
          {/* <Carousel.Caption> 
            <h3>Label for first slide</h3> 
            <p>Sample Text for Image One</p> 
          </Carousel.Caption>  */}
        </Carousel.Item> 
        <Carousel.Item interval={1500}> 
          <img 
            className="d-block w-100"
src="./assets/Portfolio-html.jpg"
            alt="Image Two"
          /> 
          {/* <Carousel.Caption> 
            <h3>Label for second slide</h3> 
            <p>Sample Text for Image Two</p> 
          </Carousel.Caption>  */}
        </Carousel.Item> 
        <Carousel.Item interval={1500}> 
          <img 
            className="d-block w-100"
src="./assets/Portfolio3.jpg"
            alt="Image One"
          /> 
          
          {/* <Carousel.Caption> 
            <h3>Label for first slide</h3> 
            <p>Sample Text for Image One</p> 
          </Carousel.Caption>  */}
        </Carousel.Item> 
        <Carousel.Item interval={1500}> 
          <img 
            className="d-block w-100"
src="./assets/Portfolio4.png"
            alt="Image One"
          /> 
          
          {/* <Carousel.Caption> 
            <h3>Label for first slide</h3> 
            <p>Sample Text for Image One</p> 
          </Carousel.Caption>  */}
        </Carousel.Item> 

        <Carousel.Item interval={1500}> 
          <img 
            className="d-block w-100"
src="./assets/Portfolio6.png"
            alt="Image One"
          /> 
          {/* <Carousel.Caption> 
            <h3>Label for first slide</h3> 
            <p>Sample Text for Image One</p> 
          </Carousel.Caption>  */}
        </Carousel.Item> 
        <Carousel.Item interval={1500}> 
          <img 
            className="d-block w-100"
src="./assets/Portfolio5.png"
            alt="Image One"
          /> 
          {/* <Carousel.Caption> 
            <h2>hello</h2>
          </Carousel.Caption>  */}
        </Carousel.Item> 
      </Carousel> 
    </div> 
  ); 
}