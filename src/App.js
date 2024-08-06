import logo from './logo.svg';
import './App.css';
import DashboardDefault from './Dashboard';
import Dashboard from './Dashboard';
import { ThemeProvider } from '@emotion/react';
import theme from './themes/theme';
// import ThemeCustomization from './themes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
