import React, { useState } from "react";
import { Box, Typography, Menu, MenuItem, Button, Card, Grid } from "@mui/material";

const Data = () => {
  const tableData = [ 
    { id: 1, name: "Anirudh Sanjeev", adminNo: 6164, rollNo: 7, section: "A", score: 80, percentScore: "100%", timeTaken: "1 Hr 54 Min" },
    { id: 2, name: "Mohammed Umair", adminNo: 6567, rollNo: 1, section: "C", score: 80, percentScore: "100%", timeTaken: "1 Hr 57 Min" },
    { id: 3, name: "Peddineni Bavitha", adminNo: 3353, rollNo: 4, section: "C", score: 80, percentScore: "100%", timeTaken: "1 Hr 33 Min" },
    { id: 4, name: "Dikshyant Ruutray", adminNo: 3011, rollNo: 11, section: "A", score: 76, percentScore: "95%", timeTaken: "1 Hr 43 Min" },
    { id: 5, name: "Ikshithri P", adminNo: 6129, rollNo: 5, section: "B", score: 75, percentScore: "94%", timeTaken: "1 Hr 35 Min" },
    { id: 6, name: "Aasish S", adminNo: 3654, rollNo: 1, section: "C", score: 73, percentScore: "91%", timeTaken: "1 Hr 34 Min" },
    { id: 7, name: "Karthik S", adminNo: 2490, rollNo: 6, section: "A", score: 73, percentScore: "91%", timeTaken: "1 Hr 58 Min" },
    { id: 8, name: "Annav Agarwal", adminNo: 8379, rollNo: 8, section: "B", score: 71, percentScore: "89%", timeTaken: "1 Hr 43 Min" },
    { id: 9, name: "Shrey Saraf", adminNo: 7252, rollNo: 7, section: "A", score: 68, percentScore: "85%", timeTaken: "1 Hr 41 Min" },
    { id: 10, name: "Zayed Khan", adminNo: 6672, rollNo: 9, section: "C", score: 68, percentScore: "85%", timeTaken: "1 Hr 52 Min" },
    { id: 11, name: "Hrishikesh P", adminNo: 2618, rollNo: 4, section: "C", score: 65, percentScore: "81%", timeTaken: "1 Hr 42 Min" },
    { id: 12, name: "Mahantesh K", adminNo: 6809, rollNo: 8, section: "B", score: 65, percentScore: "81%", timeTaken: "1 Hr 56 Min" },
    { id: 13, name: "Riya Pawar", adminNo: 3492, rollNo: 5, section: "B", score: 60, percentScore: "75%", timeTaken: "1 Hr 40 Min" },
    { id: 14, name: "Aditi Naik", adminNo: 3679, rollNo: 3, section: "A", score: 60, percentScore: "75%", timeTaken: "1 Hr 35 Min" },
    { id: 15, name: "Harsh Patel", adminNo: 6596, rollNo: 2, section: "C", score: 58, percentScore: "73%", timeTaken: "1 Hr 43 Min" },
    { id: 16, name: "Adithya P", adminNo: 3135, rollNo: 2, section: "B", score: 58, percentScore: "73%", timeTaken: "1 Hr 58 Min" },
    { id: 17, name: "Ananya Kalmari", adminNo: 8453, rollNo: 6, section: "B", score: 55, percentScore: "69%", timeTaken: "1 Hr 51 Min" },
    { id: 18, name: "Kaustubh Holla", adminNo: 8365, rollNo: 7, section: "B", score: 50, percentScore: "63%", timeTaken: "1 Hr 59 Min" },
    { id: 19, name: "Akshay Reddy", adminNo: 7134, rollNo: 3, section: "B", score: 47, percentScore: "59%", timeTaken: "1 Hr 36 Min" },
    { id: 20, name: "Mohit Gowda", adminNo: 7020, rollNo: 8, section: "C", score: 47, percentScore: "59%", timeTaken: "0 Hr 58 Min" },
    { id: 21, name: "Tanmaya Kulkarni", adminNo: 7598, rollNo: 3, section: "A", score: 47, percentScore: "59%", timeTaken: "1 Hr 55 Min" },
    { id: 22, name: "Asmita Majumdar", adminNo: 5705, rollNo: 5, section: "C", score: 45, percentScore: "56%", timeTaken: "1 Hr 59 Min" },
    { id: 23, name: "Disha R", adminNo: 6995, rollNo: 2, section: "A", score: 45, percentScore: "56%", timeTaken: "1 Hr 35 Min" },
    { id: 24, name: "Gunn Singhania", adminNo: 5026, rollNo: 9, section: "A", score: 42, percentScore: "53%", timeTaken: "1 Hr 40 Min" },
    { id: 25, name: "Sanjana Guru", adminNo: 4225, rollNo: 6, section: "C", score: 34, percentScore: "43%", timeTaken: "1 Hr 42 Min" },

  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedSection, setSelectedSection] = useState("All");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (section) => {
    setAnchorEl(null);
    if (section) {
      setSelectedSection(section);
    }
  };

  const filteredData =
    selectedSection === "All"
      ? tableData
      : tableData.filter((row) => row.section === selectedSection);

  return (
    <Box sx={{ mt: 4, px: { xs: 2, sm: 4, md: 8, } ,width:'95%'}}>
    <Grid container >
      {/* Header with Filter */}
      <Grid item xs={12}>
        <Card sx={{padding:2, boxShadow: 3 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Typography
              variant="h6"
              sx={{ ml: { xs: 0, sm: 5 }, textAlign: { xs: "center", sm: "left" } }}
            >
              Detailed Report
            </Typography>

            <Box sx={{ mt: { xs: 2, sm: 0 } }}>
              <Button
                variant="text"
                sx={{
                  textTransform: "none",
                  fontSize: "14px",
                  color: "#007bff",
                  display: "inline-flex",
                  alignItems: "center",
                }}
                onClick={handleClick}
              >
                Filter by&nbsp;
                <Typography
                  component="span"
                  sx={{
                    fontWeight: 500,
                    display: "inline-flex",
                    alignItems: "center",
                    fontSize: "inherit",
                  }}
                >
                  <span style={{ fontSize: "16px", marginRight: "4px" }}>&gt;</span>
                  {selectedSection}
                </Typography>
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => handleClose(null)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem onClick={() => handleClose("All")}>All</MenuItem>
                <MenuItem onClick={() => handleClose("A")}>A</MenuItem>
                <MenuItem onClick={() => handleClose("B")}>B</MenuItem>
                <MenuItem onClick={() => handleClose("C")}>C</MenuItem>
              </Menu>
            </Box>
          </Box>

          {/* Table */}
          <Box
            sx={{
              overflowX: "auto",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "left",
                minWidth: "600px",
              }}
            >
              <thead>
                <tr>
                  <th style={{ padding: "10px", borderBottom: "2px solid #ccc" }}>#</th>
                  <th style={{ padding: "10px", borderBottom: "2px solid #ccc" }}>Name</th>
                  <th style={{ padding: "10px", borderBottom: "2px solid #ccc" }}>Admin No</th>
                  <th style={{ padding: "10px", borderBottom: "2px solid #ccc" }}>Roll No</th>
                  <th style={{ padding: "10px", borderBottom: "2px solid #ccc" }}>Section</th>
                  <th style={{ padding: "10px", borderBottom: "2px solid #ccc" }}>Score</th>
                  <th style={{ padding: "10px", borderBottom: "2px solid #ccc" }}>% Score</th>
                  <th style={{ padding: "10px", borderBottom: "2px solid #ccc" }}>Time Taken</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row) => (
                  <tr key={row.id}>
                    <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>{row.id}</td>
                    <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>{row.name}</td>
                    <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>{row.adminNo}</td>
                    <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>{row.rollNo}</td>
                    <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>{row.section}</td>
                    <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>{row.score}</td>
                    <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>{row.percentScore}</td>
                    <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>{row.timeTaken}</td>
                  </tr>
                ))}
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
