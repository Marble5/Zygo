import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Avatar
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InsightsIcon from '@mui/icons-material/Insights';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupIcon from '@mui/icons-material/Group';
import BusinessIcon from '@mui/icons-material/Business';
import SettingsIcon from '@mui/icons-material/Settings';
import ArticleIcon from '@mui/icons-material/Article';
import ChatIcon from '@mui/icons-material/Chat';

const drawerWidth = 240;

const Sidebar = ({ open }) => {
  const location = useLocation();

  const menuItems = [
    { label: 'Overview', icon: <InsightsIcon />, path: '/overview' },
    { label: 'Insights', icon: <DashboardIcon />, path: '/Insights' },
    { label: 'Gamification', icon: <EmojiEventsIcon />, path: '/gamification' },
    { label: 'Team Profile', icon: <GroupIcon />, path: '/team-profile' },
    { label: 'Organisation', icon: <BusinessIcon />, path: '/organisation' },
    { label: 'Settings', icon: <SettingsIcon />, path: '/Settings' },
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#fff',
          borderRight: '1px solid #fff',
          paddingTop: 2
        }
      }}
      
    >
        
      {/* Logo and brand name */}
      <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
        <Box
          component="img"
          src="Zygo.png"
          alt="Zygo"
          sx={{ height: 60, mb: 1, marginLeft: -5, marginBottom: -2 }}
        />
        <Typography variant="h6" fontWeight="bold"></Typography>
      </Box>

      
      {/* Navigation */}
      <List>
        {menuItems.map(item => {
          const isSelected = location.pathname === item.path;
          return (
            <ListItem key={item.label} disablePadding sx={{ px: 1.5, mb: 1 }}>
              <ListItemButton
                component={Link}
                to={item.path}
                selected={isSelected}
                sx={{
                  borderRadius: 3,
                  backgroundColor: isSelected ? '#f4f4f5' : 'transparent',
                  '&:hover': { backgroundColor: '#f4f4f4' }
                }}
              >


<ListItemIcon sx={{ minWidth: 0, mr: 2 }}>
  <Box
    sx={{
      backgroundColor: isSelected ? '#e0e0e0' : '#f8f8f9',
      borderRadius: 2,
      padding: '6px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 32,
      height: 32,
      transition: '0.2s ease',
    }}
  >
    {React.cloneElement(item.icon, {
      fontSize: 'small',
      color: isSelected ? 'primary' : 'action',
    })}
  </Box>
</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      {/* Bottom profile area */}
      <Box mt="auto" px={2} py={2} display="flex" alignItems="center" gap={1.5}>
        <Avatar sx={{ width: 32, height: 32 }}>T1</Avatar>
        <Typography variant="body2">Team 1</Typography>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
