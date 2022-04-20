/**
 * Fido
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={containerStyles.main}
      contentInsetAdjustmentBehavior="automatic">
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <Text>Ok</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const containerStyles = StyleSheet.create({
  main: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: '#5C6EA2',
  },
});

const buttonStyles = StyleSheet.create({});

const textStyles = StyleSheet.create({});

export default App;
