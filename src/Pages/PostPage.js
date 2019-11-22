import React, {useState, useEffect} from 'react';
import * as postAPI from '../services/posts-api';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {Container, Paper, Typography, Button } from '@material-ui/core';



const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 40,
    padding: theme.spacing(3, 2),
  },
  title:{
    marginBottom: 15,
  },
  button: {
    marginTop: 40,
  }
}));

const PostPage = (props) => {
  const classes = useStyles();
  const getIdFromProps = props => props.match.params.id;

  const [post, setPost] = useState({});

  useEffect(() => {
    const id = getIdFromProps(props);

    async function fetchData() {
      try{
        const post = await postAPI.fetchPostWithId(id);
        setPost(post.data)
      }catch(error){
        console.log(error.message);
      }
    }
    fetchData();
  }, [props]);

  const handleGoback = () => {
    const { history, location } = props;

    if (location.state) {
      return history.push(location.state.from);
    }

    history.push('/posts');
  };

  return (
    <Container>
      <Paper className={classes.root}>
        <Typography className={classes.title} variant="h5" component="h3">
          {post.title}
        </Typography>
        <Typography component="p">
          {post.text}
        </Typography>
          <Button onClick={handleGoback} variant="outlined" color="primary" className={classes.button}>
            Go back
          </Button>
      </Paper>
    </Container>
  )
};

PostPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default PostPage;
