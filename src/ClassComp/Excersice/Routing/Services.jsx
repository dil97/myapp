import React from 'react';
import { Carousel } from 'react-bootstrap';

export const Services = () => {
    return (
        <div>
            <h1>Services Show here</h1>
            <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block 100%"
      src="https://hm.imimg.com/imhome_gifs/im_banner_25.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block 10px"
      src="https://img.dmart.in/images/rwd/banners/hmpg/1dec21-carousel-halfprice-kwl.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block 10px"
      src="images/3.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

            
        </div>
    );
};

export default Services;