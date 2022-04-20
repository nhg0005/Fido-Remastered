/**
 * Fido
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './pages/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
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
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="+"
                color="#fff"
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
