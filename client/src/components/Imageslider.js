import React    from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './main.css';

class ImageSlider extends React.Component {

    render() {
      return (
        <Carousel>
        <Carousel.Item>
          <img
            className="text"
            
            alt="Add Your Favourite music"
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        
          <img
            className="text"
            
            alt="All your music history is saved"
          />
     
          <Carousel.Caption>
        
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="text"
           
            alt="Third slide"
          />
      
          <Carousel.Caption>
         
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      );
    }
  
  }
  
  export default ImageSlider;