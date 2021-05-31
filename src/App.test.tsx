import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { App } from './App';

import { createStore } from 'redux';
import { rootReducer } from './redux/reducer';

describe('App', () => {
  let store: any;

  beforeEach(() => {
    store = createStore(rootReducer);
  });

  it('should render without crashed', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
