import React from 'react';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';

// Sample data for bar chart (vertical)
const barData = [
  { category: 'Feature', count: 12 },
  { category: 'Bugfix', count: 8 },
  { category: 'Chore', count: 5 }
];

// Sample data for pie chart
const pieData = [
  { name: 'Backlog', value: 20 },
  { name: 'In Progress', value: 10 },
  { name: 'Completed', value: 15 }
];
const COLORS = ['#3B82F6', '#10B981', '#F59E0B']; // Tailwind blue-500, green-500, amber-500

const Insights = () => {
  const theme = useTheme();
  return (
    <div>
      <Grid container spacing={2}>
        {/* Vertical Bar Chart */}
        <Grid item xs={12} md={6}>
          <Paper className="p-4">
            <Typography variant="h6" className="mb-2">Issues by Type</Typography>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill={theme.palette.primary.main} />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        {/* Pie Chart */}
        <Grid item xs={12} md={6}>
          <Paper className="p-4">
            <Typography variant="h6" className="mb-2">Tasks Status Distribution</Typography>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Insights;
