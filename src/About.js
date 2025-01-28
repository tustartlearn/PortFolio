import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        padding: "20px",
        backgroundColor: "transparent",
      }}
    >
      <Box
        sx={{
          border: "3px solid #fff",
          borderRadius: "20px",
          width: "90%",
          padding: { xs: "20px", sm: "30px", md: "40px" },
          backgroundColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent white background
          boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
          color: "#fff", 
          marginTop:'50px'
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            marginBottom: "20px",
            fontWeight: "bold",
            fontSize: { xs: "1.8rem", sm: "2rem" },
          }}
        >
          About Me
        </Typography>
        <Typography
          sx={{
            lineHeight: "1.6",
            fontSize: { xs: "1rem", sm: "1.2rem" },
            textAlign: "justify",
          }}
        >
          Hi, I’m Tushar, a passionate and detail-oriented Front-End Developer
          with a keen eye for design and user experience. I specialize in
          crafting responsive, interactive, and visually appealing web
          applications that prioritize functionality and user engagement. With
          a strong command of HTML, CSS, and JavaScript, coupled with expertise
          in modern frameworks like React, I create seamless interfaces that
          elevate the user journey.
          <br />
          <br />
          My skill set extends to tools and libraries like Material-UI, REST
          APIs, and state management solutions, enabling me to build dynamic,
          scalable, and efficient applications. I thrive on solving complex
          problems and translating creative concepts into functional code,
          ensuring every project I work on is polished and optimized.
          <br />
          <br />
          As a developer, my mission is to combine technical proficiency with
          aesthetic design, transforming ideas into impactful digital
          experiences that resonate with users and add measurable value. I take
          pride in my work and strive to leave a lasting impression through
          quality and creativity.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
