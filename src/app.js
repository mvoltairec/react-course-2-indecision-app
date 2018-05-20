import React from 'react';
import ReactDOM from 'react-dom';
import GratitudeApp from './components/GratitudeApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <MuiThemeProvider>
    <GratitudeApp />
  </MuiThemeProvider>
);
 

ReactDOM.render(<App />, document.getElementById('app'));
