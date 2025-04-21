import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

// Sample data for horizontal bar chart (teams vs some metric)
const teamData = [
  { team: 'Team A', value: 30 },
  { team: 'Team B', value: 24 },
  { team: 'Team C', value: 18 }
];

const Organisation = () => {
  return (
    <div>
      <Grid container spacing={2}>
        {/* Organisation Summary */}
        <Grid item xs={12} md={4}>
          <Paper className="p-4">
            <Typography variant="h6" className="mb-2">Organisation Overview</Typography>
            <Typography variant="body1">Total Teams: 3</Typography>
            <Typography variant="body1">Total Members: 25</Typography>
            <Typography variant="body1">Projects Active: 5</Typography>
          </Paper>
        </Grid>
        {/* Horizontal Bar Chart showing team metric */}
        <Grid item xs={12} md={8}>
          <Paper className="p-4">
            <Typography variant="h6" className="mb-2">Team Performance (Story Points)</Typography>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={teamData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="team" type="category" />
                <Tooltip />
                <Bar dataKey="value" fill="#3f51b5" barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Organisation;
