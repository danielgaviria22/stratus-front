import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import TabPanel from './components/TabPanel';
import CostsView from './containers/GeneralView';
import MetricsView from './containers/StatusDataView';

import StratusLogo from './icons/stratus-logo.svg';

import './App.css';

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#376DED',
      },
      secondary: {
        main: '#fff',
      }
    },
  });
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Tabs 
          value={value}
          onChange={handleChange}
        >
          <Tab label="Cost" {...a11yProps(0)} />
          <Tab label="Metrics" {...a11yProps(1)} />
        </Tabs>
        <img className="logo-image" src={StratusLogo} alt="Stratus" />
      </AppBar>
      <TabPanel value={value} index={0}>
        <CostsView/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MetricsView />
      </TabPanel>
    </ThemeProvider>
  );
}

export default App;
