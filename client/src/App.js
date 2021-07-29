import {
  MuiThemeProvider,
  createTheme,
  responsiveFontSizes,
  CssBaseline,
} from '@material-ui/core'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// components
import Navbar from './components/Navbar/Navbar.jsx'

// screens
import Home from './screens/HomeScreen/Home.jsx'
import Blog from './screens/BlogScreen/Blog.jsx'
import Create from './screens/CreateBlogScreen/Create.jsx'

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
        error: { main: '#F8485E' },
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
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/post' component={Blog} />
            <Route path='/create' component={Create} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </div>
  )
}

export default App
