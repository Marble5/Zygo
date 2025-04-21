// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

function Layout() {
  return (
    <>
      {/* Persistent top navigation bar */}
      <Topbar />
      {/* Container for sidebar + page content */}
      <div style={{ display: 'flex' }}>
        <Sidebar />{/* Sidebar stays on the left */}
        <main style={{ flex: 1, padding: '1rem' }}>
          {/* Outlet renders the matched child route component */}
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
