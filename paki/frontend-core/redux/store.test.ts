import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import defaultReducers from '../reducers/default.reducer';

export const fullState = {
  data: [
    {
      id: 1,
      unique: 'unique1',
      name: 'name1',
    },
    {
      id: 2,
      unique: 'unique2',
      name: 'name2',
    },
    {
      id: 3,
      unique: 'unique3',
      name: 'name3',
    },
    {
      id: 4,
      unique: 'unique4',
      name: 'name4',
    },
  ],
};

function create(state = {}) {
  return createStore(defaultReducers, {
    ...fullState,
    ...state,
  });
}

it('Should create correct store object', () => {
  const store = create();
  expect(typeof store.getState).toEqual('function');
});

export default create;
