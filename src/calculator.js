import { useState } from "react";

const Calculator = () => {
    const arr = [
        "7","8","9","+",
        "4","5","6","-",
        "1","2","3","*",
        "C","0","=","/"
    ];
    const styles = {
        container: {
          width: "300px",
          margin: "50px auto",
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
          overflow: "hidden",
        },
        display: {
          backgroundColor: "#000",
          color: "#fff",
          padding: "20px",
          fontSize: "2rem",
          textAlign: "right",
        },
        buttons: {
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1px",
        },
        button: {
          padding: "20px",
          fontSize: "1.5rem",
          cursor: "pointer",
          backgroundColor: "#f1f1f1",
          border: "none",
          outline: "none",
          transition: "background-color 0.3s ease",
        },
        buttonHover: {
          backgroundColor: "#ddd",
        },
      };
      const [input,setInput] = useState("");
      const [result,setResult] = useState("");

      const handleClick = (val) => {
        setInput((prev) => prev + val );
      }
      const calclulate = () => {
        try {
          // Handle division by zero and invalid inputs
          if (input.includes("/0")) {
            setResult("Infinity");
          } else if (input === "0/0") {
            setResult("NaN");
          } else if (!/^\d+(\.\d+)?([+\-*/]\d+(\.\d+)?)*$/.test(input)) {
            // Regex to ensure input ends with a valid number, not an operator
            setResult("Error");
          } else {
            const evaluatedResult = eval(input); // Use eval safely
            setResult(evaluatedResult.toString());
          }
        } catch (error) {
          setResult("Error");
        }
      }
      // Clear the input and result
      const handleClear = () => {
        setInput("");
        setResult("");
      };
    return(
        <div style={styles.container}>
          <div style={styles.display}>
          <div style={styles.display}>
            <input
              type="text"
              value={input}
              readOnly
              style={{
                backgroundColor: "#000",
                color: "#fff",
                width: "100%",
                fontSize: "1.5rem",
                textAlign: "right",
                border: "none",
                outline: "none",
                padding: "10px",
              }}
            />
            <input
              type="text"
              value={result ? `= ${result}` : ""}
              readOnly
              style={{
                backgroundColor: "#000",
                color: "#fff",
                width: "100%",
                fontSize: "1.5rem",
                textAlign: "right",
                border: "none",
                outline: "none",
                padding: "10px",
              }}
            />
          </div>
          </div>
            <div style={styles.buttons}>
                {arr.map((btn) => (
                    <button key={btn} onClick={() => btn === "=" ? calclulate() : btn === "C" ? handleClear() : handleClick(btn)}disabled={btn === "=" && !input}>{btn}</button>

                ))
                }
            </div>
        </div>
    )
}

export default Calculator;