import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useHistory } from 'react-router-dom'
import { Grid, Typography, Paper, IconButton, Avatar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { useStyles } from './styles'
import {
  fetchSingleBlogAction,
  deleteBlogAction,
} from '../../redux/actions/blogActions'
import Loader from '../../utils/Loader/Loader.jsx'

const Post = () => {
  const classes = useStyles()
  const params = useParams()
  const history = useHistory()
  const dispatch = useDispatch()

  const blogId = params.id
  const PF = 'http://localhost:5000/uploads/'

  const { error, blog, loading } = useSelector((state) => state.fetchSingleBlog)
  const { loginData } = useSelector((state) => state.userLogin)

  useEffect(() => {
    dispatch(fetchSingleBlogAction(blogId))
  }, [dispatch, blogId])

  const handleDelete = (e) => {
    e.preventDefault()
    dispatch(deleteBlogAction(blogId))
    history.push('/')
  }

  return (
    <div className={classes.wrapper}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Alert severity='error'>{error}</Alert>
      ) : (
        <Grid container spacing={3}>
          {/* Post */}

          <Grid item md={9}>
            <Grid container>
              <Grid item md={12} className={classes.blogImgWrapper}>
                <img
                  src={blog && PF + blog.photo}
                  alt='blog-img'
                  className={classes.blogImg}
                />
              </Grid>
              <Grid item md={12}>
                <Typography variant='h4' className={classes.blogHeader}>
                  {blog && blog.title}
                </Typography>
              </Grid>
              <Grid item md={12} style={{ padding: '4rem' }}>
                <Grid container>
                  <Grid item md={10}>
                    <Link
                      to={`/?user=${blog && blog.username}`}
                      style={{ textDecoration: 'none', color: 'white' }}
                    >
                      <Typography variant='body1' component='p'>
                        Author: {blog && blog.username}
                      </Typography>
                    </Link>
                  </Grid>
                  <Grid item md={2}>
                    <Typography variant='body1' component='p'>
                      {new Date(blog && blog.createdAt).toDateString()}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={12} style={{ padding: '2rem' }}>
                <Paper className={classes.blogWrapper}>
                  <Grid container>
                    <Grid item md={12} className={classes.blogOptions}>
                      {blog &&
                      loginData &&
                      loginData.username === blog.username ? (
                        <>
                          <Link to='/update'>
                            <IconButton>
                              <EditIcon color='secondary' />
                            </IconButton>
                          </Link>
                          <IconButton>
                            <DeleteIcon color='error' onClick={handleDelete} />
                          </IconButton>{' '}
                        </>
                      ) : null}
                    </Grid>
                  </Grid>
                  <Typography variant='h6' component='p'>
                    {blog && blog.desc}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          {/* Sidebar */}

          <Grid item md={3}>
            <Paper className={classes.aboutWrapper}>
              <Typography variant='h6' className={classes.aboutHeader}>
                About Author
              </Typography>
              <Grid container spacing={2} className={classes.profileWrapper}>
                <Grid item md={3}>
                  <Avatar className={classes.avatar}>
                    {blog && blog.username.charAt(0).toUpperCase()}
                  </Avatar>
                </Grid>
                <Grid item md={9} style={{ marginTop: '2px' }}>
                  <Link
                    to={`/?user=${blog && blog.username}`}
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    <Typography variant='h6'>
                      {blog && blog.username}
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
              <Typography
                variant='body'
                component='p'
                className={classes.about}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                consequat vel leo vitae venenatis.
              </Typography>
            </Paper>
            <Paper className={classes.categoriesWrapper}>
              <Typography variant='h6' className={classes.categoriesHeader}>
                Categories
              </Typography>
              <Grid container spacing={3}>
                <Grid item md={6} className={classes.categories}>
                  <Typography variant='body1' className={classes.tags}>
                    {blog && blog.categories[0]}
                  </Typography>
                </Grid>
                <Grid item md={6} className={classes.categories}>
                  <Typography variant='body1' className={classes.tags}>
                    {blog && blog.categories[1]}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      )}
    </div>
  )
}

export default Post
