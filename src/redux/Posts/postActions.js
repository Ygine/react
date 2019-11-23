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

  DELETE_POST: 'DELETE_POST',
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
