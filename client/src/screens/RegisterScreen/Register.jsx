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

import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'

// import Loader from '../../components/Loader/Loader'
// import RedAlertBox from '../../components/Alert/RedAlert'
// import GreenAlertBox from '../../components/Alert/GreenAlert'
import { useStyles } from './styles'

const Register = ({ location, history }) => {
  const classes = useStyles()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  //   const [message, setMessage] = useState('')

  const redirect = location.search ? location.search.split('=')[1] : '/login'

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.wrapper}>
        <div Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AccountCircleIcon />
          </Avatar>
          <Typography variant='h4'>Sign Up</Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='name'
              placeholder='Enter your name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              id='email'
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
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='confirm password'
              placeholder='Confirm your password'
              type={showConfirmPassword ? 'text' : 'password'}
              id='confirm password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      onMouseDown={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
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
              color='secondary'
              variant='contained'
              className={classes.submit}
              onClick={(e) =>
                !name || !email || !password ? e.preventDefault() : null
              }
            >
              Register
            </Button>
            <Grid container>
              <Grid item>
                <Link
                  href={redirect ? `/login?redirect=${redirect}` : '/login'}
                  variant='body2'
                  color='secondary'
                >
                  {'Already registered? Sign In'}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </Container>
  )
}

export default Register
