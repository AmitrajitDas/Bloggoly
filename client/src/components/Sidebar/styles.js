import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  categoriesWrapper: {
    backgroundColor: theme.palette.primary.main,
    paddingBottom: '3rem',
  },

  categoriesHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  },

  categories: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tags: { cursor: 'pointer' },
}))
