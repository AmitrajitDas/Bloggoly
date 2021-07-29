import { useState } from 'react'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
  InputAdornment,
  IconButton,
  Grid,
  Link,
} from '@material-ui/core'

import LockIcon from '@material-ui/icons/Lock'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'

// import Loader from '../../components/Loader/Loader'
// import RedAlertBox from '../../components/Alert/RedAlert'

import { useStyles } from './styles'

const Login = ({ location, history }) => {
  const classes = useStyles()

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.wrapper}>
        <div Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography variant='h4'>Sign In</Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              type='email'
              placeholder='Enter your email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              placeholder='Enter a password'
              type={showPassword ? 'text' : 'password'}
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },

                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <VisibilityIcon color='secondary' />
                      ) : (
                        <VisibilityOffIcon color='secondary' />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='secondary'
              className={classes.submit}
              onClick={(e) => (!email || !password ? e.preventDefault() : null)}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2' color='secondary'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href={
                    redirect ? `/register?redirect=${redirect}` : '/register'
                  }
                  variant='body2'
                  color='secondary'
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </Container>
  )
}

export default Login
