import { LoadingState, PostsActions, PostsActionTypes } from './../types';
import { postsReducer } from '../reducer';
import { POSTS } from './mock';

describe('posts reducer', () => {
  it('should return the initial state', () => {
    expect(postsReducer(undefined, {} as PostsActions)).toEqual({
      posts: [],
      loading: LoadingState.NEVER,
    });
  });

  it('should handle FETCH_POSTS', () => {
    expect(
      postsReducer([] as never, {
        type: PostsActionTypes.FETCH_POSTS,
      })
    ).toEqual({
      loading: LoadingState.LOADING,
    });
  });

  it('should handle SET_POSTS', () => {
    const posts = POSTS.data;

    expect(
      postsReducer([] as never, {
        type: PostsActionTypes.SET_POSTS,
        payload: posts,
      })
    ).toEqual({
      posts,
      loading: LoadingState.LOADED,
    });
  });

  it('should handle SET_LOADING_STATE', () => {
    const loading = 'LOADED';

    expect(
      postsReducer([] as never, {
        type: PostsActionTypes.SET_LOADING_STATE,
        payload: LoadingState.LOADED,
      })
    ).toEqual({
      loading,
    });
  });
});
