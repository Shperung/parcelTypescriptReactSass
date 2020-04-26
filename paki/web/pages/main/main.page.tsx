import * as React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

// actions
import {getData} from '../../../actions/data.action';

// selectors
import {dataSelector} from '../../../selectors/data.selector';

// components
import Button from '../../components/button/button';

interface Data {
  id: number;
  unique: string;
  name: string;
}

const MainPage = () => {
  const dispatch = useDispatch();
  const data = useSelector(dataSelector);

  React.useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <section>
      <h1>MainPage 1</h1>
      <Link to="/admin">admin2</Link>
      <ul>
        {data.length &&
          data.map((dataItem: Data) => (
            <li key={dataItem.unique}>{dataItem.name}</li>
          ))}
      </ul>
    </section>
  );
};

export default MainPage;
