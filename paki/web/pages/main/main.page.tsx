import * as React from 'react';
import {Link} from 'react-router-dom';

// components
import Button from '../../components/button/button';

const MainPage = () => {
  return (
    <section>
      <h1>MainPage</h1>
      <Link to="/admin">admin2</Link>
      <Button cancel> dich </Button>
    </section>
  );
};

export default MainPage;
