import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    PieChart, Pie, Cell, ResponsiveContainer,
    LineChart, Line, Legend
} from 'recharts';
import { Plus } from 'lucide-react';
import MenuWidget from '../components/MenuWidget';

// Sample data
const velocityData = [
    { category: 'Sprint 1', actual: 12, completed: 4 },
    { category: 'Sprint 2', actual: 8, completed: 5 },
    { category: 'Sprint 3', actual: 5, completed: 2 }
];

const horizontalData = [
    { category: 'VLON', closed: 15, active: 8, new: 3 },
    { category: 'YIKH', closed: 9, active: 12, new: 5 },
    { category: 'JOWA', closed: 24, active: 4, new: 2 },
    { category: 'ZASH', closed: 7, active: 16, new: 8 },
    { category: 'DAKO', closed: 18, active: 5, new: 0 },
    { category: 'NXHE', closed: 11, active: 7, new: 4 }
];

const pieData = [
    { name: 'Closed', value: 20 },
    { name: 'New', value: 10 },
    { name: 'Active', value: 15 }
];

const burndownData = [
    { day: 'Day 1', actual: 20, completed: 0 },
    { day: 'Day 2', actual: 18, completed: 2 },
    { day: 'Day 3', actual: 15, completed: 5 },
    { day: 'Day 4', actual: 12, completed: 8 },
    { day: 'Day 5', actual: 8, completed: 12 },
    { day: 'Day 6', actual: 5, completed: 15 },
    { day: 'Day 7', actual: 0, completed: 20 }
];

// Chart colors
const CHART_COLORS = {
    pie: { Closed: '#94E9B8', Active: '#A4CAFF', New: '#FF4747' },
    donut: { Closed: '#94E9B8', Active: '#A4CAFF', New: '#FF4747' },
    burndown: { actual: '#94E9B8', ideal: '#A8A8FA' },
    horizontalBar: { closed: '#94E9B8', active: '#A4CAFF', new: '#FF4747' },
    bar: { actual: '#A8A8FA', completed: '#94E9B8' }
};

// Centralized config
const CHART_CONFIG = {
    bar: {
        title: 'Velocity Chart',
        image: '/assets/VariantBarChart.png',
        description: 'Vertical distribution by category.'
    },
    horizontalBar: {
        title: 'Horizontal Bar Chart',
        image: '/assets/HorizontalBarChart.png',
        description: 'Horizontal bars for category comparison.'
    },
    pie: {
        title: 'Pie Chart',
        image: '/assets/PieChart.png',
        description: 'Category proportions as slices.'
    },
    donut: {
        title: 'Donut Chart',
        image: '/assets/DonutChart.png',
        description: 'Pie chart with center cutout.'
    },
    linear: {
        title: 'Line Chart',
        image: '/assets/LinearChart.png',
        description: 'Trend lines connecting data points.'
    },
    burndown: {
        title: 'Burndown Chart',
        image: '/assets/BurndownChart.png',
        description: 'Shows remaining work over time.'
    }
};

const Insights = () => {
    const theme = useTheme();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [selectedCharts, setSelectedCharts] = useState([]);

    const toggleSidebar = () => setSidebarOpen(prev => !prev);

    const addChart = (type) => {
        setSelectedCharts(prev => prev.includes(type) ? prev : [...prev, type]);
        setSidebarOpen(false);
    };

    const renderChart = (chartType) => {
        switch (chartType) {
            case 'bar':
                return (
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={velocityData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="category" />
                            <YAxis />
                            <Tooltip />
                            <Legend verticalAlign="top" />
                            <Bar dataKey="actual" fill={CHART_COLORS.bar.actual} name="Committed" />
                            <Bar dataKey="completed" fill={CHART_COLORS.bar.completed} name="Completed" />
                        </BarChart>
                    </ResponsiveContainer>
                );
            case 'horizontalBar':
                return (
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={horizontalData} layout="vertical">
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" />
                            <YAxis type="category" dataKey="category" />
                            <Tooltip />
                            <Legend verticalAlign="top" />
                            <Bar dataKey="closed" fill={CHART_COLORS.horizontalBar.closed} name="Closed" />
                            <Bar dataKey="active" fill={CHART_COLORS.horizontalBar.active} name="Active" />
                            <Bar dataKey="new" fill={CHART_COLORS.horizontalBar.new} name="New" />
                        </BarChart>
                    </ResponsiveContainer>
                );
            case 'pie':
            case 'donut':
                const isDonut = chartType === 'donut';
                return (
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie
                                data={pieData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                innerRadius={isDonut ? 40 : 0}
                                label
                            >
                                {pieData.map((entry, idx) => (
                                    <Cell key={idx} fill={CHART_COLORS[chartType][entry.name] || '#ccc'} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend verticalAlign="top" />
                        </PieChart>
                    </ResponsiveContainer>
                );
            case 'linear':
                return (
                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={velocityData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="category" />
                            <YAxis />
                            <Tooltip />
                            <Legend verticalAlign="top" />
                            <Line type="monotone" dataKey="actual" stroke={CHART_COLORS.bar.actual} name="Committed" />
                            <Line type="monotone" dataKey="completed" stroke={CHART_COLORS.bar.completed} name="Completed" />
                        </LineChart>
                    </ResponsiveContainer>
                );
            case 'burndown':
                const totalPoints = 20;
                const days = burndownData.length;
                const idealLine = burndownData.map((d, i) => ({
                    day: d.day,
                    points: totalPoints - (totalPoints / (days - 1)) * i
                }));
                return (
                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={burndownData}>
                            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis label={{ value: 'Story Points', angle: -90, position: 'insideLeft' }} />
                            <Tooltip />
                            <Legend verticalAlign="top" />
                            <Line type="monotone" dataKey="actual" name="Actual" stroke={CHART_COLORS.burndown.actual} strokeDasharray="5 5" dot={{ r: 4 }} />
                            <Line data={idealLine} type="linear" dataKey="points" name="Ideal" stroke={CHART_COLORS.burndown.ideal} strokeWidth={2} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                );
            default:
                return null;
        }
    };

    return (
        <div className="relative">
            {/* Floating + Button */}
            <button
                onClick={toggleSidebar}
                className="absolute top-4 right-4 z-50 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600"
            >
                <Plus />
            </button>

            {/* Sidebar */}
            {sidebarOpen && (
                <div className="fixed top-0 right-0 h-full w-96 bg-white shadow-lg z-40 p-4 border-l border-gray-200 overflow-y-auto">
                    <h2 className="text-lg font-semibold mb-4">Select Chart Type</h2>
                    <ul className="space-y-2">
                        {Object.entries(CHART_CONFIG).map(([key, { title, image, description }]) => (
                            <li key={key}>
                                <MenuWidget
                                    headingText={title}
                                    text={description}
                                    image={image}
                                    onClick={() => addChart(key)}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Dashboard */}
            <Grid container spacing={2} className="mt-12">
                {selectedCharts.map((chartType, idx) => (
                    <Grid item xs={12} md={6} key={idx}>
                        <Paper className="p-4">
                            <Typography variant="h6" className="mb-2">
                                {CHART_CONFIG[chartType].title}
                            </Typography>
                            {renderChart(chartType)}
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Insights;