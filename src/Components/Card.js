import {Link} from "react-router-dom"
import {Card,Button} from "react-bootstrap"
import "./style.css"


function TourCard({tours,match}){

const tour=tours.find(tour=>tour.id==match.params.tourId)



    return(
      <div>
      <Link to="/"> <Button  className="tlist" variant="outline-danger">Home Page</Button></Link>
<div className="cart">

<Card   style={{ width: '25rem' }}>
  <Card.Img variant="top" src={tour.img}  height="320"/>
  <Card.Body>
    <Card.Title>{tour.name}</Card.Title>
    <Card.Text>
      {tour.info}
    </Card.Text>
  </Card.Body>
</Card>
</div>
</div>
    )
}
export default TourCard;