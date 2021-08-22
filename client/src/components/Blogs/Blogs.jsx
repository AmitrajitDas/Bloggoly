import { Grid } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import Blog from '../Blog/Blog.jsx'
import Loader from '../../utils/Loader/Loader.jsx'
// import { useStyles } from './styles'

const Blogs = ({ blogs, loading, error }) => {
  // const classes = useStyles()

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Alert severity='error'>{error}</Alert>
      ) : (
        <Grid container>
          {blogs &&
            blogs.map((blog) => (
              <Grid item key={blog._id} xs={12} sm={6} md={4}>
                <Blog blog={blog} />
              </Grid>
            ))}
        </Grid>
      )}
    </div>
  )
}

export default Blogs
