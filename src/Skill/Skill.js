import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Skillbox from "./Skillbox";
import HTML from "../Assets/Html.png";
import CSS from "../Assets/css.png";
import JS from "../Assets/JS.png";
import ReactLogo from "../Assets/React.png";
import Node from "../Assets/Node.png";
import Mongo from "../Assets/Mongo db.png";
import Material from "../Assets/Material Ui.png";
import Rest from "../Assets/Rest Aoi.png";

const Skill = () => {
  return (
    <Box sx={{ padding: "20px", minHeight: "80vh", marginTop: "90px" }}>
      
      <Typography
        variant="h4"
        sx={{
          color: "#fff",
          textAlign: "center", 

          marginBottom: "50px",
          fontWeight: "bold",
        }}
      >
        My Skills
      </Typography>

      {/* Skill Boxes */}
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Skillbox image={HTML} title="HTML" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Skillbox image={CSS} title="CSS" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Skillbox image={JS} title="JavaScript" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Skillbox image={ReactLogo} title="React" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Skillbox image={Node} title="Node.js" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Skillbox image={Mongo} title="Mongo DB" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Skillbox image={Material} title="Material-UI" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Skillbox image={Rest} title="REST API" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skill;
