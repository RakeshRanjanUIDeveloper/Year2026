import { useState } from "react";

const AcronymGenerator = () =>{
    const [enteredValue, setEnteredValue] = useState("");
    const [acronym, setAcronym] = useState("")
    function handleAcronym(){
        setAcronym(enteredValue.trim().split(/\s+/).map(word => word[0]).join("").toUpperCase())
    }
    return (
        <div>
            <h1>Acronym Generator</h1>
            <p>An acronym is formed by taking the first letter of each word in a phrase
        and converting them to uppercase.</p>
            <ul>
                <li>trim() - Removes whitespace from the beginning and end of the string.</li>
                <li>split(/\s+/) - converts the string into an array.</li>
                    <ul>
                        <li>/ = The regular expression starts here. The first / is the opening delimiter.</li>
                        <li>\ =This is called a backslash.</li>
                        <li>\s = Together, they mean whitespace. Find one whitespace character.</li>
                        <li>+ = This is called a quantifier.</li>
                        <li>\s+ = one or more whitespace characters</li>
                    </ul>
                <li>map() - goes through every item in the array.</li>
                <li>join() - combines the array items into a string.</li>
            </ul>
            <div>
                <input type="text" placeholder="Enter a Phrase..." onChange={(e) => setEnteredValue(e.target.value)} value={enteredValue}  />
                <button onClick={handleAcronym}>Generate</button>
                <p>Result : {acronym}</p>
            </div>
        </div>
    )
}

export default AcronymGenerator;