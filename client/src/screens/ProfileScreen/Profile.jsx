import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
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
} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import UpdateIcon from '@material-ui/icons/Update'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'

// import Loader from '../../components/Loader/Loader'
// import RedAlertBox from '../../components/Alert/RedAlert'
// import GreenAlertBox from '../../components/Alert/GreenAlert'
import { useStyles } from './styles'
import {
  userDetailsAction,
  userUpdateAction,
  userLogoutAction,
} from '../../redux/actions/authActions'
import Loader from '../../utils/Loader/Loader.jsx'

const Register = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  //   const [message, setMessage] = useState('')

  const { loginData } = useSelector((state) => state.userLogin)
  const { loading, profileData, error } = useSelector(
    (state) => state.userDetails
  )
  const { success } = useSelector((state) => state.userUpdate)

  const userId = profileData && profileData._id

  useEffect(() => {
    if (!loginData) {
      history.push('/login')
    } else {
      if (!profileData) {
        dispatch(userDetailsAction(loginData._id))
      } else {
        setUsername(profileData.username)
        setEmail(profileData.email)
      }
    }
  }, [loginData, history, dispatch, profileData])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(userUpdateAction(userId, username, email, password))
    dispatch(userLogoutAction())
    history.push('/login')
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.wrapper}>
        <div Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <UpdateIcon />
          </Avatar>
          <Typography variant='h4'>Update Profile</Typography>
          {success && <Alert severity='success'>User Updated</Alert>}
          {error && <Alert severity='error'>{error}</Alert>}
          {loading && <Loader />}
          <form className={classes.form} noValidate onSubmit={submitHandler}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='username'
              placeholder='Enter new username'
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
              placeholder='Enter new email'
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
              placeholder='Enter new password'
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
              color='secondary'
              variant='contained'
              className={classes.submit}
              onClick={(e) => (!username || !email ? e.preventDefault() : null)}
            >
              Update
            </Button>
          </form>
        </div>
      </div>
    </Container>
  )
}

export default Register
