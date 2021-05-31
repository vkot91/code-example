import { LoadingState, PostsActionTypes } from '../types';
import * as actions from '../actions';
import { POSTS } from './mock';

describe('actions', () => {
  it('should create an action and fetch posts', () => {
    const expectedAction = {
      type: PostsActionTypes.FETCH_POSTS,
    };

    expect(actions.fetchPosts()).toEqual(expectedAction);
  });

  it('should create an action to set posts', () => {
    const posts = POSTS.data;

    const expectedAction = {
      type: PostsActionTypes.SET_POSTS,
      payload: posts,
    };

    expect(actions.setPosts(posts)).toEqual(expectedAction);
  });

  it('should create an action to set loading state to loaded', () => {
    const loadingState = 'LOADED';

    const expectedAction = {
      type: PostsActionTypes.SET_LOADING_STATE,
      payload: loadingState,
    };

    expect(actions.setLoadingState(LoadingState.LOADED)).toEqual(expectedAction);
  });

  it('should create an action to remove post', () => {
    const id = 1;

    const expectedAction = {
      type: PostsActionTypes.REMOVE_POST,
      payload: id,
    };

    expect(actions.removePost(id)).toEqual(expectedAction);
  });

  it('should create an action to edit post', () => {
    const post = POSTS.data[0];

    const expectedAction = {
      type: PostsActionTypes.EDIT_POST,
      payload: post,
    };

    expect(actions.editPost(post)).toEqual(expectedAction);
  });
});
