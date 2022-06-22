import "bootstrap/dist/css/bootstrap.min.css"
import { Component } from "react";
import Badge from 'react-bootstrap/Badge';

class MyBadge extends Component {
    render(){
        return (
            <div>
             
              <h5>
                <Badge bg="secondary" color={this.props.Color}>{this.props.BadgeText}</Badge>
              </h5>
            
            </div>
          );
    }
}