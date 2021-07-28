import React from 'react'
import { Grid, Typography, Paper } from '@material-ui/core'
import { useStyles } from './styles'

const Sidebar = () => {
  const classes = useStyles()
  return (
    <div>
      <Paper className={classes.categoriesWrapper}>
        <Typography variant='h6' className={classes.categoriesHeader}>
          Categories
        </Typography>
        <Grid container spacing={3}>
          <Grid item md={6} className={classes.categories}>
            <Typography variant='body1' className={classes.tags}>
              Demo
            </Typography>
          </Grid>
          <Grid item md={6} className={classes.categories}>
            <Typography variant='body1' className={classes.tags}>
              Demo
            </Typography>
          </Grid>
          <Grid item md={6} className={classes.categories}>
            <Typography variant='body1' className={classes.tags}>
              Demo
            </Typography>
          </Grid>
          <Grid item md={6} className={classes.categories}>
            <Typography variant='body1' className={classes.tags}>
              Demo
            </Typography>
          </Grid>
          <Grid item md={6} className={classes.categories}>
            <Typography variant='body1' className={classes.tags}>
              Demo
            </Typography>
          </Grid>
          <Grid item md={6} className={classes.categories}>
            <Typography variant='body1' className={classes.tags}>
              Demo
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Sidebar
