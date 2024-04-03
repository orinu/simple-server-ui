import "./App.css";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function App() {
  const [message, setMessage] = useState("");

  const clickHandler = async () => {
    try {
      const res = await await fetch("http://127.0.0.1:3000/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message
        }),
      });
      setMessage(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      {" "}
      <div className="container">
        <TextField
          id="outlined-multiline-flexible"
          label="Insert Text here"
          multiline
          maxRows={10}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <Button variant="contained" onClick={() => clickHandler()}>
          Send Data
        </Button>
      </div>
    </div>
  );
}

export default App;
