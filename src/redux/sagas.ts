import { fork } from 'redux-saga/effects';
import { watchPosts } from './posts/sagas';

export default function* rootSaga(): Generator {
  yield fork(watchPosts);
}
