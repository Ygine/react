export const ActionType = {
  FETCH_POSTS_START: 'FETCH_POSTS_START',
  FETCH_POSTS_SUCCESS: 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_ERROR: 'FETCH_POSTS_ERROR',

  DELETE_POST_START: 'DELETE_POST_START',
  DELETE_POST_SUCCESS: 'DELETE_POST_SUCCESS',
  DELETE_POST_ERROR: 'DELETE_POST_ERROR',

  ADD_POST_START: 'ADD_POST_START',
  ADD_POST_SUCCESS: 'ADD_POST_SUCCESS',
  ADD_POST_ERROR: 'ADD_POST_ERROR',

  UPDATE_POST_START: 'UPDATE_POST_START',
  UPDATE_POST_SUCCESS: 'UPDATE_POST_SUCCESS',
  UPDATE_POST_ERROR: 'UPDATE_POST_ERROR',

  FILTER_POST_START: 'FILTER_POST_START',
  // FILTER_POST_SUCCESS: 'FILTER_POST_SUCCESS',
  // FILTER_POST_ERROR: 'FILTER_POST_ERROR',

};

export const fetchPostsStart = () => ({
  type: ActionType.FETCH_POSTS_START,
});

export const fetchPostsSuccess = posts => ({
  type: ActionType.FETCH_POSTS_SUCCESS,
  payload: { posts }
});

export const fetchPostsError = error => ({
  type: ActionType.FETCH_POSTS_ERROR,
  payload: { error }
});

export const deletePostStart = (id) => ({
  type: ActionType.DELETE_POST_START,
  payload: {
    id
  }
});

export const deletePostSuccess = (id) => ({
  type: ActionType.DELETE_POST_SUCCESS,
  payload: { id }
});

export const deletePosError = error => ({
  type: ActionType.DELETE_POST_ERROR,
  payload: {
    error
  }
});

export const addPostStart = (postBody) => ({
  type: ActionType.ADD_POST_START,
  payload: {
    postBody
  }
});

export const addPostSuccess = post => ({
  type: ActionType.ADD_POST_SUCCESS,
  payload: { post }
});

export const addPostError = error => ({
  type: ActionType.ADD_POST_ERROR,
  payload: {
    error
  }
});


export const updatePostStart = (data, updatePostId) => ({
  type: ActionType.UPDATE_POST_START,
  payload: {
    data,
    updatePostId
  }
});

export const updatePostSuccess = post => ({
  type: ActionType.UPDATE_POST_SUCCESS,
  payload: { post }
});

export const updatePostError = error => ({
  type: ActionType.UPDATE_POST_ERROR,
  payload: {
    error
  }
});

export const filterPostStart = (query) => ({
  type: ActionType.FILTER_POST_START,
  payload: {
    query
  }
});

// export const filterPostSuccess = query => ({
//   type: ActionType.FILTER_POST_SUCCESS,
//   payload: { query }
// });
//
// export const filterPostError = error => ({
//   type: ActionType.FILTER_POST_ERROR,
//   payload: {
//     error
//   }
// });
