import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from './main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <MuiThemeProvider>
    <Main />
        
        </MuiThemeProvider>

    , document.getElementById('root'));
registerServiceWorker();
