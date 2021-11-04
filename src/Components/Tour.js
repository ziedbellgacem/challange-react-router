import { useState } from "react";
import {Card,Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import "./style.css"


function CardTour({tour,Delete}){

const[read,setRead]=useState(false);
const toggle=()=>{
  setRead(!read);
};



    return(

<Card  className="card" style={{ width: '22rem' }}>
  <Card.Img variant="top" src={tour.img}  height="320"/>
  <Card.Body>
    <Card.Title>{tour.name}</Card.Title>
    <Card.Text>
      {read?tour.info:tour.info.slice(0,170)}
      <button className="but" onClick={toggle}>{read ?"read less":"read more"}</button>
    </Card.Text>
    <Button variant="outline-info"  onClick={()=>Delete(tour.id)}>Not Interested</Button>
   <Link to={`/Tour/${tour.id}`}> <Button variant="outline-success">More Details</Button></Link>
  </Card.Body>
</Card>


    )
}
export default CardTour;