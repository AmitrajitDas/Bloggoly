import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { TextField, Paper, Grid, Button } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { useStyles } from './styles'
import { createBlogAction } from '../../redux/actions/blogActions'

const Create = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()

  const [file, setFile] = useState('')
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [category, setCategory] = useState('')

  const { loginData } = useSelector((state) => state.userLogin)

  const username = loginData && loginData.username

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createBlogAction(username, title, desc, file, category))
    history.push('/')
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.createBlogWrapper}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item md={12} className={classes.blogImgWrapper}>
              {file && (
                <img
                  src={URL.createObjectURL(file)}
                  alt='blog-img'
                  className={classes.blogImg}
                />
              )}
            </Grid>
            <Grid item md={12}>
              <label htmlFor='fileInput'>
                <AddCircleIcon
                  color='secondary'
                  style={{ height: '40px', width: '40px', cursor: 'pointer' }}
                />
              </label>
              <input
                id='fileInput'
                type='file'
                style={{ display: 'none' }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Grid>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <Grid item md={12}>
                <TextField
                  id='title'
                  placeholder='Enter Title'
                  margin='normal'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
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
                  id='category'
                  placeholder='Specify Category'
                  margin='normal'
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
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
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
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
            </form>
          </Grid>
        </Paper>
      </div>
    </div>
  )
}

export default Create
