import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function CombinedView() { 
    const data = [
        { value: 30, label: "> 80%", color: "#66cc66" },
        { value: 47, label: "50-80%", color: "#ffcc66" },
        { value: 23, label: "< 50%", color: "#ff6666" },
      ];
  return (
    <Grid container spacing={4} style={{ padding: 16, alignItems: 'center' }}>
      {/* Table Section */}
      <Grid item xs={12} md={6}>
        <TableContainer component={Paper} style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: 'bold', backgroundColor: '#f0f0f0' }}>Total Questions</TableCell>
                <TableCell style={{ fontWeight: 'bold', backgroundColor: '#f0f0f0' }}>30</TableCell>
                <TableCell style={{ fontWeight: 'bold', backgroundColor: '#f0f0f0' }}>%</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow style={{ backgroundColor: '#ccffcc' }}>
                <TableCell>{"Questions which > 80% students could answer"}</TableCell>
                <TableCell>9</TableCell>
                <TableCell>30%</TableCell>
              </TableRow>
              <TableRow style={{ backgroundColor: '#ffffcc' }}>
                <TableCell>{"Questions which 50-80% students could answer"}</TableCell>
                <TableCell>14</TableCell>
                <TableCell>47%</TableCell>
              </TableRow>
              <TableRow style={{ backgroundColor: '#ffcccc' }}>
                <TableCell>{"Questions which < 50% students could answer"}</TableCell>
                <TableCell>7</TableCell>
                <TableCell>23%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      {/* Pie Chart Section */}
      <Grid
        item 
        
        xs={12}
        md={6}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center', 
          
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
          innerRadius: 35, // Adds space inside the pie chart
          outerRadius: 100, // Adjusts chart size
          paddingAngle: 4, // Adds space between the segments
          startAngle: -90, // Aligns chart orientation
        },
      ]}
      width={400}
      height={300}
      label={({ dataEntry }) => `${dataEntry.value}%`} // Displays percentage values on slices
      labelStyle={{
        fontSize: "10px", // Adjust font size for slice labels
        fill: "#000", // Slice label text color
        fontWeight: "bold", // Bold text for better visibility
      }}
      labelPosition={80} // Pushes labels outward
    />

      </Grid>
    </Grid>
  );
}
