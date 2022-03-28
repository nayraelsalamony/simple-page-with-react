import React from "react";
import {Button} from "react-bootstrap";
import { Component } from "react";
class Counter extends Component {
    state={
        num : 0
    }
    
    increaseNum=()=>{
        this.setState({
            num : (this.state.num)+1
        })
    };

    DecreaseNum=()=>{
        this.setState({
            num : (this.state.num)-1
        })
    }
    render() {
        return(
            <div className="text-center mb-5">
                <Button onClick={this.increaseNum} variant="success" className="mx-5 fw-bold fs-5 px-4 py-2" 
                style={{paddingTop:"100px"}}>Increase</Button>
                <span className="mx-5 fw-bold fs-5 px-4 py-2" 
                style={{border: '1px solid black' ,paddingBottom:"100px" , backgroundColor:"red",borderRadius:"50%",}}>{this.state.num}</span>
                <Button onClick={this.DecreaseNum} variant="danger" className="mx-5 fw-bold fs-5 px-4 py-2"
                style={{paddingTop:"100px"}}>Decrease</Button>
                
            </div>
        )
    }
}

export default Counter;