import React from "react";

export const ProChil =(props) => {
                        // prop is an object why use ? parent to child deta send , also 2nd  one directly to key value pair  jetne prop bhejo ge itene key value pair banege.
    return(

        <div>
            <h1>hello ! iam  the Child Component {props.h} </h1>
            <h3>prop receiverd from the parent:{indi}</h3>
          


        </div>
    )
}