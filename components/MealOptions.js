import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import {UserDataContext} from '../context/UserDataContext';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntIcon from 'react-native-vector-icons/Entypo';

/**************
 * Page
 **************/
export const MealOptions = ({
  newNote,
  setNewNote,
  newDate,
  setNewDate,
  wantsNotification,
  setWantsNotification,
}) => {
  /* State Hooks */

  /* Lifecycle Hooks */

  /* Functions */
  // DateTimePicker change handler
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setNewDate(currentDate);
  };

  return (
    <View style={containerStyles.newItemInput}>
      {/* Meal */}
      <Text style={textStyles.sectionHeader}>Meal</Text>
      <TextInput
        style={containerStyles.listItem}
        returnKeyType="done"
        placeholder="Lunch #3"
        value={newNote}
        onChangeText={setNewNote}
      />
      {/* Time */}
      <Text style={textStyles.sectionHeader}>Time</Text>
      <Pressable style={containerStyles.listItem}>
        <DateTimePicker
          testID="dateTimePicker"
          value={newDate}
          mode={'time'}
          is24Hour={true}
          onChange={onChange}
        />
      </Pressable>
      {/* TODO: Wants notif? */}
      <Pressable
        style={containerStyles.viewWithIcon}
        onPress={() => setWantsNotification(!wantsNotification)}>
        <Text style={textStyles.sectionHeader}>Want to be notified?</Text>
        {wantsNotification === true ? (
          <AntIcon name="checkcircle" size={30} color="rgb(194, 199, 197)" />
        ) : (
          <EntIcon name="circle" size={30} color="rgb(194, 199, 197)" />
        )}
      </Pressable>
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
  viewWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 8,
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
