/**
 * Fido
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './pages/HomeScreen';
import UserDataProvider from './context/UserDataContext';
import {NewItemModal} from './pages/NewItemModal';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <UserDataProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Fido',
              headerLargeTitle: true,
              headerLargeTitleStyle: {
                color: '#D1E3DD',
              },
              headerTitleStyle: {
                color: '#D1E3DD',
              },
              headerStyle: {
                backgroundColor: '#5C6EA2',
              },
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="NewItemModal"
            component={NewItemModal}
            options={{
              title: 'Add something to a list',
              headerTitleStyle: {
                color: '#D1E3DD',
              },
              headerStyle: {
                backgroundColor: '#5C6EA2',
              },
              headerShadowVisible: false,
              presentation: 'modal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserDataProvider>
  );
};

export default App;
