import React,{Component} from "react";

export class Practi extends Component {

    constructor (){
        super() ;                         // parent componet not exits that time super use yes or noti
        this.mousehandlemove= this.mousehandlemove;         // the state or behavior that one component encapsulates to other components that need that same state
        this.state= {x:0 , y:0};

    }
    handleeventmove(event) {
        this.state({
            x = eventclientX,
        
            y =eventclienty
        })
    }

    render () {
        return(
            <div>
                <h2>Moves the mous around</h2>
                <p>this is a class componenet {this.state.x}  {this.state.y}  </p>
            </div>
        )
    }

};
