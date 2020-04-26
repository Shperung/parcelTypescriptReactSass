import Cookies from 'js-cookie';
// для симулятора ios + web http://localhost:3012
// для емулятора android http://10.0.2.2:3012

const fetchPath =
  process.env.NODE_ENV === 'production'
    ? 'http://localhost:3012'
    : 'http://localhost:3012';

const getToken = () => {
  const cookiesData = Cookies.get('userData');
  return cookiesData ? `Bearer ${JSON.parse(cookiesData).token}` : '';
};

export const fetchApi = (
  url: string,
  method: string = 'GET',
  data: Object | null,
) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: getToken(),
  };
  const path = `${fetchPath}${url}`;
  return fetch(path, {
    method,
    headers,
    ...(data && {body: JSON.stringify(data)}), // if not data - remove key
  }).then(response => Promise.all([response, response.json()]));
};
