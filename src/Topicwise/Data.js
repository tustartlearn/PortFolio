import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";


function createData(id, topic, a, b, c, d, e, avgScore) {
  return { id, topic, a, b, c, d, e, avgScore };
}


const rows = [
  createData(1, "Multiplication of 2-digit by 1-digit Numbers", 96, 96, 86, 78, 94, "90%"),
  createData(2, "Word Problems in Multiplication", 50, 36, 28, 32, 45, "38%"),
  createData(3, "Multiplication Tables", 92, 86, 88, 83, 83, "86%"),
  createData(4, "Multiplication by zero", 75, 70, 65, 78, 80, "74%"),
  createData(5, "Multiplying 3-digits by 1-digit", 95, 65, 76, 40, 72, "70%"),
  createData("", "Overall", "82%", "71%", "69%", "62%", "75%", "72%"),
];

export default function TopicwiseAnalysisTable() {
  return (
    <Box
      sx={{
        overflowX: "auto", // Enable horizontal scrolling
        width: "100%", // Ensure table container takes full width
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 800, marginBottom: "22px" }} aria-label="topic-wise analysis table">
          {/* Table Head */}
          <TableHead>
            <TableRow>
              <TableCell align="center">#</TableCell>
              <TableCell align="left">Topics</TableCell>
              <TableCell align="center">A</TableCell>
              <TableCell align="center">B</TableCell>
              <TableCell align="center">C</TableCell>
              <TableCell align="center">D</TableCell>
              <TableCell align="center">E</TableCell>
              <TableCell align="center">Avg Score</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
  {rows.map((row, index) => (
    <TableRow
      key={index}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="center">{row.id}</TableCell>
      <TableCell align="left">{row.topic}</TableCell>

      {/* Cells for A, B, C, D, E */}
      {["a", "b", "c", "d", "e"].map((key) => (
        <TableCell
          key={key}
          align="center"
          sx={{
            backgroundColor: row.id === "" ? (() => {
              const score = parseInt(row[key].replace('%', ''), 10); // Extract numeric value
              if (score > 80) return "#b0fc91"; // Light green for high scores
              if (score > 50) return "#ffffa8"; // Light yellow for mid-range scores
              return "#FA7070"; // Light red for low scores
            })() : "inherit",
            color: row.id === "" ? (() => {
              const score = parseInt(row[key].replace('%', ''), 10); 
              if (score > 80) return "#1a4314"; // Dark green for high scores
              if (score > 50) return "#6c6a01"; // Dark yellow text for mid-range scores
              return "#831a1a"; // Dark red text for low scores
            })() : "inherit",
            fontWeight: row.id === "" ? "bold" : "normal",
          }}
        >
          {row[key]}
        </TableCell>
      ))}

      <TableCell
        align="center"
        sx={{
          backgroundColor: (() => {
            const score = parseInt(row.avgScore.replace('%', ''), 10);
            if (score > 80) return "#b0fc91"; // Light green for high scores
            if (score > 50) return "#ffffa8"; // Light yellow for mid-range scores
            return "#FA7070"; // Light red for low scores
          })(),
          color: (() => {
            const score = parseInt(row.avgScore.replace('%', ''), 10);
            if (score > 80) return "#1a4314"; // Dark green text
            if (score > 50) return "#6c6a01"; // Dark yellow text
            return "#831a1a"; // Dark red text
          })(),
          fontWeight: "bold",
        }}
      >
        {row.avgScore}
      </TableCell>
    </TableRow>
  ))}
</TableBody>


        </Table>
      </TableContainer>
    </Box>
  );
}
