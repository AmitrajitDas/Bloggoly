import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import Userinfo from './Userinfo.jsx'
import { useStyles } from './styles'

const Navbar = () => {
  const classes = useStyles()
  const history = useHistory()

  const { loginData } = useSelector((state) => state.userLogin)

  const handleClick = (e) => {
    e.preventDefault()
    if (loginData) {
      history.push('/create')
    } else {
      history.push('/login')
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position='fixed'>
        <Toolbar>
          <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
            <Typography variant='h4' className={classes.title}>
              Dev.daily
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
          {loginData ? (
            <Userinfo loginData={loginData} />
          ) : (
            <Link to='/login' className={classes.whiteLink}>
              <Button color='inherit'>Login</Button>
            </Link>
          )}

          <Button variant='contained' color='secondary' onClick={handleClick}>
            +Create
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
