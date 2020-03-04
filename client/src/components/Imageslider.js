import React    from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './main.css';

class ImageSlider extends React.Component {

    render() {
      return (
        <Carousel>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://66.media.tumblr.com/e81f69f76415715e64082e24b1394c14/tumblr_mog3efY36J1sq4eiqo1_500.gif"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Eminem</h3>
            <p>Like a toy soldier OUT NOW!</p>
          </Carousel.Caption>
        </Carousel.Item>
      
          
 
      </Carousel>
      );
    }
  
  }
  
  export default ImageSlider;