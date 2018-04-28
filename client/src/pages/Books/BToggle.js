import React from 'react';
import Toggle from 'material-ui/Toggle';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


const styles = {
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginBottom: 16,
  },
  thumbOff: {
    backgroundColor: '#ffcccc',
  },
  trackOff: {
    backgroundColor: '#ff9d9d',
  },
  thumbSwitched: {
    backgroundColor: 'red',
  },
  trackSwitched: {
    backgroundColor: '#ff9d9d',
  },
  labelStyle: {
    color: 'black',
  },
};


const BToggle = (props) => (
<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}> 
   
  <div style={styles.block}>
  
    <Toggle
      label={props.title}
      style={styles.toggle}
      labelStyle={styles.labelStyle}
      
    />
  </div>
</MuiThemeProvider>
);
export default BToggle;