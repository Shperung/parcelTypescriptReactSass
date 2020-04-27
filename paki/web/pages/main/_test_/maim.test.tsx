import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import {createMemoryHistory} from 'history';

const history = createMemoryHistory('/');
import create from '../../../../redux/store.test';

import MainPage from '../main.page';

it('Main page', () => {
  const store = create();
  const snap = renderer
    .create(
      <Provider store={store}>
        <Router history={history}>
          <MainPage />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(snap).toMatchSnapshot();
});
