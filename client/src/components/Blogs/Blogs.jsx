import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Grid,
  Card,
  CardMedia,
  CardHeader,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  IconButton,
} from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import { useStyles } from './styles'

const Blogs = () => {
  const classes = useStyles()

  // const [raised, setRaised] = useState(false)

  // const toggleRaised = () => setRaised(!raised)

  return (
    <div>
      <Grid container>
        <Grid item md={4} className={classes.wrapper}>
          <Card
            className={classes.card}
            // onMouseOver={toggleRaised}
            // onMouseOut={toggleRaised}
            // raised={raised}
          >
            <CardHeader
              avatar={<Avatar className={classes.avatar}>J</Avatar>}
              title='John Doe'
              subheader='March 31, 2021'
            />
            <Link to='/post' style={{ textDecoration: 'none', color: 'white' }}>
              <CardMedia
                className={classes.media}
                image='https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
                title='Paella dish'
              />
              <CardContent>
                <Typography variant='h6'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Typography>
                <Typography variant='subtitle2' color='textSecondary'>
                  tags
                </Typography>
              </CardContent>
            </Link>
            <CardActions disableSpacing>
              <IconButton aria-label='add to favorites'>
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label='share'>
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={4} className={classes.wrapper}>
          <Card
            className={classes.card}
            // onMouseOver={toggleRaised}
            // onMouseOut={toggleRaised}
            // raised={raised}
          >
            <CardHeader
              avatar={
                <Avatar aria-label='recipe' className={classes.avatar}>
                  A
                </Avatar>
              }
              title='John Doe'
              subheader='March 31, 2021'
            />
            <CardMedia
              className={classes.media}
              image='https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
              title='Paella dish'
            />
            <CardContent>
              <Typography variant='h6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Typography>
              <Typography variant='subtitle2' color='textSecondary'>
                tags
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label='add to favorites'>
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label='share'>
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={4} className={classes.wrapper}>
          <Card
            className={classes.card}
            // onMouseOver={toggleRaised}
            // onMouseOut={toggleRaised}
            // raised={raised}
          >
            <CardHeader
              avatar={
                <Avatar aria-label='recipe' className={classes.avatar}>
                  A
                </Avatar>
              }
              title='John Doe'
              subheader='March 31, 2021'
            />
            <CardMedia
              className={classes.media}
              image='https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
              title='Paella dish'
            />
            <CardContent>
              <Typography variant='h6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Typography>
              <Typography variant='subtitle2' color='textSecondary'>
                tags
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label='add to favorites'>
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label='share'>
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={4} className={classes.wrapper}>
          <Card
            className={classes.card}
            // onMouseOver={toggleRaised}
            // onMouseOut={toggleRaised}
            // raised={raised}
          >
            <CardHeader
              avatar={
                <Avatar aria-label='recipe' className={classes.avatar}>
                  A
                </Avatar>
              }
              title='John Doe'
              subheader='March 31, 2021'
            />
            <CardMedia
              className={classes.media}
              image='https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
              title='Paella dish'
            />
            <CardContent>
              <Typography variant='h6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Typography>
              <Typography variant='subtitle2' color='textSecondary'>
                tags
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label='add to favorites'>
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label='share'>
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={4} className={classes.wrapper}>
          <Card
            className={classes.card}
            // onMouseOver={toggleRaised}
            // onMouseOut={toggleRaised}
            // raised={raised}
          >
            <CardHeader
              avatar={<Avatar className={classes.avatar}>A</Avatar>}
              title='John Doe'
              subheader='March 31, 2021'
            />
            <CardMedia
              className={classes.media}
              image='https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
              title='Paella dish'
            />
            <CardContent>
              <Typography variant='h6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Typography>
              <Typography variant='subtitle2' color='textSecondary'>
                tags
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label='add to favorites'>
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label='share'>
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={4} className={classes.wrapper}>
          <Card
            className={classes.card}
            // onMouseOver={toggleRaised}
            // onMouseOut={toggleRaised}
            // raised={raised}
          >
            <CardHeader
              avatar={
                <Avatar aria-label='recipe' className={classes.avatar}>
                  A
                </Avatar>
              }
              title='John Doe'
              subheader='March 31, 2021'
            />
            <CardMedia
              className={classes.media}
              image='https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
              title='Paella dish'
            />
            <CardContent>
              <Typography variant='h6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Typography>
              <Typography variant='subtitle2' color='textSecondary'>
                tags
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label='add to favorites'>
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label='share'>
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default Blogs
