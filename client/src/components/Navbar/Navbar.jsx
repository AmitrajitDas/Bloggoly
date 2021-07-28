import { Link } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core'

import { useStyles } from './styles'

const Navbar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
            <Typography variant='h4' className={classes.title}>
              Feeds
            </Typography>
          </Link>
          <Typography variant='h4' className={classes.title}>
            {' '}
          </Typography>
          <Link to='/' className={classes.whiteLink}>
            <Button color='inherit'>Home</Button>
          </Link>
          <Link to='/about' className={classes.whiteLink}>
            <Button color='inherit'>About</Button>
          </Link>
          <Link to='/contact' className={classes.whiteLink}>
            <Button color='inherit'>Contact Us</Button>
          </Link>
          <Link to='/create' className={classes.blackLink}>
            <Button variant='contained' color='secondary'>
              +Create
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
