/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/MaterialIcons';

import IIconsMap from './src/interfaces/IIconsMap';

import RollDicesScreen from './src/screens/RollDicesScreen';
import CreateCharacterScreen from './src/screens/CreateCharacterScreen';

const Tab = createBottomTabNavigator();

const iconsMap: IIconsMap = {
  Dices: 'casino',
  CreateCharacter: 'person',
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            return (
              <Ionicons name={iconsMap[route.name]} size={size} color={color} />
            );
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Dices"
          component={RollDicesScreen}
          options={{title: 'Dices'}}
        />
        <Tab.Screen
          name="CreateCharacter"
          component={CreateCharacterScreen}
          options={{title: 'Create Character'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
