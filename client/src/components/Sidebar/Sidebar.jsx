import React from 'react'
import { Grid, Typography, Paper, IconButton } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import PinterestIcon from '@material-ui/icons/Pinterest'
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
      <Paper className={classes.socialsWrapper}>
        <Typography variant='h6' className={classes.socialsHeader}>
          Follow Us
        </Typography>
        <Grid container className={classes.socailSites}>
          <Grid item md={1}>
            <IconButton>
              <FacebookIcon />
            </IconButton>
          </Grid>
          <Grid item md={1}>
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </Grid>
          <Grid item md={1}>
            <IconButton>
              <TwitterIcon />
            </IconButton>
          </Grid>
          <Grid item md={1}>
            <IconButton>
              <PinterestIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
      {/* <Paper className={classes.aboutWrapper}>
        <Typography variant='h6' className={classes.aboutHeader}>
          About Us
        </Typography>
        <Typography variant='body' component='p' className={classes.about}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat
          vel leo vitae venenatis. Curabitur ut ex ut ligula gravida viverra.
          Phasellus volutpat, lectus a vehicula dignissim, neque lorem suscipit
          metus, ut tempus risus nisi nec ex. Suspendisse laoreet in ipsum et
          ultricies. In sagittis sapien sed purus aliquet, eu laoreet tellus
          aliquet. Integer erat dui, interdum id hendrerit varius, vestibulum
          vitae orci. Fusce quis turpis vitae turpis aliquam interdum id sit
          amet orci. Suspendisse malesuada erat vitae enim ultricies posuere.
          Quisque posuere turpis nisi, vitae pulvinar sem feugiat in. Morbi et
          mi id lectus hendrerit luctus. Nulla facilisi. Aenean quis lobortis
          arcu. Suspendisse quis enim magna. Nullam dignissim turpis commodo
          feugiat dapibus. Vivamus eleifend mollis lectus at gravida.
        </Typography>
      </Paper> */}
    </div>
  )
}

export default Sidebar
