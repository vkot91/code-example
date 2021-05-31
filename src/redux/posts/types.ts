import { Action } from 'redux';
import { IPost } from 'src/types';

export enum PostsActionTypes {
  FETCH_POSTS = 'FETCH_POSTS',
  SET_POSTS = 'SET_POSTS',
  REMOVE_POST = 'REMOVE_POST',
  EDIT_POST = 'EDIT_POST',
  SET_LOADING_STATE = 'SET_LOADING_STATE',
}

export enum LoadingState {
  NEVER = 'NEVER',
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  ERROR = 'ERROR',
}

export interface IPostsState {
  posts: IPost[];
  loading: LoadingState;
}

export interface IFetchPosts extends Action<PostsActionTypes> {
  type: PostsActionTypes.FETCH_POSTS;
}

export interface ISetPosts extends Action<PostsActionTypes> {
  type: PostsActionTypes.SET_POSTS;
  payload: IPostsState['posts'];
}

export interface IRemovePost extends Action<PostsActionTypes> {
  type: PostsActionTypes.REMOVE_POST;
  payload: IPost['id'];
}

export interface IEditPost extends Action<PostsActionTypes> {
  type: PostsActionTypes.EDIT_POST;
  payload: IPost;
}

export interface ISetLoadingState extends Action<PostsActionTypes> {
  type: PostsActionTypes.SET_LOADING_STATE;
  payload: LoadingState;
}

export type PostsActions = IFetchPosts | ISetPosts | ISetLoadingState | IRemovePost | IEditPost;
