import React, { useState } from "react";
import { Box, Typography, Menu, MenuItem, Button, Card, Grid } from "@mui/material";

const Data = () => {
  const tableData = [
    { id: 10, name: "Which pair of numbers add to make m...", qType: "MCQ", correctAnswer: 30, wrongAnswer: 0, qPerformance: "100%" },
    { id: 28, name: "1 Meter = cm...", qType: "FIB", correctAnswer: 30, wrongAnswer: 0, qPerformance: "100%" },
    { id: 29, name: "½ meter = cm...", qType: "FIB", correctAnswer: 28, wrongAnswer: 2, qPerformance: "93%" },
    { id: 8, name: "Guess your height in centimeters?", qType: "MCQ", correctAnswer: 26, wrongAnswer: 4, qPerformance: "87%" },
    { id: 16, name: "Ask people and find out the cost of...", qType: "MCQ", correctAnswer: 26, wrongAnswer: 4, qPerformance: "87%" },
    { id: 27, name: "What part of the whole is coloured...", qType: "MCQ", correctAnswer: 24, wrongAnswer: 6, qPerformance: "83%" },
    { id: 2, name: "How many corners does a brick have?", qType: "MCQ", correctAnswer: 24, wrongAnswer: 6, qPerformance: "80%" },
    { id: 11, name: "At what time does the Sun rise at y...", qType: "MCQ", correctAnswer: 24, wrongAnswer: 6, qPerformance: "80%" },
    { id: 17, name: "Someone takes a loan when he/she...", qType: "MCQ", correctAnswer: 21, wrongAnswer: 9, qPerformance: "80%" },
    { id: 17, name: "How many faces does a brick have?", qType: "SA", correctAnswer: 20, wrongAnswer: 10, qPerformance: "67%" },
    { id: 1, name: "Try to draw pictures of a shoe from...", qType: "SA", correctAnswer: 18, wrongAnswer: 12, qPerformance: "60%" },
    { id: 15, name: "How many edges does a brick have?", qType: "SA", correctAnswer: 16, wrongAnswer: 14, qPerformance: "53%" },
    { id: 21, name: "Draw front view of a car or a bus...", qType: "SA", correctAnswer: 14, wrongAnswer: 16, qPerformance: "47%" },
    { id: 3, name: "1 litre = ____________ ml", qType: "FIB", correctAnswer: 12, wrongAnswer: 18, qPerformance: "40%" },
    { id: 14, name: "Who is the tallest member in your f...", qType: "FIB", correctAnswer: 10, wrongAnswer: 20, qPerformance: "33%" },
    { id: 18, name: "Draw a shape by using your water bo...", qType: "LA", correctAnswer: 8, wrongAnswer: 22, qPerformance: "27%" },
    { id: 7, name: "Which type of shape did you get?...", qType: "LA", correctAnswer: 6, wrongAnswer: 24, qPerformance: "20%" },
    { id: 22, name: "How long does your school assembly...", qType: "LA", correctAnswer: 4, wrongAnswer: 26, qPerformance: "13%" },
    { id: 23, name: "1 litre = ___________ x 250 ml", qType: "LA", correctAnswer: 3, wrongAnswer: 27, qPerformance: "10%" },
    { id: 13, name: "Draw a brick showing its four faces...", qType: "FIB", correctAnswer: 2, wrongAnswer: 28, qPerformance: "7%" },
    { id: 20, name: "Name any place where you have seen...", qType: "LA", correctAnswer: 1, wrongAnswer: 29, qPerformance: "3%" },
    { id: 5, name: "There are four dates of birth given...", qType: "LA", correctAnswer: 0, wrongAnswer: 30, qPerformance: "0%" }, 
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedType, setSelectedType] = useState("View All");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (type) => {
    setAnchorEl(null);
    if (type) {
      setSelectedType(type);
    }
  };

  const filteredData =
    selectedType === "View All"
      ? tableData
      : tableData.filter((row) => row.qType === selectedType);

  return (
    <Box sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card sx={{ padding: 2, boxShadow: {xs:'0',md:'0',lg:'3'} }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
              <Typography variant="h6" sx={{ ml: 2 }}>
                Detailed Report
              </Typography>
              <Box>
                <Button
                  variant="text"
                  sx={{ textTransform: "none", fontSize: "14px", color: "#007bff" }}
                  onClick={handleClick}
                >
                  Filter by: {selectedType}
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={() => handleClose(null)}
                  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                  transformOrigin={{ vertical: "top", horizontal: "left" }}
                >
                  <MenuItem onClick={() => handleClose("View All")}>View All</MenuItem>
                  <MenuItem onClick={() => handleClose("MCQ")}>MCQ</MenuItem>
                  <MenuItem onClick={() => handleClose("FIB")}>FIB</MenuItem>
                  <MenuItem onClick={() => handleClose("LA")}>LA</MenuItem>
                  <MenuItem onClick={() => handleClose("SA")}>SA</MenuItem>
                </Menu>
              </Box>
            </Box>
            <Box sx={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  textAlign: "left",
                  border: "1px solid #ddd",
                }}
              >
                <thead>
                  <tr>
                    <th style={{ padding: "10px", borderBottom: "2px solid #ccc" }}>Ques</th>
                    <th style={{ padding: "10px", borderBottom: "2px solid #ccc" }}>Question</th>
                    <th style={{ padding: "10px", borderBottom: "2px solid #ccc" }}>Q-type</th>
                    <th style={{ padding: "10px", borderBottom: "2px solid #ccc" }}>Correct Answer</th>
                    <th style={{ padding: "10px", borderBottom: "2px solid #ccc" }}>Wrong Answer</th>
                    <th style={{ padding: "10px", borderBottom: "2px solid #ccc" }}>Q-Performance</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((row) => {
                    const performance = parseInt(row.qPerformance.replace("%", ""), 10);
                    let bgColor = "#39cf39"; // Default green
                    let textColor = "#fff"; // Default text color for better contrast
                    if (performance < 40) {
                      bgColor = "#ff3333"; // Red for <40%
                    } else if (performance < 80) {
                      bgColor = "#ffcc00"; // Yellow for 40-80%
                      textColor = "#000"; // Dark text for better contrast
                    }
                    return (
                      <tr key={row.id}>
                        <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>{row.id}</td>
                        <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>{row.name}</td>
                        <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>{row.qType}</td>
                        <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>{row.correctAnswer}</td>
                        <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>{row.wrongAnswer}</td>
                        <td
                          style={{
                            padding: "10px",
                            borderBottom: "1px solid #eee",
                            backgroundColor: bgColor,
                            color: textColor,
                          }}
                        >
                          {row.qPerformance}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Data;
