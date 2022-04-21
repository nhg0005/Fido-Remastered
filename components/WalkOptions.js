import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {UserDataContext} from '../context/UserDataContext';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

/**************
 * Page
 **************/
export const WalkOptions = ({
  newDate,
  setNewDate,
  wantsNotification,
  setWantsNotification,
}) => {
  /* State Hooks */

  /* Lifecycle Hooks */

  /* Functions */
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setNewDate(currentDate);
  };

  return (
    <View style={containerStyles.newItemInput}>
      {/* Time */}
      <Text style={textStyles.sectionHeader}>Time</Text>
      <TouchableOpacity style={containerStyles.listItem}>
        <DateTimePicker
          testID="dateTimePicker"
          value={newDate}
          mode={'time'}
          is24Hour={true}
          onChange={onChange}
        />
      </TouchableOpacity>
      {/* Wants notif? */}
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
