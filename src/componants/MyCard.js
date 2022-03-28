import React from "react";
import {ListGroup, ListGroupItem,Card} from "react-bootstrap";
import { Component } from "react";
class MyCard extends Component {
    render() {
      let {title,text,listText,img}=this.props;
        return(
            <Card style={{ width: '18rem' , paddingLeft:"10px" , marginLeft:"20px"}}>
            <Card.Img variant="top" src={img} style={{ width:"270px" ,height:"200px"}} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
               {text}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{listText}</ListGroupItem>
            </ListGroup>
          </Card>
        )
    }
}

export default MyCard;