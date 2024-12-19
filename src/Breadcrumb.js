import React from 'react';
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

const breadcrumbMap = {
  '/dashboard': ' Topice Wise',
  '/StudentWise': 'Student Wise',
  '/take-test': 'Question Wise',
  '/plan-test': 'Plan Test',
};

function Breadcrumb() {
  const location = useLocation();
  const breadcrumbText = breadcrumbMap[location.pathname] || 'Home';

  return (
    <Box
      sx={{
        height: '50px',
        width: {xs:'100%',md:'100%',lg:'95%'},
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        border: '2px solid #fff',
        marginLeft: 'auto',
        marginRight: '20px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '10px',
      }}
    >
      <Typography
        sx={{
          fontSize: '1rem',
          fontWeight: '700',
        }}
      >
         Test Report >> {breadcrumbText}
      </Typography>
    </Box>
  );
}

export default Breadcrumb;
