import React from 'react';
import {Link} from 'react-router-dom';
import {Card, CardHeader, CardMedia,CardContent,CardActions} from '@material-ui/core';
import {Button, Avatar, IconButton, Typography, Menu,MenuItem} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useStyles} from './postStyle';

const PostCard = ({post, onDeletePost, link}) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeletePost = () => {
    handleClose();
    onDeletePost()
  };

  const data = Date.parse(post.createdAt);
  const isoDate = new Date(data);

    return (
      <Card className={classes.cardContent}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              К
            </Avatar>
          }
          action={
            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>

          }
          title={post.title}
          subheader={isoDate.toLocaleString()}
        />
        <CardMedia
          className={classes.media}
          image="https://placeimg.com/310/230/any"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.text}
          </Typography>
        </CardContent>
        <CardActions style={{justifyContent: 'space-between', marginTop: 'auto'}} disableSpacing>
          <Button size="small" color="primary">
            <Link to={link}>Learn More</Link>
          </Button>
          <div>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </div>
        </CardActions>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Update</MenuItem>
          <MenuItem onClick={handleDeletePost}>Delete</MenuItem>
        </Menu>
        </Card>
    )
};

PostCard.propTypes = {};

export default PostCard;
