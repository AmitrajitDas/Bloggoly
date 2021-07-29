import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginBottom: '2rem',
  },

  card: {
    maxWidth: 345,
    backgroundColor: theme.palette.primary.main,
    borderRadius: '1rem',
  },
  avatar: {
    backgroundColor: '#F8485E',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}))
