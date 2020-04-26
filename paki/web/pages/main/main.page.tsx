import * as React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

// actions
import {getData} from '../../../actions/data.action';

// components
import Button from '../../components/button/button';

const MainPage = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <section>
      <h1>MainPage 1</h1>
      <Link to="/admin">admin2</Link>
      <Button cancel> dich </Button>
    </section>
  );
};

export default MainPage;
