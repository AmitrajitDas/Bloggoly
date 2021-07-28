import React from 'react'
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

const Posts = () => {
  const classes = useStyles()

  return (
    <div>
      <Grid container>
        <Grid item md={4} className={classes.wrapper}>
          <Card className={classes.card}>
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
          <Card className={classes.card}>
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
          <Card className={classes.card}>
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
          <Card className={classes.card}>
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
          <Card className={classes.card}>
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
          <Card className={classes.card}>
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

export default Posts
