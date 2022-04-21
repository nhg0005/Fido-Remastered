import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {UserDataContext} from '../context/UserDataContext';
import {Picker} from '@react-native-picker/picker';

/**************
 * Page
 **************/
export const MedicationOptions = () => {
  /* State Hooks */

  /* Lifecycle Hooks */

  return (
    <View style={containerStyles.newItemInput}>
      <Text style={textStyles.sectionHeader}>Name</Text>
      <TextInput
        style={containerStyles.listItem}
        returnKeyType="done"
        placeholder="Flea meds"
      />
      <Text style={textStyles.sectionHeader}>Date</Text>
      <Text style={textStyles.sectionHeader}>Frequency</Text>
    </View>
  );
};

/**************
 * Components
 **************/

/**************
 * Styling
 **************/
const containerStyles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#5C6EA2',
    paddingHorizontal: 20,
  },
  newItemInput: {marginTop: 20},
  listItem: {
    backgroundColor: 'rgba(194, 199, 197, 0.5)',
    borderRadius: 10,
    height: 50,
    marginVertical: 10,
    justifyContent: 'center',
    fontSize: 17,
    paddingHorizontal: 8,
    color: '#32292F',
    fontWeight: '500',
  },
});

const textStyles = StyleSheet.create({
  sectionHeader: {
    fontSize: 24,
    color: '#C2C7C5',
    fontWeight: '600',
    marginVertical: 5,
    marginHorizontal: 8,
  },
  pickerItem: {
    color: 'white',
  },
});

const buttonStyles = StyleSheet.create({});
