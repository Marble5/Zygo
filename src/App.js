import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';

import Overview from './pages/Overview';
import Insights from './pages/Insights';
import Gamification from './pages/Gamification';
import TeamProfile from './pages/TeamProfile';
import Organisation from './pages/Organisation';
import Settings from './pages/Settings';

// Define a custom Material UI theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5'
    },
    secondary: {
      main: '#f50057'
    }
  }
});

// Sidebar menu items for title mapping
const menuItems = [
  { label: 'Overview', path: '/overview' },
  { label: 'Insights', path: '/insights' },
  { label: 'Gamification', path: '/gamification' },
  { label: 'Team Profile', path: '/team-profile' },
  { label: 'Organisation', path: '/organisation' },
  { label: 'Settings', path: '/settings' }
];

function App() {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const location = useLocation();

  // Match current route to title
  const currentPage = menuItems.find(item =>
    location.pathname.toLowerCase().startsWith(item.path.toLowerCase())
  );
  const pageTitle = currentPage ? currentPage.label : '';

  const handleDrawerToggle = () => {
    setDrawerOpen(prev => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
        <Topbar open={drawerOpen} onToggleDrawer={handleDrawerToggle} title={pageTitle} />
        <Sidebar open={drawerOpen} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            ml: drawerOpen ? '240px' : '0',
            backgroundColor: '#f8f9fa',
            minHeight: '100vh',
            transition: 'margin 0.3s'
          }}
        >
          {/* Spacer for Topbar */}
          <Box sx={{ height: '64px' }} />
          <Routes>
            <Route path="/" element={<Navigate to="/overview" replace />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/gamification" element={<Gamification />} />
            <Route path="/team-profile" element={<TeamProfile />} />
            <Route path="/organisation" element={<Organisation />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;