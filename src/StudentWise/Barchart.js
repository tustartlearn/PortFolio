import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Typography, Box, Grid } from "@mui/material";

const BarChart = () => {
  const data1 = [
    { topic: "Word Problems in Multiplication", percentage: "90", percentage1: "%" },
    { topic: "Number of students who scored more than 90%", percentage: "7", percentage1: "8%" },
    { topic: "Number of students who scored 80-90%", percentage: "14", percentage1: "16%" },
    { topic: "Number of students who scored 70-80%", percentage: "23", percentage1: "26%" },
    { topic: "Number of students who scored 50-70%", percentage: "35", percentage1: "39%" },
    { topic: "Number of students who scored 30-50%", percentage: "9", percentage1: "10%" },
    { topic: "Number of students who scored less than 30%", percentage: "2", percentage1: "2%" },
  ];

  const data = [
    { value: 10.8, label: "> 90%", color: "#39cf39" },
    { value: 18.3, label: "80-90%", color: "#33cc33" },
    { value: 24.2, label: "70-80%", color: "#ffcc00" },
    { value: 16.4, label: "50-70%", color: "#ff9900" },
    { value: 12.7, label: "30-50%", color: "#ff6666" },
    { value: 17.5, label: "< 30%", color: "#ff3333" },
  ];

  return (
    <Box sx={{ mt: 4, px: { xs: 2, md: 4,lg:0 } }}>
      <Grid container spacing={2}>
        {/* Chart Section */}
        <Grid item xs={12} md={6} lg={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <PieChart
              series={[
                {
                  data: data.map((item) => ({
                    value: item.value,
                    label: item.label,
                    color: item.color,
                  })),
                  innerRadius: 35,
                  outerRadius: 100,
                  paddingAngle: 4,
                  startAngle: -35,
                },
              ]}
              width={400} // Adjusted for smaller screens
              height={350} // Adjusted for smaller screens
            />
          </Box>
        </Grid>

        {/* Table Section */}
        <Grid item xs={12} md={6} lg={6}>
          <Box
            sx={{
              mb: 2,
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontSize: { xs: "1rem", md: "1.25rem" },
                textAlign: "center",
              }}
            >
              Student Performance Data
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
                  <th
                    style={{
                      padding: "8px",
                      borderBottom: "1px solid #ccc",
                      fontWeight: "bold",
                    }}
                  >
                    Topic
                  </th>
                  <th
                    style={{
                      padding: "8px",
                      borderBottom: "1px solid #ccc",
                      fontWeight: "bold",
                    }}
                  >
                    Percentage
                  </th>
                  <th
                    style={{
                      padding: "8px",
                      borderBottom: "1px solid #ccc",
                      fontWeight: "bold",
                    }}
                  >
                    %
                  </th>
                </tr>
              </thead>
              <tbody>
                {data1.map((row, index) => (
                  <tr key={index}>
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
                      {row.percentage}
                    </td>
                    <td
                      style={{
                        padding: "8px",
                        borderBottom: "1px solid #eee",
                      }}
                    >
                      {row.percentage1}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BarChart;
