import React from 'react'
import { Grid, Typography, Paper, IconButton, Avatar } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { useStyles } from './styles'

const Post = () => {
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <Grid container spacing={3}>
        {/* Post */}

        <Grid item md={9}>
          <Grid container>
            <Grid item md={12} className={classes.blogImgWrapper}>
              <img
                src='https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
                alt='blog-img'
                className={classes.blogImg}
              />
            </Grid>
            <Grid item md={12}>
              <Typography variant='h4' className={classes.blogHeader}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Typography>
            </Grid>
            <Grid item md={12} style={{ padding: '4rem' }}>
              <Grid container>
                <Grid item md={10}>
                  <Typography variant='body2' component='p'>
                    Author: John Doe
                  </Typography>
                </Grid>
                <Grid item md={2}>
                  <Typography variant='body2' component='p'>
                    March 31, 2021
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={12} style={{ padding: '2rem' }}>
              <Paper className={classes.blogWrapper}>
                <Grid container>
                  <Grid item md={12} className={classes.blogOptions}>
                    <IconButton>
                      <EditIcon color='secondary' />
                    </IconButton>
                    <IconButton>
                      <DeleteIcon color='error' />
                    </IconButton>
                  </Grid>
                </Grid>
                <Typography variant='h6' component='p'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis harum
                  quisquam eius sed odit fugiat iusto fuga praesentium optio,
                  eaque rerum! Provident similique accusantium nemo autem.
                  Veritatis obcaecati tenetur iure eius earum ut molestias
                  architecto voluptate aliquam nihil, eveniet aliquid culpa
                  officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                  harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                  quia. Quo neque error repudiandae fuga? Ipsa laudantium
                  molestias eos sapiente officiis modi at sunt excepturi
                  expedita sint? Sed quibusdam recusandae alias error harum
                  maxime adipisci amet laborum. Perspiciatis minima nesciunt
                  dolorem! Officiis iure rerum voluptates a cumque velit
                  quibusdam sed amet tempora. Sit laborum ab, eius fugit
                  doloribus tenetur fugiat, temporibus enim commodi iusto libero
                  magni deleniti quod quam consequuntur! Commodi minima
                  excepturi repudiandae velit hic maxime doloremque. Quaerat
                  provident commodi consectetur veniam similique ad earum omnis
                  ipsum saepe, voluptas, hic voluptates pariatur est explicabo
                  fugiat, dolorum eligendi quam cupiditate excepturi mollitia
                  maiores labore suscipit quas? Nulla, placeat. Voluptatem
                  quaerat non architecto ab laudantium modi minima sunt esse
                  temporibus sint culpa, recusandae aliquam numquam totam
                  ratione voluptas quod exercitationem fuga. Possimus quis earum
                  veniam quasi aliquam eligendi, placeat qui corporis!
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
                <Avatar className={classes.avatar}>J</Avatar>
              </Grid>
              <Grid item md={9} style={{ marginTop: '2px' }}>
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
