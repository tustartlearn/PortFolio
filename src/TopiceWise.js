import React from 'react';
import { Box, Typography, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Bar } from 'react-chartjs-2';

const Topicwise = () => {
  const data = {
    labels: [
      'More Topics',
      'Multiplication Tables',
      'Multiplication by zero',
      'More Topics2',
      'Word Problems in Multiplication',
    ],
    datasets: [
      {
        label: 'Score',
        data: [20, 40, 60, 80, 100],
        backgroundColor: ['#f44336', '#ff9800', '#ffc107', '#8bc34a', '#4caf50'],
      },
    ],
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Topicwise Analysis
      </Typography>
      <Box sx={{ marginBottom: '20px' }}>
        <Bar data={data} />
      </Box>
      <Grid container spacing={2}>
        {/* Serious Attention */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: '1rem', backgroundColor: '#ffebee' }}>
            <Typography variant="h6">Topics Needing Serious Attention</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Topic</TableCell>
                    <TableCell align="right">Avg Score</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Word Problems in Multiplication</TableCell>
                    <TableCell align="right">38%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        {/* Revision */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: '1rem', backgroundColor: '#fffde7' }}>
            <Typography variant="h6">Topics Needing Revision</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Topic</TableCell>
                    <TableCell align="right">Avg Score</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Multiplying 3-digits by 1-digit</TableCell>
                    <TableCell align="right">72%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Multiplication by zero</TableCell>
                    <TableCell align="right">74%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        {/* Strong */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: '1rem', backgroundColor: '#e8f5e9' }}>
            <Typography variant="h6">Topics Which Are Strong</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Topic</TableCell>
                    <TableCell align="right">Avg Score</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Multiplication of 2-digit by 1-digit</TableCell>
                    <TableCell align="right">90%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Word Problems in Multiplication</TableCell>
                    <TableCell align="right">86%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Topicwise;
