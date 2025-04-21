import React from 'react';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

// Sample data for burndown chart (e.g., work remaining over 10 days)
const burndownData = [
  { day: 'Day 1', remaining: 80 },
  { day: 'Day 2', remaining: 75 },
  { day: 'Day 3', remaining: 65 },
  { day: 'Day 4', remaining: 50 },
  { day: 'Day 5', remaining: 40 },
  { day: 'Day 6', remaining: 32 },
  { day: 'Day 7', remaining: 20 },
  { day: 'Day 8', remaining: 12 },
  { day: 'Day 9', remaining: 5 },
  { day: 'Day 10', remaining: 0 }
];

const Dashboard = () => {
  const theme = useTheme();
  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '1.5rem' }}>
      <Grid container spacing={2} className="mb-4">
        {/* Metric Cards */}
        ...
      </Grid>
  
      <Paper className="p-4" elevation={2}>
        <Typography variant="h6" className="mb-2">Sprint Burndown</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={burndownData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="remaining"
              stroke={theme.palette.primary.main}
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </div>
  );
};

export default Dashboard;
