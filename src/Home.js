import React from 'react';
import { Box, Grid, Typography,Button } from '@mui/material';
import User from './Assets/User-removebg-preview.png';
import Gmail from './Assets/Gmail.png';
import LinkedIn from './Assets/Linkdin.png';
import Whatsapp from './Assets/Whatsapp.png';

const Home = () => {
  return (
    <Box
      sx={{
        marginTop: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        height:'71vh'
      }}
    >
      <Grid
        container
        spacing={3} // Adjust spacing to align correctly
        justifyContent="center"
        alignItems="center"
        sx={{
          maxWidth: '1200px', 
          textAlign:{xs:'center',md:'center',lg:'left'}
        }}
      >
        {/* Left Section */}
        <Grid item xs={12} md={6} lg={7}>
          <Typography variant="h4" color="#ffffff" gutterBottom sx={{ fontFamily: '"Poppins", serif',
  fontWeight: '200'}}>
            Hi, I am <strong>Tushar Pandey</strong> <br />
            a{' '}
            <span
              style={{
                fontSize: '46px',
                color: 'aqua',
                fontFamily: 'cursive',
              }}
            >
              Front-End Developer
            </span>
          </Typography>

          <Box sx={{ marginTop: '20px' ,width:{xs:'100vw',md:'100vw',lg:'200px'}}}>
            <ul
              style={{
                display: 'flex', 
                alignItems:'center',
                justifyContent:'center',
                
                listStyle: 'none',
                gap: '15px',
                padding: 0,
                margin: 0,
              }}
            >
              <li>
  <a 
    href="https://wa.me/9140192427" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <img src={Whatsapp} height="70px" alt="Whatsapp" />
  </a>
</li>
<li>
  <a
    href="https://www.linkedin.com/in/tushar-pandey-a99955210"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none' }} // Optional: ensures no underline
  >
    <img src={LinkedIn} height="70px" alt="LinkedIn" />
  </a>
</li>

<li style={{ marginTop: '5px' }}>
  <a
    href="mailto:tusharpandey691@gmail.com"
    style={{ textDecoration: 'none' }} // Optional: ensures no underline
  >
    <img src={Gmail} height="55px" alt="Gmail" />
  </a>
</li>

            </ul>
          </Box>  

          <br/> 
          <Box
  sx={{
    width: {xs:'100vw',md:'100vw',lg:'250px'},
    height: '50px',
    display: 'flex', // Use flexbox for alignment
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', 
  }}
>  
<Button
  variant="contained"
  size="large" // Use a valid size value
  component="a" // Make the button an anchor tag
  href="https://drive.google.com/file/d/1Sq1ZsXoBBEAlbsBsaWXpRpu6Viw33PNS/view?usp=drive_link"
  target="_blank" // Opens the link in a new tab
  rel="noopener noreferrer" // Security precaution for opening links
  sx={{
    fontSize: '16px', // Optional: Adjust text size
    padding: '10px 20px', // Optional: Customize padding
    borderRadius: '8px',  
    width: '150px',
    textDecoration: 'none', // Optional: removes underline for the anchor tag
  }}
>
  Resume
</Button>

</Box>

        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={6} lg={5} 
        sx={{display:{xs:'none',md:'none',lg:'block'}}}>
          <img src={User} height="450px" alt="User" style={{ borderRadius: '50%' }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
