import "./style.css";
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
src="./portfolio1 2.jpg"
            alt="Image One"
          /> 
        </Carousel.Item> 
        <Carousel.Item interval={1500}> 
          <img 
            className="d-block w-100"
src="./portfolio-html.jpg"
            alt="Image Two"
          /> 
        </Carousel.Item> 
        <Carousel.Item interval={1500}> 
          <img 
            className="d-block w-100"
src="./Portfolio3.jpg"
            alt="Image One"
          /> 
        </Carousel.Item> 
        <Carousel.Item interval={1500}> 
          <img 
            className="d-block w-100"
src="./Portfolio4.png"
            alt="Image One"
          /> 
        </Carousel.Item> 

        <Carousel.Item interval={1500}> 
          <img 
            className="d-block w-100"
src="./Portfolio6.png"
            alt="Image One"
          /> 
        </Carousel.Item> 
        <Carousel.Item interval={1500}> 
          <img 
            className="d-block w-100"
src="./Portfolio5.png"
            alt="Image One"
          /> 
        </Carousel.Item> 
      </Carousel> 
      <br></br>
      <h2>Click on the link to <a href="path/to/your/resume.docx" download>
  Download My Resume (Word)
</a></h2>
    </div> 

  ); 
}