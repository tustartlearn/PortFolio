import React from 'react';
import { Box } from '@mui/material';
import Home from './Home';
import Navbar from './Navbar'; 
import Navbar2 from './Navbar2';
import About from './About';
import Skill from './Skill/Skill';
import TimeLine from './Experience';
import Contact from './Contact'; 
import { Route, Routes, useLocation } from 'react-router-dom';

export default function AdminPannel() {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact"; // Check if on Contact page

  return (
    <Box
      sx={{
        backgroundColor: '#213555', // Dark theme background
        minHeight: '100vh', // Ensures full height coverage
        width: '100%',  
        height:'100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        color: '#F5EFE7', // Light text for contrast
      }}
    >
      {/* Render Navbar2 on Contact Page, otherwise render Navbar */}
      {isContactPage ? <Navbar2 /> : <Navbar />}

      <Routes>
        <Route path="/" element={
          <>
            <Box id="home" sx={{ minHeight: '100vh', backgroundColor: 'inherit' }}>
              <Home />
            </Box>
            <Box id="about" sx={{ minHeight: '100vh', backgroundColor: 'inherit' }}>
              <About />
            </Box>
            <Box id="skill" sx={{ minHeight: '100vh', backgroundColor: 'inherit' }}>
              <Skill />
            </Box>
            <Box id="experience" sx={{ minHeight: '100vh', backgroundColor: 'inherit' }}>
              <TimeLine />
            </Box>
          </>
        } />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Box>
  );
}
