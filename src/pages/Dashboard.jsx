import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';

import Dashboard from './pages/Overview';
import Insights from './pages/Insights';
import Gamification from './pages/Gamification';
import TeamProfile from './pages/TeamProfile';
import Organisation from './pages/Organisation';
import Settings from './pages/Settings';

// Define a custom Material UI theme (color palette matching branding)
const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5' // Indigo 500 as primary color
    },
    secondary: {
      main: '#f50057' // Pink A400 as secondary color
    }
  }
});

// Define sidebar menu items with labels and routes
const menuItems = [
  { label: 'Dashboard', path: '/Overview' },
  { label: 'Insights', path: '/insights' },
  { label: 'Gamification', path: '/gamification' },
  { label: 'Team Profile', path: '/team-profile' },
  { label: 'Organisation', path: '/organisation' },
  { label: 'Settings', path: '/settings' }
];

function App() {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const location = useLocation();

  // Determine current page title from route
  const currentPage = menuItems.find(item => location.pathname.startsWith(item.path));
  const pageTitle = currentPage ? currentPage.label : '';

  const handleDrawerToggle = () => {
    setDrawerOpen(prev => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>        {/* Top navigation bar */}
        <Topbar open={drawerOpen} onToggleDrawer={handleDrawerToggle} title={pageTitle} />
        {/* Side navigation drawer */}
        <Sidebar open={drawerOpen} />
        {/* Main content area */}
        <Box
  component="main"
  sx={{
    flexGrow: 1,
    p: 3,
    ml: drawerOpen ? '240px' : '0',
    backgroundColor: 'f8f9fa', // <-- transparent main area
    minHeight: '100vh',
    transition: 'margin 0.3s'
  }}
>

          {/* Spacer to push content below AppBar */}
          <Box sx={{ height: '64px' }} /> {/* or use <Toolbar /> if you're importing it */}          <Routes>
            <Route path="/" element={<Navigate to="/Overview" replace />} />
            <Route path="/Overview" element={<Overview />} />
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
