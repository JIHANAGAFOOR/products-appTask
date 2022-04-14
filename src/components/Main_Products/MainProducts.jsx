// import React,{useEffect ,useState} from 'react'
// import './MainProducts.css';
// import axios from 'axios'
// import {Container,Row,Col,Card,Button} from 'react-bootstrap'
// function MainProducts() {
//   const [data,setData]=useState([])
  // useEffect(()=>{
  //   axios.get("https://fakestoreapi.com/products").then((response)=>{
  //     console.log("data is "+JSON.stringify(response.data));
  //     setData(response.data)
  //     console.log(data);
  //   })
  // },[]) 
//   return (
//     <div>
//       <Container>
//       <Row>
//       <Col lg={4}></Col>
//       <Col lg={4} id="main">
//       <div id="main_div">
//          {
//             data.map((details)=>(
//               <Card style={{border:"1px solid black",margin:"20px",padding:"20px"}}>
//         <Card.Img variant="top" src={details.image} style={{height:"200px",width:"200px"}}/>
//         <Card.Body>
//           <Card.Title>{details.price}</Card.Title>
//           <Card.Text>
//            {details.title}
//           </Card.Text>
//           <Button variant="primary">Add to cart</Button>
//         </Card.Body>
//       </Card>   
//             ))
//           } 
//              </div>
//       </Col>
//       <Col lg={4}>
//       </Col>
//       </Row>
//       </Container>
//     </div>
//   )
// }

// export default MainProducts
import { Carousel } from 'react-carousel-minimal';
import React,{useEffect ,useState} from 'react'
import axios from 'axios'
function MainProducts() {
  const [datas,setDatas]=useState([])
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((response)=>{
      console.log("data is "+JSON.stringify(response.data));
      setDatas(response.data)
      console.log( datas);
    })
  },[])
 const data = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: "San Francisco",
      rate:120,
    },
    {
      image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "Scotland",
      rate:120,
    },
    {
      image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Darjeeling",
      rate:120,
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco",
      rate:120,
    },
    {
      image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "Scotland"
    },
    {
      image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "1200"
    },
    {
      image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "San Francisco"
    },
    {
      image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "Scotland"
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Darjeeling"
    }
  ];

  // const captionStyle = {
  //   fontSize: '2em',
  //   fontWeight: 'bold',
  // }
  // const slideNumberStyle = {
  //   fontSize: '20px',
  //   fontWeight: 'bold',
  // }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <h2>React Carousel Minimal</h2>
        <p>Easy to use, responsive and customizable carousel component for React Projects.</p>
        <div style={{
          padding: "0 20px"
        }}>
        
          <Carousel
            data={datas}
            rate={datas.price}
            time={2000}
            width="850px"
            height="500px"
           
            radius="10px"
            slideNumber={false}
           
            // captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="blue"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default MainProducts;
