import React from "react";


function Morning(props){
    return(
    <h1>Good {props.daychanging ? "morning": " night"}</h1>

    )
}

export default Morning;