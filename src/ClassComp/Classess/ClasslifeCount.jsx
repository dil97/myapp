import React,{Component} from "react";
import CountClass from "./CountClass";

export class ClasslifeCount extends Component{
    constructor(){
        super();
        this.state = {count:10};
    }
     componentDidUpdate (){
       document.title= this.state.count +"titlechnaged"
    }
    handleincrement=()=>{
        this.setState({
            count: this.state.count-1,
        })
    }
    render(){
        return(
            <div>
                <h2> Class Comp counter with component did mount</h2>
                <h1>Count:{this.state.count} </h1>
                <button onClick={()=>this.setState({count:this.state.count+1})} >
                    increment</button>
                <button onClick={()=>{this.handleincrement.}} >
                    Multi</button>
                <CountClass kyaNamm={this.handleincrement}/>
               

                <h3>This is RAndom</h3>
                {/* <button onClick={()=>this.random(counthis.state.count(100))}></button> */}
            </div>
        )
    }
} 


// class coumnentp use setstate method i,e is comopennet ka set 
// to manage the state
// super remove krene ke bad error ? why?super is a call to be a parent component because "this." key word use krne ke lya in classs exteend coumponent .