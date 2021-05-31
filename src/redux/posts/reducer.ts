import { IPostsState, PostsActions, PostsActionTypes, LoadingState } from './types';

const initialState: IPostsState = {
  posts: [],
  loading: LoadingState.NEVER,
};

export const postsReducer = (state = initialState, action: PostsActions): IPostsState => {
  switch (action.type) {
    case PostsActionTypes.FETCH_POSTS: {
      return {
        ...state,
        loading: LoadingState.LOADING,
      };
    }

    case PostsActionTypes.SET_POSTS: {
      return {
        ...state,
        posts: action.payload,
        loading: LoadingState.LOADED,
      };
    }

    case PostsActionTypes.SET_LOADING_STATE: {
      return {
        ...state,
        loading: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
