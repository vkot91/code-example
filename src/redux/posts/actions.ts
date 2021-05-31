import { IPost } from 'src/types';
import {
  PostsActionTypes,
  IPostsState,
  IRemovePost,
  ISetPosts,
  IFetchPosts,
  IEditPost,
  ISetLoadingState,
} from './types';

export const fetchPosts = (): IFetchPosts => ({
  type: PostsActionTypes.FETCH_POSTS,
});

export const setPosts = (payload: IPostsState['posts']): ISetPosts => ({
  type: PostsActionTypes.SET_POSTS,
  payload,
});

export const removePost = (payload: IPost['id']): IRemovePost => ({
  type: PostsActionTypes.REMOVE_POST,
  payload,
});

export const editPost = (payload: IPost): IEditPost => ({
  type: PostsActionTypes.EDIT_POST,
  payload,
});

export const setLoadingState = (payload: IPostsState['loading']): ISetLoadingState => ({
  type: PostsActionTypes.SET_LOADING_STATE,
  payload,
});
