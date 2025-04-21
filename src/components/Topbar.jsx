import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  InputBase,
  Avatar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SearchIcon from '@mui/icons-material/Search';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import HistoryIcon from '@mui/icons-material/History';
import NotificationsNoneIcon from '@mui/icons-material/Notifications';
import { motion } from 'framer-motion';

const MotionIconButton = motion(IconButton);

const Topbar = ({ open, onToggleDrawer, title }) => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(248,249,250,1)',
        boxShadow: 'none',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        ml: open ? '240px' : 0,
        width: open ? 'calc(100% - 240px)' : '100%'
      }}
    >
      <Toolbar sx={{ justifyContent: 'center', px: 2 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            width: '100%',
            maxWidth: 960,
            justifyContent: 'space-between',
            marginTop: 2
          }}
        >
          {/* Left: Logo and title */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <MotionIconButton
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onToggleDrawer}
              className="bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              {open ? <ChevronLeftIcon /> : <MenuIcon />}
            </MotionIconButton>
            <span style={{ color: '#9ca3af', fontWeight: 500 }}>Zygo</span>
            <span style={{ color: '#9ca3af' }}>/</span>
            <span style={{ color: '#9ca3af', fontWeight: 500 }}>{title || '...'}</span>
          </Box>

          {/* Right: Search + Icons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              className="bg-gray-100 hover:bg-gray-200 rounded-lg"
              sx={{
                display: 'flex',
                alignItems: 'center',
                px: 1.5,
                py: 0.5,
                color: '#6b7280',
                fontSize: 14,
                transition: 'all 0.2s'
              }}
            >
              <SearchIcon fontSize="small" />
              <InputBase placeholder="Search" sx={{ ml: 1 }} />
            </Box>

            {[<Brightness5Icon />, <HistoryIcon />, <NotificationsNoneIcon />].map((Icon, i) => (
              <MotionIconButton
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-100 hover:bg-gray-200 rounded-lg"
              >
                {Icon}
              </MotionIconButton>
            ))}

            <Avatar sx={{ width: 32, height: 32 }} />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
