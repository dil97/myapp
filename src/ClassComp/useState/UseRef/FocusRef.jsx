import React,{useRef, useEffect} from 'react';

const FocusRef = () => {
    const inputRef = useRef();          // currenet key ke sath ek object a rha hi
    const buttonRef=useRef();
    const handlefocus=()=>{
        inputRef.current.focus();
        buttonRef.current.focus();       //input Ref ko jha bhi ref diya vha Refer krta th
            
        // document.getElementById("input").focus()
    }
    // useEffect(()=>{
    //     console.log(buttonRef);
    //     console.log(inputRef);

    // },[])
 

    return (
        <div>
            <h1>Hello UseRef</h1>
            <input ref={inputRef} type="text" />
            <input ref={inputRef} type="text" />
            
            <button onClick={handlefocus}>Foucs</button>
            {/* <button onClick={handlefocus}>Foucs</button> */}
        </div>
    );
};

export default FocusRef;

// inputRef is to imutable and also its Ref to the Dom.curretn on foucus===inputRef.current.foucs()
// dom elelemnt ref  dom ki elemnt ke ref also sotre mutable value.
// useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
//  it is used for two things
//  1.DOM Element referance
// 2. To store mutable values in an Object
// 3. using ref attribute on the elemnt you want to ref..>  ..< input ref {inputref}/>
// 4. 

// step:
// 1. importing 