import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  aboutWrapper: {
    backgroundColor: theme.palette.primary.main,
    paddingBottom: '3rem',
    borderRadius: '1rem',
    marginTop: '2rem',
    marginBottom: '2rem',
  },

  aboutHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  },

  about: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  },

  profileWrapper: {
    padding: '2rem',
  },

  wrapper: {
    marginTop: '3rem',
    paddingTop: '2rem',
    marginBottom: '2rem',
  },

  categoriesWrapper: {
    backgroundColor: theme.palette.primary.main,
    paddingBottom: '3rem',
    borderRadius: '1rem',
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
