
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './sample.css';
import {Zoom,Roll,Rotate} from 'react-reveal';
import {Container,Row,Col} from 'react-bootstrap'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReactStars from "react-rating-stars-component";
const Sample = () => {
    const [data,setData]=useState([])
    
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((response)=>{
          console.log("data is "+JSON.stringify(response.data));
          setData(response.data)
          console.log(data);
        })
      },[]) 
      
  return (
  <div>
  <Container>
  <Row>
  <Col lg={1}></Col>
  <Col lg={10}>
  <Carousel className="main-slide" fade={true}>
  {
    data.map((details)=>(
      <div id="fade-in-image">
      <img src={details.image}/>
      <Zoom left>
      <p id="title">{details.title}</p></Zoom>
      <Roll top><Zoom top>
      <p id="price">${details.price}</p></Zoom></Roll>
      <div>
      <div id="rate">
      <ReactStars 
    count={5}
    value={details.rating.rate}
    size={24}
    activeColor="#ffd700"
  /></div></div>
  <Rotate top>
  <p id="desc">{details.description}</p></Rotate>
      <button>Add to cart</button>
      
    </div>
    ))
  }
 

</Carousel>
  </Col>
  <Col lg={1}></Col>
  </Row>
  </Container>
  
  </div>
  )
}

export default Sample
