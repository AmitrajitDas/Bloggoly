import React from 'react'
import { TextField, Paper, Grid, Button } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { useStyles } from './styles'

const Create = () => {
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <div className={classes.createBlogWrapper}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item md={12} className={classes.blogImgWrapper}>
              <img
                src='https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
                alt='blog-img'
                className={classes.blogImg}
              />
            </Grid>
            <Grid item md={12}>
              <label htmlFor='fileInput'>
                <AddCircleIcon
                  color='secondary'
                  style={{ height: '40px', width: '40px', cursor: 'pointer' }}
                />
              </label>
              <input id='fileInput' type='file' style={{ display: 'none' }} />
            </Grid>
            <Grid item md={12}>
              <TextField
                id='title'
                placeholder='Enter Title'
                margin='normal'
                className={classes.titleField}
                InputLabelProps={{
                  shrink: true,
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </Grid>
            <Grid item md={12}>
              <TextField
                id='standard-full-width'
                placeholder="What's your story?"
                margin='normal'
                fullWidth
                multiline
                className={classes.blogField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Grid item md={12}>
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  color='secondary'
                  className={classes.button}
                >
                  Publish
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  )
}

export default Create
