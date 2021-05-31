import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';

import { schema } from 'utils/validation/editPost';

import { PostEditFormInputs, PostEditFormProps } from './types';
import { editPost } from 'store/posts/actions';

import { Input } from 'components/common/Input';
import { Button } from 'components/common/Button';

const PostEditForm: React.FC<PostEditFormProps> = ({
  id,
  title,
  body,
  userId,
  closeModal,
}: PostEditFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title,
      body,
      userId,
    },
    mode: 'onBlur',
  });

  const dispatch = useDispatch();

  const onSubmit = (data: PostEditFormInputs) => {
    dispatch(editPost({ id, ...data }));
    closeModal();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <Input
        error={errors.title?.message}
        label="Title"
        id="title"
        type="text"
        name="title"
        ref={register}
      />
      <Input
        error={errors.body?.message}
        label="Body"
        id="body"
        type="text"
        name="body"
        ref={register}
      />
      <Input
        error={errors.userId?.message}
        label="User ID"
        id="userId"
        type="text"
        name="userId"
        ref={register}
      />
      <Button text="Confirm" role="main" />
    </form>
  );
};

export default PostEditForm;
