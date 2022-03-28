import React from "react";
import {Carousel ,} from "react-bootstrap";
import { Component } from "react";
class Slider extends Component {
    render() {
        return(
            <Carousel fade  style={{paddingRight:"50px",paddingLeft:"50px",paddingBottom:"50px",paddingTop:"50px"}}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.masala.com/cloud/2021/08/01/PE4IiXYl-Best-beauty-salon-abu-dhabi.jpg"
                style={{height:'300px' , width:'400px'}}
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNT4-Gx1NM-ZmcpY8AH0BKfHjAFsYCVCFVTQ&usqp=CAU"
                style={{height:'300px' , width:'400px'}}
                alt="Second slide"
               
              />
          
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://apkmody.net/wp-content/uploads/2021/07/unnamed.jpg"
                style={{height:'300px' , width:'400px'}}
                alt="Third slide"
            
              />
          
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel> 
        )
    }
}

export default Slider;