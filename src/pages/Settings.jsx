import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

const Settings = () => {
  return (
    <Box>
      {/* Profile Section */}
      <Typography variant="h6" className="mb-2">Profile</Typography>
      <TextField label="Name" variant="outlined" size="small" className="mb-2 mr-2" />
      <TextField label="Email" variant="outlined" size="small" className="mb-4" />

      {/* Appearance Section */}
      <Typography variant="h6" className="mb-2">Appearance</Typography>
      <FormControlLabel control={<Switch defaultChecked />} label="Dark Mode" className="mb-4" />

      {/* Language Section */}
      <Typography variant="h6" className="mb-2">Language</Typography>
      <TextField select label="Language" value="English" size="small" className="mb-4" SelectProps={{ native: true }}>
        <option value="English">English</option>
        <option value="Spanish">Spanish</option>
      </TextField>

      {/* Security Section */}
      <Typography variant="h6" className="mb-2">Security</Typography>
      <FormControlLabel control={<Switch />} label="Enable 2FA" className="mb-2" />
      <br />
      <Button variant="outlined" size="small" className="mb-4">Change Password</Button>

      {/* Notifications Section */}
      <Typography variant="h6" className="mb-2">Notifications</Typography>
      <FormControlLabel control={<Switch defaultChecked />} label="Messages" className="mb-2 mr-4" />
      <FormControlLabel control={<Switch />} label="Mentions" className="mb-4" />

      {/* Danger Zone Section */}
      <Divider className="my-4" />
      <Typography variant="h6" className="mb-2 text-red-600">Danger Zone</Typography>
      <Button variant="contained" color="error">Delete Account</Button>
    </Box>
  );
};

export default Settings;
