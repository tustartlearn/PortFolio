import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Breadcrumb from './Breadcrumb';
import Table from './Topicwise/Table';
import Table1 from './StudentWise/Table1'; 
import Table2 from './Questionwise/Table2';
import { Box } from '@mui/material';
import './App.css';

function AdminPannel() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh'}}>
      {/* Navbar */}
      <Box>
        <Navbar />
      </Box>

      {/* Main Content Area */}
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Content Area */}
        <Box sx={{ width: '80%', padding: '20px' }}>
          {/* Breadcrumb */}
          <Breadcrumb />

          {/* Dynamic Content */}
          <Box sx={{ marginTop: '20px' }}>
            <Routes>
              <Route path="/dashboard" element={<Table />} />
              <Route path="/StudentWise" element={<Table1 />} />
              <Route path="/take-test" element={<Table2/>} />
              <Route path="/plan-test" element={<div>Download Content</div>} />
              
            </Routes>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AdminPannel;
