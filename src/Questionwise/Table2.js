import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import Chart from './Chart.js'
import test from '../LmtIcon.png'
import Data from './Data.js'
export default function Table2() {
  return (
    <Box
      sx={{
        width: '90%',
        margin: 'auto', // Center horizontally
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        border: '2px solid #fff',
        borderRadius: '10px',
        padding: '1.5rem',
        backgroundColor: '#f9f9f9',
      }}
    >
      {/* Image Section */}
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <img src={test} alt="description" width="40px" style={{ marginRight: '10px' }} />
        <Typography sx={{ fontWeight: '600', fontSize: '1rem' }}>LOVEMYTEST</Typography>
      </Box>

      {/* Details Section */}
      <Box sx={{ marginBottom: '1rem' }}>
        <Grid container spacing={2}>
          {/* First Row */}
          <Grid item xs={6} md={6} lg={3}>
            <Typography sx={{ fontSize: '0.9rem', fontWeight: '600' }}>
              Test: Half Yearly Exam
            </Typography>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>            
             <Typography sx={{ fontSize: '0.9rem', fontWeight: '600' }}>
              Date: 11 Nov 2024
            </Typography>
          </Grid>

          {/* Second Row */}
          <Grid item xs={6} md={6} lg={3}>            <Typography sx={{ fontSize: '0.9rem', fontWeight: '600' }}>
              Time: 9AM
            </Typography>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>            <Typography sx={{ fontSize: '0.9rem', fontWeight: '600' }}>
              Duration: 2Hrs
            </Typography>
          </Grid>

          {/* Third Row */}
          <Grid item xs={6} md={6} lg={3}>            <Typography sx={{ fontSize: '0.9rem', fontWeight: '600' }}>
               Teacher : Anil Gupta
            </Typography>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>            <Typography sx={{ fontSize: '0.9rem', fontWeight: '600' }}>
          Class: IV            </Typography>
          </Grid>

          {/* Fourth Row */}
          <Grid item xs={6} md={6} lg={3}>            <Typography sx={{ fontSize: '0.9rem', fontWeight: '600' }}>
          Subject: Mathematics
            </Typography>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>            <Typography sx={{ fontSize: '0.9rem', fontWeight: '600' }}>
              Max Mark: 80
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <hr />
      {/* Box for Topicwise Analysis */}
      
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
        <Typography sx={{ fontSize: '1.2rem', color: '#000', fontWeight: '600' }}>
          QUESTION WISE ANALYSIS
        </Typography>
      </Box> 
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
        <Chart /> 
        

      </Box>  
      <Data/>
      


     
    </Box>
  )
}
