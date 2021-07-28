import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
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

  socialsWrapper: {
    backgroundColor: theme.palette.primary.main,
    paddingBottom: '3rem',
    borderRadius: '1rem',
    marginTop: '2rem',
  },

  socialsHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  },
  socailSites: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aboutWrapper: {
    backgroundColor: theme.palette.primary.main,
    paddingBottom: '3rem',
    borderRadius: '1rem',
    marginTop: '2rem',
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
}))
