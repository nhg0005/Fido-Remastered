/**
 * Fido
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {Pressable, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './pages/HomeScreen';
import UserDataProvider from './context/UserDataContext';
import {NewItemModal} from './pages/NewItemModal';
import {EditItemModal} from './pages/EditItemModal';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

const Stack = createNativeStackNavigator();

const App = () => {
  ///////////// Notification setup /////////////
  // Set up notification permissions
  useEffect(() => {
    // Request permissions to display notifications
    PushNotificationIOS.requestPermissions({
      alert: true,
      badge: true,
      sound: true,
      critical: true,
    }).then(
      data => {
        console.log('PushNotificationIOS.requestPermissions succeeded:', data);
      },
      data => {
        console.log('PushNotificationIOS.requestPermissions failed.', data);
      },
    );

    return () => {
      // PushNotificationIOS.removeEventListener('localNotification');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <Stack.Screen
            name="EditItemModal"
            component={EditItemModal}
            options={{
              title: 'Edit',
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
