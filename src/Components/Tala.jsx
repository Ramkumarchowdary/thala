import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Styles from "./Tala.module.css";
import SendIcon from "@mui/icons-material/Send";

const Tala = () => {
  let [input, setinput] = useState("");
  let inputvalue = (e) => {
    console.log(e.target.value);
    setinput(e.target.value);
    ;
  };

  let value = () => {
   let splited=input.trim().split("")
   let message= console.log("hiiiiiiiiiiiiii");
    if(splited.length===7){
        return (
           message
        )
        
    }
    else{
        console.log("ramkumarhii fuckyou!");
    }
    console.log( splited.length)
  };

  return (
    <Container sx={{ mt: "20px" }}>
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
    </Container>
  );
};

export default Tala;
