import React from 'react'
import { Grid, Typography, Paper, IconButton } from '@material-ui/core'
import FaceIcon from '@material-ui/icons/Face'
import { useStyles } from './styles'

const Post = () => {
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <Grid container spacing={3}>
        <Grid item md={9}>
          Post
        </Grid>
        <Grid item md={3}>
          <Paper className={classes.aboutWrapper}>
            <Typography variant='h6' className={classes.aboutHeader}>
              About Author
            </Typography>
            <Grid container spacing={2} className={classes.profileWrapper}>
              <Grid item md={3}>
                <FaceIcon style={{ height: '40px', width: '40px' }} />
              </Grid>
              <Grid item md={9}>
                <Typography variant='h6'>John Doe</Typography>
              </Grid>
            </Grid>
            <Typography variant='body' component='p' className={classes.about}>
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
                  Tags
                </Typography>
              </Grid>
              <Grid item md={6} className={classes.categories}>
                <Typography variant='body1' className={classes.tags}>
                  Tags
                </Typography>
              </Grid>
              <Grid item md={6} className={classes.categories}>
                <Typography variant='body1' className={classes.tags}>
                  Tags
                </Typography>
              </Grid>
              <Grid item md={6} className={classes.categories}>
                <Typography variant='body1' className={classes.tags}>
                  Tags
                </Typography>
              </Grid>
              <Grid item md={6} className={classes.categories}>
                <Typography variant='body1' className={classes.tags}>
                  Tags
                </Typography>
              </Grid>
              <Grid item md={6} className={classes.categories}>
                <Typography variant='body1' className={classes.tags}>
                  Tags
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Post
