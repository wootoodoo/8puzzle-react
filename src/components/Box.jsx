import React from "react";
// import Fab from "@material-ui/core/Button";

function Box(props) {
    return (
        
        <div 
            className="col-lg-1 box" 
            onDrop={(e) => props.drop(e)} 
            onDragOver={(e) => props.allowDrop(e)} 
            id={props.value}>
            <h2
                draggable="true" 
                onDragStart={(e) => props.drag(e)} 
                id={props.value} 
                row={props.row} 
                col={props.col}>
                    {props.value}
            </h2>
        </div>
    )

}

export default Box;