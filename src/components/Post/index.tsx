import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { IPost } from 'src/types';
import { useModal } from 'hooks/useModal';
import { removePost } from 'store/posts/actions';

import { EDIT, REMOVE, SHOW } from 'constants/index';

import PostEditForm from './EditForm';
import { Button } from 'components/common/Button';

const Post: React.FC<IPost> = (props: IPost) => {
  const [action, setAction] = useState<string>('');

  const { id, title, body, userId } = props;

  const dispatch = useDispatch();

  const { showModal, RenderModal, hideModal } = useModal();

  const openRemoveModal = () => {
    setAction(REMOVE);
    showModal();
  };

  const openEditModal = () => {
    setAction(EDIT);
    showModal();
  };

  const showPostContent = () => {
    setAction(SHOW);
    showModal();
  };

  const onRemovePost = () => {
    dispatch(removePost(id));
  };

  return (
    <>
      <li className="post">
        <div className="post__title" data-testid="post__title" onClick={showPostContent}>
          {id}. {title}
        </div>
      </li>
      {action === SHOW && (
        <RenderModal>
          <>
            <div className="post__title">
              {id}. {title}
            </div>
            <div className="post__body">{body}</div>
            <div className="post__userId">Created by (user_id): {userId}</div>
            <div className="post__buttons">
              <Button text="Edit" role="main" onClickFunc={openEditModal} />
              <Button text="Delete" role="delete" onClickFunc={openRemoveModal} />
            </div>
          </>
        </RenderModal>
      )}
      {action === REMOVE && (
        <RenderModal>
          <>
            <div className="post__back" onClick={showPostContent}>
              Go Back
            </div>
            <div className="modal__text">You really wand to delete post by id:{id}?</div>
            <div className="modal__buttons">
              <Button text="Confirm" role="delete" onClickFunc={onRemovePost} />
              <Button text="Cancel" role="main" onClickFunc={hideModal} />
            </div>
          </>
        </RenderModal>
      )}
      {action === EDIT && (
        <RenderModal>
          <>
            <div className="post__back" onClick={showPostContent}>
              Go Back
            </div>
            <PostEditForm {...props} closeModal={hideModal} />
          </>
        </RenderModal>
      )}
    </>
  );
};

export default Post;
