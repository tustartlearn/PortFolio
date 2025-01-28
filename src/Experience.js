import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Box, Typography } from '@mui/material';

export default function LeftPositionedTimeline() {
  const experiences = [
    {
      position: 'FrontEnd Development Intern',
      duration: '7th Aug,24 - 3 Nov,24 (3 months)',
      company: 'LoveMyTest',
      side: 'left',
    },
    {
      position: 'FrontEnd Developer (Graduate Trainee)',
      duration: '3 Nov,24 - Present',
      company: 'LoveMyTest',
      side: 'right',
    },
  ];

  return (
    <Box sx={{height:'90vh',marginTop:'50px'}}>
      <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: 4 ,color:'#fff'}}>
        Experience
      </Typography>
      <Timeline position="left">
        {experiences.map((exp, index) => (
          <TimelineItem key={index} position={exp.side}>
            <TimelineSeparator>
              <TimelineDot />
              {index < experiences.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{ fontSize: '1.5rem', color: '#fff' }}>
              {exp.position}
              <br />
              <span style={{ fontSize: '1.2rem', color: '#fff', fontWeight: '200' }}>
                {exp.duration}, {exp.company}
              </span>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}
