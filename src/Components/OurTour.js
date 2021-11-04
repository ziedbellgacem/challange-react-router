import "./style.css"
import CardTour from './Tour'
import {Button} from "react-bootstrap"
import {Link} from "react-router-dom"



function ListTours({tours,Delete,searchTour}){



    return (
      <div >
       <Link to="/"> <Button  className="tlist" variant="outline-danger">Home Page</Button></Link>
      <div className="list">  
      
         {
        tours.filter(tour =>tour.name
              .toLowerCase()
              .includes(searchTour.toLowerCase().trim())  )
        .map(tour => 
          <CardTour tour={tour} key={tour.id} />
        )
        }

        </div>
        </div>
    )
}

export default ListTours;