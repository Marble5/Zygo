import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Badge from '@mui/material/Badge';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const teamMembers = [
  { name: 'Alice', role: 'Developer', online: true },
  { name: 'Bob', role: 'Designer', online: false },
  { name: 'Charlie', role: 'Product Owner', online: true },
  { name: 'Diana', role: 'Scrum Master', online: true }
];

const TeamProfile = () => {
  const [team, setTeam] = React.useState('Team 1');
  return (
    <Box>
      {/* Team selector dropdown */}
      <FormControl size="small" className="mb-4">
        <InputLabel id="team-select-label">Team</InputLabel>
        <Select labelId="team-select-label" value={team} label="Team" onChange={(e) => setTeam(e.target.value)}>
          <MenuItem value="Team 1">Team 1</MenuItem>
          <MenuItem value="Team 2">Team 2</MenuItem>
        </Select>
      </FormControl>

      <Typography variant="h6" className="mb-4">Team Members</Typography>
      {/* List of team members with avatars and roles */}
      {teamMembers.map(member => (
        <Box key={member.name} className="flex items-center mb-2">
          <Badge 
            overlap="circular" 
            color="success" 
            variant="dot" 
            invisible={!member.online}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          >
            <Avatar sx={{ mr: 2 }}>{member.name.charAt(0)}</Avatar>
          </Badge>
          <Box>
            <Typography variant="subtitle1">{member.name}</Typography>
            <Typography variant="body2" className="text-gray-600">{member.role}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default TeamProfile;
