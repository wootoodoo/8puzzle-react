import React from "react"
import Board from "./Board"

function DisplaySolution(props) {
    const history = props.history;
    return <div className="alternative-background">
                {
                    props.numSteps !== -1 ? 
                    <h1>The Number of steps taken is: {props.numSteps}</h1>
                    : <h1>There was no solution to this puzzle!</h1>
                }
                <p>The time taken for this to be solved in the backend on AWS Lambda + node.js was <em>{props.timeInMillis}</em> milliseconds.</p>
                {props.numSteps !== -1 && <h2>This is how to solve it!</h2>}
                {props.numSteps !== -1 && <div className="container-fluid boards">
                    {history.map((array, index) => {
                        return <Board 
                                key={index}
                                array={array}
                                step={index}
                        />
                    })} 
                </div>}
                
            </div>
}

export default DisplaySolution;