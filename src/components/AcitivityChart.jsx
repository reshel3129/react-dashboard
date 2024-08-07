import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Box } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function ActivityBarChart() {
    const data = {
        labels: ['5', '9', '11', '13', '15', '17', '19', '21', '23'], // Ensure these match the x-axis in the image
        datasets: [{
            label: 'Activity',
            data: [5000, 3000, 4000, 6000, 7000, 10000, 14000, 8000, 12000], // Adjust data to match the chart
            backgroundColor: '#3B82F6',
            borderRadius: 10, // Add border radius here
            barThickness: 20, // Adjust bar thickness if needed
        }]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: '#9CA3AF',
                },
            },
            y: {
                grid: {
                    color: '#374151',
                },
                ticks: {
                    color: '#9CA3AF',
                    callback: function (value) {
                        if (value === 0 || value === 5000 || value === 10000 || value === 15000) {
                            return `${value === 0 ? '0' : value / 1000 + 'k'}`;
                        }
                        return '';
                    },
                    stepSize: 5000, // Ensures only 0, 5000, 10000, 15000 ticks are shown
                },
            },
        },
    };

    return (
        <Box sx={{ borderRadius: '8px' }}>
            {/* <Bar data={data} options={options} height={80}
            /> */}
        </Box>
    );
}
