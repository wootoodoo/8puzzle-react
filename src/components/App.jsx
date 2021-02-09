import React, {useState}  from "react";
import Box from "./Box";
import Solve from "./Solve"
import Footer from "./Footer"

function App() {
    const [ dimensions, changeDimensions ] = useState(3);
    const [ currentArray, setCurrentArray ] = useState([[1, 2, 3], [4, 5, 6], [7, 8, 0]]);
    
    function generate3(){
        changeDimensions(3);
        setCurrentArray(buildArray());
    }
    function generate4(){
        changeDimensions(4);
        setCurrentArray(buildArray());
    }

    function buildArray() {
        let array = new Array(dimensions);
        for (let i = 0; i < array.length; i++) {
            array[i] = new Array(dimensions);
            for (let x = 0; x < dimensions; x++) {
                if ((x + 1) * (i + 1) === dimensions**2) {
                    array[i][x] = 0;
                } else {
                    array[i][x] = i * dimensions + x + 1;
                }
            }
        }
        return array;
    }

    function allowDrop(ev) {
        if (ev.target.id === "0") {
            ev.preventDefault();
        }
    }
    
    function drag(ev) {
        
        const data = JSON.stringify({
            id: ev.target.id,
            row: ev.target.attributes.row.value,
            col: ev.target.attributes.col.value
        })
        ev.dataTransfer.setData("text/plain", data);
    }
    
    function drop(ev) {
        console.log(ev);
        ev.preventDefault();
        let movingBoxDataJSON = ev.dataTransfer.getData("text/plain");
        let movingBoxData = JSON.parse(movingBoxDataJSON)
        let currentBoxData = {};
        if (ev.target.attributes.id.value != 0) {
            currentBoxData = {
            id: ev.target.attributes.id.value,
            row: ev.target.attributes.row.value,
            col: ev.target.attributes.col.value
        }}
        else {
            currentBoxData = {
                id: ev.target.attributes.id.value,
                row: ev.target.childNodes[0].attributes.row.value,
                col: ev.target.childNodes[0].attributes.col.value
            }
        }
        
        // Change the array's state
        let newArray = currentArray;
        let currentBoxValue = currentArray[currentBoxData.row][currentBoxData.col];
        newArray[currentBoxData.row][currentBoxData.col] = currentArray[movingBoxData.row][movingBoxData.col];
        newArray[movingBoxData.row][movingBoxData.col] = currentBoxValue;
        setCurrentArray([...newArray]);
    }
    
    return (
        <div>
            <h1 className="title"> 8 Puzzle Solver </h1>
            <p>Drag and Drop the tiles surrounding the empty tile to generate a puzzle.</p>
            <p>For mobile/tablet users, hold-down on the tile for 1 sec to move it</p>

            <div>
                <div>
                    <button type="button" className="btn btn-dark btn-lg" onClick={generate3}>Generate 3x3 puzzle</button>
                    <button type="button" className="btn btn-dark btn-lg" onClick={generate4}>Generate 4x4 puzzle</button>
                </div>
            <div className="boards">
                <div className="container-fluid">
                    {currentArray.map((row, rowIndex) => {
                        return <div className="row" key={rowIndex}>              
                            {row.map((col, colIndex) => {
                                return <Box 
                                    key={col}
                                    value={col}
                                    displayValue={(col === 0 ? null : col)}
                                    allowDrop={allowDrop}
                                    drop={drop}
                                    drag={drag}
                                    row= {rowIndex}
                                    col= {colIndex}
                                />
                            }
                            )}
                        </div>
                    }
                    )}
                </div>
            </div>
            <p>When you are ready to test the system, press the SOLVE button below!</p>
            <Solve 
                problemArray={currentArray}
            />
            
        </div>   
            
        <Footer />
        </div>
    );

}

export default App;