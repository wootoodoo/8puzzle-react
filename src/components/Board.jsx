import React from "react"

function Board(props) {
    const board = props.array;
    const step = props.step;
    return  <div className="container-fluid">
                <h1>Step {step}</h1>
                {board.map((row, rowIndex) => {
                    return <div className="row" key={rowIndex}>              
                        {row.map((col) => {
                            return <div className="col-lg-1 solutionBoard">
                            <h2>{col}</h2>
                            </div>
                        }
                        )}
                    </div>
                }
                )}
            </div>
}

export default Board;