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

  avatar: {
    backgroundColor: '#F8485E',
  },

  blogImgWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },

  blogImg: {
    height: '70%',
    width: '80%',
    marginTop: '2rem',
    borderRadius: '1rem',
    objectFit: 'cover',
  },

  blogHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '-6rem',
  },

  blogWrapper: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '1rem',
    padding: '2rem',
  },

  blogOptions: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '2rem',
  },
}))
