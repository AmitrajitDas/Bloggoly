import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `${theme.palette.secondary.main} !important`,
    },
  },

  cssFocused: {},

  notchedOutline: {
    borderWidth: '1px',
  },

  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    marginTop: '10rem',
    marginBottom: '5rem',
    width: '70rem',
  },
  button: {
    backgroundColor: theme.palette.secondary.main,
  },
}))
