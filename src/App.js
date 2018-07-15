import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import NavBar from './Components/NavBar'
import Main from './Main.js'
import './App.css';


class App extends Component {
  render() {
    const theme = createMuiTheme({
      palette: { 
        primary: {
            main: '#0000cc',
          },
          secondary: {
            main: '#00344d',
          },
          
        },
          
  })

    console.log(this.props)
    return (
      <MuiThemeProvider theme={theme}>
        <NavBar />
        <Main />
      </MuiThemeProvider>
    );
  }
}

export default App;
