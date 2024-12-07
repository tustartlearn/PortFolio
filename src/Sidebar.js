import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Tabs, Tab, Typography, CardMedia, IconButton, Drawer, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Bars from './bars-solid (1).svg' 
import Ques from './question-solid (2).svg' 
import Student from './user-regular (1).svg' 
import Download from './download-solid (1).svg'

const SideNavbar = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState('/' + location.pathname.split('/')[1]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleTabClick = (_, page) => {
    setActivePage(page);
    setIsDrawerOpen(false); // Close drawer after navigation
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const menuItems = [
    { path: '/dashboard', icon1: Bars, text: 'Topicwise' },
    { path: '/StudentWise', icon1: Student, text: 'Studentwise' },
    { path: '/take-test', icon1: Ques, text: 'Questionwise' },
    { path: '/plan-test', icon1: Download, text: 'Download' },
  ];

  return (
    <>
      {/* Hamburger Icon for Mobile/Tablets */}
      {(isTablet || isMobile) && (
        <IconButton
          sx={{
            position: 'fixed',
            top: '10px',
            left: '10px',
            zIndex: 1300,
          }}
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Sidebar for Larger Screens */}
      {!isTablet && !isMobile && (
        <Box
          sx={{
            width: '250px',
            height: '60vh',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            padding: '1rem 0',
            overflowY: 'auto', 
            marginLeft:'20px', 
            marginTop:'20px'
          }}
        >
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: '#168884',
              padding: '10px 0',
              borderBottom: '1px solid #e0e0e0',
              marginBottom: '1rem',
            }}
          >
            Test Report
          </Typography>

          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={activePage}
            onChange={handleTabClick}
            sx={{
              padding: 0,
              '& .MuiTabs-flexContainer': {
                alignItems: 'flex-start',
                width: '100%',
              },
            }}
          >
            {menuItems.map((item) => (
              <Tab
                key={item.path}
                label={
                  <Box
                    display="flex"
                    alignItems="center"
                    gap={1.5}
                    sx={{
                      padding: '0.8rem 1rem',
                      justifyContent: 'flex-start',
                      width: '100%',
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="24"
                      image={item.icon1}
                      alt={`${item.text} Icon`}
                      sx={{ width: '24px', objectFit: 'contain' }}
                    />
                    <Typography
                      sx={{
                        color: activePage === item.path ? '#168884' : '#10c5bf',
                        fontWeight: activePage === item.path ? 'bold' : 'normal',
                        fontSize: isMobile ? '0.9rem' : '1rem', // Smaller text on mobile
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                }
                value={item.path}
                component={Link}
                to={item.path}
                sx={{
                  textAlign: 'left',
                  width: '100%',
                  '&.Mui-selected': {
                    backgroundColor: '#eaf3fd',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    borderRadius: '3px',
                  },
                  '&:hover': {
                    backgroundColor: '#f0faff',
                  },
                }}
              />
            ))}
          </Tabs>
        </Box>
      )}

      {/* Drawer for Tablets/Mobile */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            width: '250px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        <Box sx={{ width: '100%', padding: '1rem 0' }}>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: '#168884',
              borderBottom: '1px solid #e0e0e0',
              paddingBottom: '10px',
              marginBottom: '1rem',
            }}
          >
            Test Report
          </Typography>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={activePage}
            onChange={handleTabClick}
            sx={{
              '& .MuiTab-root': {
                padding: isMobile ? '0.5rem 1rem' : '0.8rem 1rem', // Compact padding on mobile
                fontSize: isMobile ? '0.9rem' : '1rem', // Smaller font on mobile
              },
            }}
          >
            {menuItems.map((item) => (
              <Tab
                key={item.path}
                label={
                  <Box
                    display="flex"
                    alignItems="center"
                    gap={isMobile ? 1 : 1.5} // Adjust spacing
                    sx={{
                      justifyContent: 'flex-start',
                      width: '100%',
                    }}
                  >
                    <CardMedia
                      component="img"
                      height={isMobile ? '20' : '24'} // Adjust icon size
                      image={item.icon1}
                      alt={`${item.text} Icon`}
                      sx={{ width: isMobile ? '20px' : '24px', objectFit: 'contain' }}
                    />
                    {item.text}
                  </Box>
                }
                value={item.path}
                component={Link}
                to={item.path}
              />
            ))}
          </Tabs>
        </Box>
      </Drawer>
    </>
  );
};

export default SideNavbar;
