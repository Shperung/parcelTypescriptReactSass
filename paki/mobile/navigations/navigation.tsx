import * as React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';

const Stack = createStackNavigator();

// actions
import {getData} from '../../frontend-core/actions/data.action';

// selectors
import {dataSelector} from '../../frontend-core/selectors/data.selector';

const MainScreen = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getData());
  }, []);

  const data = useSelector(dataSelector);

  return (
    <SafeAreaView>
      <Text>MainScreen</Text>
      {data.length ? (
        <View>
          {data.map(dataItem => (
            <Text key={dataItem.unique}>{dataItem.name}</Text>
          ))}
        </View>
      ) : null}
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
