import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Card, Typography, Box, Grid } from "@mui/material";

const BarChart = () => {
  const data1 = [{ topic: "Word Problems in Multiplication", avgScore: "38%" }];
  const data2 = [
    { topic: "Multiplying 3-digits by 1-digit", avgScore: "72%" },
    { topic: "Multiplication by zero", avgScore: "74%" },
  ];
  const data3 = [
    { topic: "Multiplication of 2-digit by 1-digit Numbers", avgScore: "90%" },
    { topic: "Word Problems in Multiplication", avgScore: "86%" },
  ];

  const [chartData] = useState({
    series: [
      {
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 250,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
          barHeight: "70%",
          colors: {
            ranges: [
              { from: 0, to: 10, color: "#FA7070" },
              { from: 11, to: 20, color: "#f98d6f" },
              { from: 21, to: 30, color: "#f6833a" },
              { from: 31, to: 40, color: "#f2ad53" },
              { from: 41, to: 50, color: "#f2e253" },
              { from: 51, to: 60, color: "#ffffa8" },
              { from: 61, to: 70, color: "#e5ffa8" },
              { from: 71, to: 80, color: "#b0fc91" },
              { from: 81, to: 90, color: "#52cf58" },
              { from: 91, to: 100, color: "#34ac3a" },
            ],
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "More Topics",
          "Multiplication Tables",
          "Multiplication by zero",
          "More Topics2",
          "More Topics3",
          "More Topics4",
          "Word Problems in Multiplication",
          "More Topics5",
          "Multiplication of 2-digit",
          "Multiplication 3-digit by 1-digit",
        ],
      },
      grid: {
        strokeDashArray: 5,
      },
    },
  });

  return (
    <Box sx={{ mt: 4 }}>
      <Grid container spacing={15}>
        {/* Chart Section */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              padding: 1,
              boxShadow: 3,
              width: { xs: "100%", md: "600px",lg:'500px' },
              margin: "auto",
            }}
          >
            <ReactApexChart
              options={chartData.options}
              series={chartData.series}
              type="bar"
              height={500}
            />
          </Card>
        </Grid>

        {/* Table Section */}
        <Grid item xs={12} md={6}>
          {[data1, data2, data3].map((data, idx) => (
            <Box
              key={idx}
              sx={{
                mb: 2,
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "15px",
                backgroundColor:
                  idx === 0
                    ? "#FFE4E1" // Light Red
                    : idx === 1
                    ? "#FFFACD" // Light Yellow
                    : "#A1EEBD", // Light Green
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: "1rem",
                  mb: 1.5,
                  textAlign: "center",
                }}
              >
                {idx === 0
                  ? "TOPICS NEEDING SERIOUS ATTENTION"
                  : idx === 1
                  ? "TOPICS NEEDING REVISION"
                  : "TOPICS WHICH ARE STRONG"}
              </Typography>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  textAlign: "left",
                }}
              >
                <thead>
                  <tr>
                    <th style={{ padding: "8px", borderBottom: "1px solid #ccc" }}>
                      #
                    </th>
                    <th style={{ padding: "8px", borderBottom: "1px solid #ccc" }}>
                      Topic
                    </th>
                    <th style={{ padding: "8px", borderBottom: "1px solid #ccc" }}>
                      Avg Score
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr key={index}>
                      <td
                        style={{
                          padding: "8px",
                          borderBottom: "1px solid #eee",
                        }}
                      >
                        {index + 1}
                      </td>
                      <td
                        style={{
                          padding: "8px",
                          borderBottom: "1px solid #eee",
                        }}
                      >
                        {row.topic}
                      </td>
                      <td
                        style={{
                          padding: "8px",
                          borderBottom: "1px solid #eee",
                        }}
                      >
                        {row.avgScore}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default BarChart;
