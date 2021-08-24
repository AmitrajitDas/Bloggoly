import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
import Alert from '@material-ui/lab/Alert'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import { useStyles } from './styles'
import { userRegisterAction } from '../../redux/actions/authActions'

const Register = ({ location, history }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')

  const { success, error, registerData } = useSelector(
    (state) => state.userRegister
  )

  const redirect = location.search ? location.search.split('=')[1] : '/login'

  useEffect(() => {
    if (registerData) {
      history.push('/login')
    }
  }, [registerData, history])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage("Password doesn't match")
    } else {
      dispatch(userRegisterAction(username, email, password))
    }
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.wrapper}>
        <div Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AccountCircleIcon />
          </Avatar>
          <Typography variant='h4'>Sign Up</Typography>
          {success && <Alert severity='success'>User registered</Alert>}
          {message && <Alert severity='warning'>{message}</Alert>}
          {error && <Alert severity='error'>{error}</Alert>}
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='username'
              placeholder='Enter your username'
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              placeholder='Confirm Password'
              type={showConfirmPassword ? 'text' : 'password'}
              id='confirm password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              InputProps={{
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
                !username || !email || !password ? e.preventDefault() : null
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
