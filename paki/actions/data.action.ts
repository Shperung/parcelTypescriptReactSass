import {fetchApi} from './fetch-api';

/* GET data*/
export const getData = () => {
  const URL = '/api/data';

  return dispatch => {
    dispatch({
      type: 'GET_DATA_START',
    });
    return fetchApi(URL, 'GET', null)
      .then(([res, data]) => {
        if (res.status === 200) {
          dispatch({
            type: 'GET_DATA',
            payload: data,
          });
        } else {
          console.error('get /api/data status not 200');
          dispatch({
            type: 'GET_DATA_ERROR',
            payload: {
              message: 'data status not 200',
            },
          });
        }
      })
      .catch(error => {
        console.error('get /api/data catch', error);
        dispatch({
          type: 'GET_DATA_ERROR',
          payload: {
            message: error,
          },
        });
      });
  };
};
