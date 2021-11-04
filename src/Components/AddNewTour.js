import "./style.css"
import {Form,Button} from "react-bootstrap"
import {useState} from "react"
import {Link} from "react-router-dom"

function AddNewtour({AddTour}){

const [name,setName]=useState("");
const [info,setInfo]=useState("");
const [img,setImg]=useState("");
const [price,setPrice]=useState("");



    return(
      <div>
      <Link to="/"> <Button  className="tlist" variant="outline-danger">Home Page</Button></Link>
<Form className="add">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="name tour" onChange={(e)=>setName(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Info</Form.Label>
    <Form.Control type="text" placeholder="information" onChange={(e)=>setInfo(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label>Image</Form.Label>
    <Form.Control type="text" placeholder="Enter image"  onChange={(e)=>setImg(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Price</Form.Label>
    <Form.Control type="text" placeholder="Enter price" onChange={(e)=>setPrice(e.target.value)} />
  </Form.Group>
  <Button variant="outline-success" onClick={()=>AddTour({name,info,img,price})}>Add New Tour</Button>
  </Form>
  </div>
    )
}
export default AddNewtour;