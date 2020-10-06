import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { orange, blue } from '@material-ui/core/colors';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import TabPanel from './components/TabPanel';
import GeneralView from './containers/GeneralView';
import StatusDataView from './containers/StatusDataView';

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
        main: orange[500]
      },
      secondary: {
        main: blue[400]
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
          <Tab label="General" {...a11yProps(0)} />
          <Tab label="Tab2" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <GeneralView/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <StatusDataView />
      </TabPanel>
    </ThemeProvider>
  );
}

export default App;
