import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { TextField, Button, InputAdornment } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { useStyles } from './styles'
import { fetchAllBlogsAction } from '../../redux/actions/blogActions'

const Searchbar = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()

  const [searchTerm, setSearchTerm] = useState('')

  const formHandler = (e) => {
    e.preventDefault()
    setSearchTerm(e.target.value)
    dispatch(fetchAllBlogsAction(searchTerm))
    history.push(`/?title=${searchTerm}`)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    history.go(0)
  }

  return (
    <div className={classes.inputWrapper}>
      <TextField
        placeholder='Search for Blogs'
        variant='outlined'
        value={searchTerm}
        onChange={formHandler}
        className={classes.search}
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused,
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <Button
                variant='contained'
                className={classes.button}
                onClick={submitHandler}
              >
                <SearchIcon />
              </Button>
            </InputAdornment>
          ),
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
          },
        }}
      />
    </div>
  )
}

export default Searchbar
