import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Styles from "./Tala.module.css";
import SendIcon from "@mui/icons-material/Send";
import Dhoni from "./Dhoni";

const Tala = () => {
  let [input, setinput] = useState("");
  let [dhoni, setDhoni] = useState(false);
  let inputvalue = (e) => {
    console.log(e.target.value);
    setinput(e.target.value);
  };

  let value = () => {
    let splited = input.trim().split("");
    // let message = "Dhoni";
    if (splited.length === 7) {
      return setDhoni(true);
    } else {
      alert("beter luck next time 🤦‍♀️")
      // console.log("ramkumarhii fuckyou!");
    }
  };

  return (
    <Container sx={{ mt: "20px",width:"100% "}}>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          backgroundColor: "#03e9f4",
          textTransform: "capitalize",
          mb: "200px",
        }}
        className={Styles.main}
      >
        Thala for a reason
      </Typography>

      <TextField
        sx={{}}
        id="outlined-textarea"
        label="Enter your text"
        placeholder="Enter your text"
        multiline
        onChange={inputvalue}
     
        
      />
      <Button variant="contained" endIcon={<SendIcon />} onClick={value}>
        Send
      </Button>
      
      {dhoni && <Stack sx={{ position: "relative", bottom: "10px",width:"100%",border:1 }}> <Dhoni /> </Stack>}
    
    </Container>
  );
};

export default Tala;
