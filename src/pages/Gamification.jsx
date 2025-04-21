import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import {
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip
} from 'recharts';

// Sample data for donut chart (e.g., points by category)
const donutData = [
  { name: 'Coding Challenges', value: 120 },
  { name: 'Code Reviews', value: 80 },
  { name: 'Story Completions', value: 50 }
];
const COLORS = ['#6366F1', '#EF4444', '#F59E0B']; // Indigo-500, Red-500, Amber-500

const Gamification = () => {
  return (
    <div>
      <Grid container spacing={2}>
        {/* Gamification Points Progress */}
        <Grid item xs={12} md={6}>
          <Paper className="p-4">
            <Typography variant="h6" className="mb-2">Current Level Progress</Typography>
            <Typography variant="body1">Level 3 (450/600 XP)</Typography>
            <LinearProgress variant="determinate" value={75} className="mt-2 mb-4" />
            <Typography variant="body2" className="text-gray-600">Next level in 150 XP</Typography>
          </Paper>
        </Grid>
        {/* Donut Chart for Points Distribution */}
        <Grid item xs={12} md={6}>
          <Paper className="p-4 text-center">
            <Typography variant="h6" className="mb-2">Points Distribution</Typography>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={donutData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={80}>
                  {donutData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <Typography variant="caption" className="text-gray-600">Points earned by activity</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Gamification;
