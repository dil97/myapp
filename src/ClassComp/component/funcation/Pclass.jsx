import React ,{Component}  from "react";

export class Pclass extends Component {                  /// react ke pakage ke extends ek component hi 
    constructor () {
        super ();
        this.state ={ekNaam: "---DANGER---"}
    }

    
        render (){
            return(
                <div>Hello this are child component      
             <h2>  Hello {this.state.ekNaam} this red</h2>

             </div>
            )
        }
};


// import React ,{component} from "react";


// export class Pclass extends component {
//     constructor (){
//         super()}
//         render (){                                                                      // to be used in print funcation
//             return ( 
//                 <div>
//                     <h1>this is a class componenet</h1>
//                 </div>
//             )
//         }

           
//         }
    

 