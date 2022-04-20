import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  SectionList,
  TouchableOpacity,
} from 'react-native';

/**************
 * Page
 **************/
export const HomeScreen = () => {
  return (
    <SafeAreaView
      style={containerStyles.main}
      contentInsetAdjustmentBehavior="automatic">
      <StatusBar barStyle="light-content" />
      <ScrollView style={{paddingHorizontal: 20}}>
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

/**************
 * Components
 **************/
// TODO: Add onPress and bring up a modal with the apporiate data for editing
const Item = ({title}) => (
  <TouchableOpacity style={containerStyles.listItem}>
    <Text style={textStyles.listItem}>{title}</Text>
  </TouchableOpacity>
);

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
    data: ['Morning', 'Evening'],
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

/**************
 * Styling
 **************/
const containerStyles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#5C6EA2',
  },
  listItem: {
    backgroundColor: 'rgba(194, 199, 197, 0.5)',
    borderRadius: 10,
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
    color: '#32292F',
    fontWeight: '500',
  },
});

const buttonStyles = StyleSheet.create({});
