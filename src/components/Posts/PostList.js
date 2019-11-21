import React from 'react';
import {Grid,Container} from '@material-ui/core';
import PostCard from './PostCard';
import { withRouter } from 'react-router-dom';
import { useStyles } from './postStyle';

function PostList( {deletePost, match, location, posts} ) {
  const classes = useStyles();

  return (
    <Container style={{backgroundColor: '#cee', paddingTop: 40, paddingBottom: 40}} >
      <Grid justify='center' container spacing={3} >
          {posts.map(post => (
            <Grid key={post._id} className={classes.card} item>
              <PostCard link={{
                pathname: `${match.path}/post/${post._id}`,
                state: { from: location },
              }} onDeletePost={() => deletePost(post._id)}  post={post}/>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default  withRouter(PostList);
