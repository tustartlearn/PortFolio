import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import Boxs from './Boxs'
import Data from './Data' 
import test from '../LmtIcon.png'

export default function Table() {
  return (
    <Box
      sx={{
        width: '90%',
        margin: 'auto', // Center horizontally
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        border: '2px solid #fff',
        borderRadius: '10px',
        padding: '1.5rem', // Add padding for content
        backgroundColor: {
          xs: 'none', // For small screens
          md: 'none', // For medium screens
          lg: '#f9f9f9',     // For large screens
        },       
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
          <Grid item xs={6} md={6} lg={3}>            <Typography sx={{ fontSize: '0.9rem', fontWeight: '600' }}>
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

      {/* Topicwise Analysis Header */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        <Typography sx={{ fontSize: '1.2rem', color: '#000', fontWeight: '600' }}>
          TOPICWISE ANALYSIS
        </Typography>
      </Box>

      {/* Box for Topicwise Analysis */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
        <Boxs sx={{ width: '50%' }} />
      </Box> 
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
        <Typography sx={{ fontSize: '1.2rem', color: '#000', fontWeight: '600' }}>
          TOPIC PERFORMANCE SECTION WISE
        </Typography>
      </Box>

      {/* Data Section */}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Data />
      </Box>
    </Box>
  )
}
