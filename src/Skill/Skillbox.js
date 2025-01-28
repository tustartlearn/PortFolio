import React from "react";
import { Box, Typography } from "@mui/material";

const Skillbox = (props) => {
  return (
    <Box
      sx={{
        border: "2px solid #fff",
        borderRadius: "25px",
        width: { xs: "60%", sm: "40%", md: "40%", lg: "50%" },
        height: { xs: "15vh", sm: "18vh", md: "20vh", lg: "22vh" },
        display: "flex",
        justifyContent: "center", 
        alignItems:'center', 
        flexDirection:'column',
        margin: "auto",
      }}
    >
       <img
          src={props.image}
          alt="Logo"
          style={{
            width: '60%',
            height: '60%',
            borderRadius: '50%', // Optional: Makes the image circular
          }}
        />  
        <Typography variant="body" color="#fff">{props.title}</Typography>
        
    </Box>
  );
};

export default Skillbox;
