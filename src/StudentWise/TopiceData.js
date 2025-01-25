import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Typography, Link, Box
} from '@mui/material';

const data = [
  { id: 1, topic: 'Multiplications of 2 digits', qns: 12, done: 12, correct: 10, wrong: 2, marks: '58/60', score: '72%', view: 'solutions' },
  { id: 2, topic: 'Multiplications of 3 digits', qns: 12, done: 12, correct: 11, wrong: 1, marks: '90/100', score: '90%', view: 'solutions' },
  { id: 3, topic: 'Multiplications Tables', qns: 12, done: 11, correct: 6, wrong: 5, marks: '40/100', score: '40%', view: 'solutions' },
  { id: 4, topic: 'Word Problem in Multiplications', qns: 12, done: 12, correct: 9, wrong: 3, marks: '90/100', score: '90%', view: 'solutions' },
  { id: 5, topic: 'Multiplications by zero', qns: 12, done: 12, correct: 7, wrong: 5, marks: '40/100', score: '40%', view: 'solutions' },
];

const summary = {
  qns: 60, done: 59, correct: 43, wrong: 16, marks: '156/240', score: '65%'
};

const TopicTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Topic Name</TableCell>
            <TableCell>Qns</TableCell>
            <TableCell>Done</TableCell>
            <TableCell>Correct</TableCell>
            <TableCell>Wrong</TableCell>
            <TableCell>Marks</TableCell>
            <TableCell>Score</TableCell>
            <TableCell>View</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <Box
                  sx={{
                    backgroundColor: '#b3e5fc',
                    color: '#1e88e5',
                    borderRadius: '50%',
                    display: 'inline-flex',
                    width: '24px',
                    height: '24px',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  #{row.id}
                </Box>
              </TableCell>
              <TableCell>{row.topic}</TableCell>
              <TableCell>{row.qns}</TableCell>
              <TableCell>{row.done}</TableCell>
              <TableCell sx={{ color: 'green' }}>{row.correct}</TableCell>
              <TableCell sx={{ color: 'red' }}>{row.wrong}</TableCell>
              <TableCell>{row.marks}</TableCell>
              <TableCell sx={{ color: row.score > '80%' ? 'green' : row.score > '50%' ? 'orange' : 'red' }}>{row.score}</TableCell>
              <TableCell>
                <Link href="#" color="primary">solutions</Link>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={2}>Overall</TableCell>
            <TableCell>{summary.qns}</TableCell>
            <TableCell>{summary.done}</TableCell>
            <TableCell sx={{ color: 'green' }}>{summary.correct}</TableCell>
            <TableCell sx={{ color: 'red' }}>{summary.wrong}</TableCell>
            <TableCell>{summary.marks}</TableCell>
            <TableCell sx={{ color: 'orange' }}>{summary.score}</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TopicTable;
