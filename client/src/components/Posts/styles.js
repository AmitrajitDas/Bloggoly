import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: '2rem',
  },
  heroWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hero: {
    marginTop: '3rem',
    width: '70%',
    height: '80%',
  },
}))
