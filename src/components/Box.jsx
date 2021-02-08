import React from "react";

function Box(props) {
    return (
        
        <div 
            className="col-lg-1 col-md-2 col-sm-2 box" 
            onDrop={(e) => props.drop(e)} 
            onDragOver={(e) => props.allowDrop(e)} 
            id={props.value}>
            <h2
                draggable="true" 
                onDragStart={(e) => props.drag(e)} 
                id={props.value} 
                row={props.row} 
                col={props.col}>
                    {props.displayValue}
            </h2>
        </div>
    )

}

export default Box;