import React from 'react';
import { Box, Typography } from '@mui/material';
import Lmt from './LmtIcon.png';
function Navbar() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          
          marginBottom:{xs:'0px',md:'0',lg:'5px'},
          backgroundColor: '#ffffff', 
          marginLeft:{xs:'20px',md:'0',lg:'7px'},
          marginTop:'5px' 
        }}
      >
        {/* Logo */}
        <img
          src={Lmt}
          alt="Logo"
          style={{ width: '16px', height: '15px',marginRight:'5px',marginLeft:'15px'}}
        />

        {/* Text */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            color: '#10c5bf',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          LOVEMYTEST
        </Typography>
      </Box>
    </>
  );
}

export default Navbar;
