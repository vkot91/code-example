import { IPost } from 'src/types';
import { AxiosPromise } from 'axios';

import { POSTS, getPostById } from './endpoints';
import { axiosInstance } from './index';

export const getPostsRequest = async (): Promise<AxiosPromise<IPost[]>> =>
  await axiosInstance.get(POSTS);

export const deletePostRequest = async (id: number): Promise<AxiosPromise> =>
  await axiosInstance.delete(getPostById(id));

export const patchPostRequest = async (data: IPost): Promise<AxiosPromise> =>
  await axiosInstance.patch(getPostById(data.id), data);
