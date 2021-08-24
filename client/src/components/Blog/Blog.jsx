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

const Blog = ({ blog }) => {
  const classes = useStyles()

  const PF = 'http://localhost:5000/uploads/'

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
              avatar={
                <Avatar className={classes.avatar}>
                  {blog.username.charAt(0).toUpperCase()}
                </Avatar>
              }
              title={blog.username}
              subheader={new Date(blog.createdAt).toDateString()}
            />
            <Link
              to={`/blog/${blog._id}`}
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <CardMedia
                className={classes.media}
                image={PF + blog.photo}
                title={blog.title}
              />
              <CardContent>
                <Typography variant='h6'>{blog.title}</Typography>
                <Typography variant='subtitle2' color='textSecondary'>
                  {blog.categories && blog.categories.map((tag) => `#${tag} `)}
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
      </Grid>
    </div>
  )
}

export default Blog
