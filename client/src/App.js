import {
  MuiThemeProvider,
  createTheme,
  responsiveFontSizes,
  Paper,
  CssBaseline,
} from '@material-ui/core'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// components

import Navbar from './components/Navbar/Navbar.jsx'

const App = () => {
  const theme = responsiveFontSizes(
    createTheme({
      typography: {
        fontFamily: '"Ubuntu"',
        color: {
          main: '#fff',
          secondary: 'rgba(255, 255, 255, 0.7)',
          disabled: 'rgba(255, 255, 255, 0.5)',
        },
      },
      palette: {
        type: 'dark',
        primary: { main: '#032541' },
        secondary: { main: '#39A2DB' },
        alternate: { main: '#161616' },
        background: {
          default: '#043359',
        },
      },
    })
  )

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Paper>
          <Router>
            <Navbar />
          </Router>
        </Paper>
      </MuiThemeProvider>
    </div>
  )
}

export default App
