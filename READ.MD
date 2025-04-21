# Agile Dashboard SaaS App

This project is a React-based frontend for an Agile Dashboard SaaS application, using Material UI and Tailwind CSS. It provides a dashboard interface with multiple pages (Dashboard, Insights, Gamification, Team Profile, Organisation, Settings) and demonstrates charts, metrics, and various UI components, matching the provided design.

## Features
- **React & React Router:** Single-page application structure with client-side routing for all major pages.
- **Material UI Layout:** Responsive App Bar and persistent Drawer (sidebar) for navigation, using Material UI components for structure and layout.
- **Tailwind CSS Styling:** Utility-first CSS classes applied for fine-grained control over spacing, alignment, and colors, on top of Material UI's base styling.
- **Charts with Recharts:** Interactive charts (line, bar, pie/donut) integrated on various pages with mock data to simulate agile metrics (sprint burndown, issue types, gamification points, etc.).
- **Reusable Components:** Modular structure with reusable components (Sidebar, Topbar) and individual page components for clarity and maintainability.
- **Placeholder Data & Components:** Includes placeholder text, avatar icons, and form inputs to simulate a realistic UI (e.g., user avatar, notifications badge, settings form).

## Getting Started
1. **Install Dependencies:** Ensure you have Node.js installed. Run `npm install` to install all required packages as listed in `package.json`.
2. **Run Development Server:** Execute `npm start` to start the development server. The app will open at `http://localhost:3000` in your browser.
3. **View Pages:** Use the sidebar menu to navigate between Dashboard, Insights, Gamification, Team Profile, Organisation, and Settings pages. Each page contains sample content and charts according to the design.
4. **Build for Production:** Run `npm run build` to build the app for production (output will be in the `build` directory).

## Project Structure
    ├── public/
    │   └── index.html          # HTML template with root div and required meta tags
    ├── src/
    │   ├── index.js            # Application entry, sets up React Router and renders App
    │   ├── index.css           # Tailwind CSS imports and global styles
    │   ├── App.js              # Main App component with theme, layout, and routes
    │   ├── components/
    │   │   ├── Topbar.jsx      # Reusable top navigation bar (AppBar) component
    │   │   └── Sidebar.jsx     # Reusable sidebar navigation drawer component
    │   └── pages/
    │       ├── Overview.jsx   # Overview page with metrics cards and burndown chart
    │       ├── Insights.jsx    # Insights page with bar chart and pie chart
    │       ├── Gamification.jsx# Gamification page with progress and donut chart
    │       ├── TeamProfile.jsx # Team Profile page with team member list and avatars
    │       ├── Organisation.jsx# Organisation page with summary stats and horizontal bar chart
    │       └── Settings.jsx    # Settings page with form fields and toggles
    ├── tailwind.config.js      # Tailwind CSS configuration (content paths and theme customization)
    ├── postcss.config.js       # PostCSS configuration to use Tailwind CSS
    ├── package.json            # Project dependencies and scripts
    └── README.md               # Project documentation and instructions

## Customization
- **Theming:** The Material UI theme in `App.js` can be adjusted (colors, typography, etc.) to match different branding.
- **Tailwind Classes:** You can modify or add Tailwind utility classes in JSX for quick style changes. The setup is ready to use Tailwind's utility classes throughout the components.
- **Data & Charts:** The charts use placeholder data. You can replace the data arrays in the page components with real data or integrate with an API. The chart types and configurations can also be adjusted as needed (for example, adding more datasets or tooltips customization).
- **Responsive Design:** The layout uses Material UI's Grid and flex utilities which are mobile-responsive by default. The Drawer is persistent on larger screens; you might enhance mobile support by switching it to a temporary drawer for small viewports.

## Dependencies
- React 18, React Router DOM 6
- Material UI 5 (MUI Core and Icons)
- Tailwind CSS 3 (with PostCSS and Autoprefixer)
- Recharts (charting library for React)

Refer to the code comments and component structure for further insight into implementation details. Feel free to customize this scaffold for your specific needs.
