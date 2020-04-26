import * as React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch} from 'react-redux';

const Stack = createStackNavigator();

// actions
import {getData} from '../../actions/data.action';

const MainScreen = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <SafeAreaView>
      <Text>MainScreen</Text>
    </SafeAreaView>
  );
};

const MainNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Main" component={MainScreen} />
  </Stack.Navigator>
);

const Navigation = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
