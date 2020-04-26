import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// global store
import store from '../../store';

// pages
import MainPage from '../pages/main/main.page';
import AdminPage from '../pages/admin/admin.page';

// styles
import './app.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/admin" component={AdminPage} />
      </Router>
    </Provider>
  );
};

export default App;
