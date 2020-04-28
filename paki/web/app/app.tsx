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

class App extends React.Component {
  state = {hasError: false};

  static getDerivedStateFromError(error) {
    // Оновлюємо стан, щоб наступний рендер показав запасний UI.

    return {hasError: true};
  }

  componentDidCatch(error, errorInfo) {
    // Ви також можете передати помилку в службу звітування про помилки
    // TODO
    //logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Ви можете відрендерити будь-який власний запасний UI
      return <h1>Something went wrong.</h1>;
    }

    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/admin" component={AdminPage} />
        </Router>
      </Provider>
    );
  }
}

export default App;
