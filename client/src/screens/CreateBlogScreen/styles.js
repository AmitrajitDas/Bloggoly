import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: '3rem',
    marginTop: '2rem',
  },

  paper: {
    backgroundColor: theme.palette.primary.main,
    padding: '2rem',
    borderRadius: '1rem',
    width: '80rem',
  },

  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },

  blogImgWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '-15rem',
  },

  blogImg: {
    height: '40%',
    width: '60%',
    marginTop: '2rem',
    borderRadius: '1rem',
    objectFit: 'cover',
  },

  createBlogWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '6rem',
  },

  titleField: {
    width: '40rem',
    marginBottom: '5rem',
  },

  blogField: {
    width: '70rem',
    marginBottom: '2rem',
  },

  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `${theme.palette.secondary.main} !important`,
    },
  },

  cssFocused: {},

  notchedOutline: {
    borderWidth: '1px',
  },

  button: {
    padding: '0.6rem 2rem 0.6rem 2rem',
    margin: '0.5rem 0 1rem 0',
    borderRadius: '20px',
    fontSize: '1rem',
  },
}))
