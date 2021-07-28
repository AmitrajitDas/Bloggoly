import React from 'react'
import { Grid } from '@material-ui/core'
import Hero from '../../components/Hero/Hero.jsx'
import Posts from '../../components/Posts/Blogs.jsx'
import Sidebar from '../../components/Sidebar/Sidebar.jsx'
import { useStyles } from './styles.js'

const Home = () => {
  const classes = useStyles()
  return (
    <div>
      <Hero />
      <Grid container spacing={3} className={classes.homeContainer}>
        <Grid item md={9}>
          <Posts />
        </Grid>
        <Grid item md={3}>
          <Sidebar />
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
