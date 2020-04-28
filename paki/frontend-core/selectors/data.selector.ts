import {createSelector} from 'reselect';

export const dataSelector = createSelector(
  state => state.data,
  data => data,
);
