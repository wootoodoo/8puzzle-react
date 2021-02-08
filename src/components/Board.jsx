import React from "react"

function Board(props) {
    const board = props.array;
    const step = props.step;
    return  <div className="container-fluid">
                <p>Step {step}</p>
                {board.map((row, rowIndex) => {
                    return <div className="row" key={rowIndex}>              
                        {row.map((col) => {
                            return <div className="col-lg-1 col-md-2 col-sm-2 solutionBoard">
                            {col != 0 ? <h2>{col}</h2> : null}
                            </div>
                        }
                        )}
                    </div>
                }
                )}
            </div>
}

export default Board;