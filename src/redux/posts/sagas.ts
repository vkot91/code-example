import { call, put, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/types';

import { notify } from 'utils/toast';
import { IPost } from 'src/types';

import { getPostsRequest, deletePostRequest, patchPostRequest } from 'services/api/requests';
import { LoadingState, PostsActionTypes } from './types';
import { setPosts, setLoadingState } from './actions';

export function* onLoadPosts(): SagaIterator<void> {
  try {
    const { data } = yield call(getPostsRequest);

    yield put(setPosts(data));
  } catch {
    yield put(setLoadingState(LoadingState.ERROR));
  }
}

export function* onDeletePost({
  payload: id,
}: {
  payload: number;
  type: PostsActionTypes.REMOVE_POST;
}): SagaIterator<void> {
  try {
    yield call(deletePostRequest, id);
    yield call(onLoadPosts);
    notify('Post was successfully deleted');
  } catch (error) {
    yield put(setLoadingState(LoadingState.ERROR));
  }
}

export function* onEditPost({
  payload: post,
}: {
  payload: IPost;
  type: PostsActionTypes.EDIT_POST;
}): SagaIterator<void> {
  try {
    yield call(patchPostRequest, post);
    yield call(onLoadPosts);
    notify('Post was successfully updated');
  } catch (error) {
    yield put(setLoadingState(LoadingState.ERROR));
  }
}

export function* watchPosts(): SagaIterator<void> {
  yield takeEvery(PostsActionTypes.FETCH_POSTS, onLoadPosts);
  yield takeEvery(PostsActionTypes.REMOVE_POST, onDeletePost);
  yield takeEvery(PostsActionTypes.EDIT_POST, onEditPost);
}
