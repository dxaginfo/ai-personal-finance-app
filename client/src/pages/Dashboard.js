import React from 'react';
import { Box, Grid, Paper, Typography, Button, Stack } from '@mui/material';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  // Sample data for charts
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Income',
        data: [4500, 4200, 4800, 4300, 4900, 5100],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Expenses',
        data: [3800, 3600, 4100, 3700, 4200, 4000],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  const doughnutChartData = {
    labels: ['Housing', 'Food', 'Transportation', 'Utilities', 'Entertainment', 'Other'],
    datasets: [
      {
        data: [1200, 800, 600, 400, 500, 300],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Financial Dashboard
      </Typography>

      {/* Financial Summary */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Total Balance
            </Typography>
            <Typography variant="h3" color="primary">
              $12,680
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Across all accounts
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Monthly Income
            </Typography>
            <Typography variant="h3" color="success.main">
              $5,100
            </Typography>
            <Typography variant="body2" color="text.secondary">
              +5% from last month
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Monthly Expenses
            </Typography>
            <Typography variant="h3" color="error.main">
              $4,000
            </Typography>
            <Typography variant="body2" color="text.secondary">
              -3% from last month
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* AI Insights */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          AI Insights
        </Typography>
        <Stack spacing={2}>
          <Paper sx={{ p: 2, bgcolor: 'info.light', color: 'info.contrastText' }}>
            <Typography variant="subtitle1" fontWeight="bold">
              Spending Pattern Detected
            </Typography>
            <Typography variant="body2">
              Your restaurant spending has increased by 15% in the last month. Consider setting a
              dining budget to help control expenses.
            </Typography>
            <Button size="small" sx={{ mt: 1 }} variant="contained" color="info">
              Create Budget
            </Button>
          </Paper>
          <Paper sx={{ p: 2, bgcolor: 'success.light', color: 'success.contrastText' }}>
            <Typography variant="subtitle1" fontWeight="bold">
              Savings Opportunity
            </Typography>
            <Typography variant="body2">
              Based on your cash flow, you could increase your monthly savings by $200 without
              impacting your lifestyle.
            </Typography>
            <Button size="small" sx={{ mt: 1 }} variant="contained" color="success">
              Optimize Savings
            </Button>
          </Paper>
          <Paper sx={{ p: 2, bgcolor: 'warning.light', color: 'warning.contrastText' }}>
            <Typography variant="subtitle1" fontWeight="bold">
              Upcoming Bill Alert
            </Typography>
            <Typography variant="body2">
              Your annual subscription ($120) to Premium Services is due in 5 days. Ensure
              sufficient funds are available.
            </Typography>
            <Button size="small" sx={{ mt: 1 }} variant="contained" color="warning">
              View Details
            </Button>
          </Paper>
        </Stack>
      </Paper>

      {/* Charts */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Income vs. Expenses (6 months)
            </Typography>
            <Box sx={{ height: 300 }}>
              <Line
                data={lineChartData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Expense Breakdown
            </Typography>
            <Box sx={{ height: 300 }}>
              <Doughnut
                data={doughnutChartData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
