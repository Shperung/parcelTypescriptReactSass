import 'react-native-gesture-handler';
import * as React from 'react';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';

import store from './store';

// navigator
import Navigation from './mobile/navigations/navigation';

enableScreens();

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
