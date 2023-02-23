import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/MaterialIcons';

import RollDicesScreen from './src/screens/RollDicesScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName = route.name === 'Dices' ? 'casino' : 'settings';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Dices"
          component={RollDicesScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen name="Settings" component={RollDicesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
