import React ,{useState , useEffect,useRef}from 'react';
import reactDom from 'react-dom';
import { useResolvedPath } from 'react-router-dom';

const FunctionalCompotimer = () => {
    const intervalRef = useRef();
    const [timer,setTimer] = useState(10)
    useEffect(()=>{ 
         intervalRef.current = setInterval(()=>{
                setTimer((prevState)=> prevState + 1);        //state preverse krna padega by store privious values as an argument 1+1=2+1=3+1=4
         xx},1000);

        return()=>clearInterval(intervalRef.current);

    },[]);
    return (
        <div>
            <h1>This is funcationcal Coumponent</h1>
            <h2>Fuctional Timer:{timer}</h2>
            <button onClick={()=> clearInterval(intervalRef.current)}>Clear Timer</button>         
        </div>
    );
};
export default FunctionalCompotimer;


// useRef is a (dom)Document object model elemnt to be rafer and imutable ( changabel) this values
// setp2
//  import useRef from react
//  storing the useRef hook in a variable --> const kuch ={current:initial Value}



// use state== me state reserve why use funcation component state less hook in react fanction mangage use state initial variable by array setter and getter . 
// it  replace the preserve state preserve value of current state and update 

// use effect ==is a function  of react hooks its is closed replacement of componentdidMount , component didupdate , component didunmount
//  empty dependncy array --- funcation ki trahi call kre ki callback firsnt abd 2nd empty deonds 
// did update to rendser the update every sing gle time the use effect 
// use effect passing two array 1st depenadacy and and 2nd empty array 
//unmount if u will renturen funcation with clean code oncliean butten on refereace and unclike clean butten target and remove this effect 
// component  did unmout to use hook use effect


// 3.... use Reduser--use reduser is usallay perferable to usesteate when you have comple state logic tha involves multiple sub-value or when the nextd state depends on the previours one.
// step 1. import usereducser from react 2.  store it in avarivale with array destruction which will have a two variable in it a getter and dispatch methods c
// cosnt [count, dispatch]= use reducer()

//3. assing the variuable to use reducer hook which accpets a reducer funcation and inital state vcaluews as tits arumnet const[count, dispatch ]= use reducer (reducer, initai lstate);
// 4. declare reducer funcation whichaccpets state and s action as its arguments  const reducer =(stae, action)=>
// 5.declare the inital state value 
// cosnt initalsate=value 

// how to use 
// 1. the first variavble is a like a getter whch let you access the state
// 2. the dispatch methods is used to send and arguments as an action to reducer function.


//4 use REf = return a mutable ref object whose current property is initalized to the passed argument(intiaval valuew).the returend object will 
// it is used 2 things
// 1.Dom element refereance
// 2.To store mutualble values in an object
// step1/ importing use Ref from react 2. storing the useREf hook in a variabale 
// 3. useing ref ttribute on the elemnt uou want to refer 
// 4.using /refereing 

// setp4.. 
// impoert useref from react
// 2.string the use Ref hook in a vaiable 
// 3.use ase kuch current 