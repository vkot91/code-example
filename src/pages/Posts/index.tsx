import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppStateType } from 'src/types';
import { fetchPosts } from 'store/posts/actions';
import { LoadingState } from 'store/posts/types';

import Post from 'components/Post';
import { Spinner } from 'common/Spinner';

export const Posts: React.FC = () => {
  const { posts, loading } = useSelector((state: AppStateType) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (loading === LoadingState.LOADING) {
    return <Spinner />;
  }

  if (loading === LoadingState.ERROR) {
    return <div>Error. Try again later</div>;
  }

  return (
    <div className="posts">
      <div className="posts__title">Posts (Click on item to show content)</div>
      <ul className="posts__list">
        {posts.map((item) => (
          <Post key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};
