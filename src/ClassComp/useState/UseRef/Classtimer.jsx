import React, { Component } from 'react';

class Classtimer extends Component {          //extends componet class ko extends kra hi
    constructor(props)  {                      // construcato 
            super(props);
            this.state={timer:0}
            }
        kuchbhi;
        componentDidMount(){
            this.kuchbhi=setInterval(()=> {
                this.setState((prevState)=>({timer:prevState.timer+1}))
            },1000) ;
                                                           //setInterval is a inbulit methods to givet two argument time in second1000=1sec
        }
        componentWillUnmount(){
            clearInterval(this.kuchbhi);
        }

    render() {
        return (
            <div>
                <h1>ClassTimer:{this.state.timer}</h1>
                
                <button onClick={()=>clearInterval(this.kuchbhi)}> Clear</button>
            </div>
        );
    }
}

export default Classtimer;