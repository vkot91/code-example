import { IPost } from 'src/types';

export interface PostEditFormInputs {
  title: string;
  body: string;
  userId: number;
}
export interface PostEditFormProps extends IPost {
  closeModal: () => void;
}
