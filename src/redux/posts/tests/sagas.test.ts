import { setLoadingState } from './../actions';
import { LoadingState, PostsActionTypes } from './../types';
import { runSaga } from 'redux-saga';
import { takeEvery } from '@redux-saga/core/effects';

import * as requests from 'services/api/requests';

import { onDeletePost, onEditPost, onLoadPosts, watchPosts } from '../sagas';
import { POSTS } from './mock';
import { setPosts } from '../actions';

describe('posts sagas', () => {
  const genObject = watchPosts();

  it('should wait for every FETCH_POSTS action and call watchPosts', () => {
    expect(genObject.next().value).toEqual(takeEvery('FETCH_POSTS', onLoadPosts));
  });

  it('should wait for every REMOVE_POST action and call watchPosts', () => {
    expect(genObject.next().value).toEqual(takeEvery('REMOVE_POST', onDeletePost));
  });

  it('should wait for every EDIT_POST action and call watchPosts', () => {
    expect(genObject.next().value).toEqual(takeEvery('EDIT_POST', onEditPost));
  });

  it('should call api and dispatch SET_POSTS action', async () => {
    const getAllPostsRequest = jest
      .spyOn(requests, 'getPostsRequest')
      .mockResolvedValue(POSTS as never);

    const dispatched: string[] = [];

    await runSaga(
      {
        dispatch: (action: string) => dispatched.push(action),
      },
      onLoadPosts
    );

    expect(getAllPostsRequest).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([setPosts(POSTS.data)]);
    getAllPostsRequest.mockClear();
  });

  it('should call api and SET_LOADING_STATE to error action', async () => {
    const getAllCoursesRequest = jest
      .spyOn(requests, 'getPostsRequest')
      .mockImplementation(() => Promise.reject());

    const dispatched: string[] = [];

    await runSaga(
      {
        dispatch: (action: string) => dispatched.push(action),
      },
      onLoadPosts
    );

    expect(getAllCoursesRequest).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([setLoadingState(LoadingState.ERROR)]);
    getAllCoursesRequest.mockClear();
  });

  it('should call api and DELETE_POST action and load posts', async () => {
    const deletePostRequest = jest.spyOn(requests, 'deletePostRequest');

    const getAllPostsRequest = jest
      .spyOn(requests, 'getPostsRequest')
      .mockResolvedValue(POSTS as never);

    const dispatched: string[] = [];

    await runSaga(
      {
        dispatch: (action: string) => dispatched.push(action),
      },
      onDeletePost,
      {
        payload: 1,
        type: PostsActionTypes.REMOVE_POST,
      }
    );

    await runSaga(
      {
        dispatch: (action: string) => dispatched.push(action),
      },
      onLoadPosts
    );

    expect(deletePostRequest).toHaveBeenCalledTimes(1);
    expect(getAllPostsRequest).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([setPosts(POSTS.data)]);
    deletePostRequest.mockClear();
    getAllPostsRequest.mockClear();
  });

  it('should call api and DELETE_POST and SET_LOADING_STATE to error action', async () => {
    const deletePostRequest = jest
      .spyOn(requests, 'deletePostRequest')
      .mockImplementation(() => Promise.reject());

    const dispatched: string[] = [];

    await runSaga(
      {
        dispatch: (action: string) => dispatched.push(action),
      },
      onDeletePost,
      {
        payload: 1,
        type: PostsActionTypes.REMOVE_POST,
      }
    );

    expect(deletePostRequest).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([setLoadingState(LoadingState.ERROR)]);
    deletePostRequest.mockClear();
  });
});
