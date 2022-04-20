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
  SectionList,
  ListItem,
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
      <ScrollView style={{padding: 20}}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={({section: {title}}) => (
            <Text style={textStyles.sectionHeader}>{title}</Text>
          )}
          renderItem={({item}) => <Item title={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

// Dummy data
const DATA = [
  {
    title: 'To do',
    data: ['Make doc appt', 'Get more dog food'],
  },
  {
    title: 'Meals',
    data: ['Lunch', 'Dinner', 'Denta-stix'],
  },
  {
    title: 'Walks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Medication',
    data: ['Heart worm prevention', 'Flea and tick prevention'],
  },
  {
    title: 'Appointments',
    data: ['Annual check up'],
  },
];

const Item = ({title}) => (
  <View style={containerStyles.listItem}>
    <Text style={textStyles.listItem}>{title}</Text>
  </View>
);

const containerStyles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#5C6EA2',
  },
  listItem: {
    backgroundColor: 'rgba(194, 199, 197, 0.5)',
    borderRadius: 7,
    height: 50,
    marginVertical: 10,
    justifyContent: 'center',
  },
});

const textStyles = StyleSheet.create({
  sectionHeader: {
    fontSize: 22,
    color: '#C2C7C5',
    fontWeight: '600',
    marginVertical: 5,
  },
  listItem: {
    fontSize: 17,
    marginHorizontal: 8,
  },
});

const buttonStyles = StyleSheet.create({});

export default App;
