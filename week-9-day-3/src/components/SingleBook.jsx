import {Component} from "react"
import BookList from "../data/horror.json"
import "bootstrap/dist/css/bootstrap.min.css"
import {Col, Card, Button} from "react-bootstrap"

class SingleBook extends Component{
    render(){
        return (
            <Col key={this.props.BookData.asin} xs={12} sm={6} md={4} lg={3} >
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={this.props.BookData.img} alt ="no image" 
              />
              <Card.Body>
                <Card.Title>{this.props.BookData.title}</Card.Title>
              
                <Button variant="primary">{this.props.BookData.price}</Button>
              </Card.Body>
              
            </Card>
            </Col>
          );
    }
}
export default SingleBook