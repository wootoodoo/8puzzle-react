import React, {useState, useEffect} from "react";
import DisplaySolution from "./DisplaySolution"
import CircularProgress from '@material-ui/core/CircularProgress';

function Solve(props) {
    const [ solutions, setSolutions ] = useState({});
    const [ receivedSolution, setReceivedSolution ] = useState(false);
    const [ clicked, setClicked ] = useState(false);
   
    function solver() {
        setClicked(true);
        const currentArray = props.problemArray;
        let arrayString = ""
        currentArray.map((row, rowIndex) => {
            if (rowIndex > 0) {
                arrayString += "#"}
            return row.map((col, colIndex) => {
                arrayString += col;
                if (colIndex < currentArray.length - 1) {
                     arrayString += ",";}
                return arrayString;
            })        
        })
        const post = {
            array: arrayString
        }

        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(post)
        };
        fetch('https://lwhnjmvs47.execute-api.ap-southeast-1.amazonaws.com/Dev', request)
            .then(response => {
                setClicked(false);
                return response.json()})
            .then(data => {
                setSolutions({...data}); 
                setReceivedSolution(true);
            })
            .catch(err => console.log(err));

    }

    useEffect(() => {
        console.log("rendering buffer icon");
    }, [clicked]);

    return <div>
                <button type="button" className="btn btn-dark btn-lg" 
                        onClick={solver}> SOLVE</button>
                {
                    clicked && <div>
                            <CircularProgress color="primary"/>
                        </div>
                }
                {receivedSolution && <DisplaySolution 
                    numSteps={solutions.numSteps}
                    timeInMillis={solutions.executionTimeInMillis}
                    history={solutions.history}
                />}
            </div>
    
}

export default Solve;