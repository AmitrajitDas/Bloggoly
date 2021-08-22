import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'
import Hero from '../../components/Hero/Hero.jsx'
import Blogs from '../../components/Blogs/Blogs.jsx'
import Sidebar from '../../components/Sidebar/Sidebar.jsx'
import { useStyles } from './styles.js'
import { fetchAllBlogsAction } from '../../redux/actions/blogActions'

const Home = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const { loading, blogs, error } = useSelector((state) => state.fetchAllBlogs)

  useEffect(() => {
    dispatch(fetchAllBlogsAction())
  }, [dispatch])

  return (
    <div>
      <Hero />
      <Grid container className={classes.homeContainer}>
        <Grid item md={9}>
          <Blogs blogs={blogs} loading={loading} error={error} />
        </Grid>
        <Grid item md={3}>
          <Sidebar />
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
