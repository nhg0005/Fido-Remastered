import React, {useContext, useEffect, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  SectionList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  View,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {UserDataContext} from '../context/UserDataContext';
import {Picker} from '@react-native-picker/picker';
import {ToDoOptions} from '../components/ToDoOptions';
import {MealOptions} from '../components/MealOptions';
import {WalkOptions} from '../components/WalkOptions';
import {MedicationOptions} from '../components/MedicationOptions';
import {AppointmentOptions} from '../components/AppointmentOptions';

/**************
 * Page
 **************/
export const NewItemModal = () => {
  /* State Hooks */
  //   const {dummyData} = useContext(UserDataContext);
  const [selectedList, setSelectedList] = useState('To do');

  const [newNote, setNewNote] = useState('');
  const [newDate, setNewDate] = useState(new Date());
  const [frequency, setFrequency] = useState();
  const [wantsNotification, setWantsNotification] = useState();

  /* Lifecycle Hooks */
  //   useEffect(() => {}, [dummyData]);

  /* Handlers */
  // TODO: Input handler

  // TOOD: 'Add' button handler

  // TODO: Add a 'cancel' and an 'add' button to the headers
  return (
    <KeyboardAvoidingView
      behavior="position"
      enabled
      style={containerStyles.main}>
      <Text style={textStyles.sectionHeader}>Select a list</Text>
      <Picker
        selectedValue={selectedList}
        onValueChange={(itemValue, itemIndex) => setSelectedList(itemValue)}
        itemStyle={textStyles.pickerItem}>
        <Picker.Item label="To do" value="To do" />
        <Picker.Item label="Meals" value="Meals" />
        <Picker.Item label="Walks" value="Walks" />
        <Picker.Item label="Medication" value="Medication" />
        <Picker.Item label="Appointments" value="Appointments" />
      </Picker>
      {/* Display based on list selection */}
      {selectedList === 'To do' && (
        <ToDoOptions
          newNote={newNote}
          setNewNote={setNewNote}
          newDate={newDate}
          setNewDate={setNewDate}
          wantsNotification={wantsNotification}
          setWantsNotification={setWantsNotification}
        />
      )}
      {selectedList === 'Meals' && (
        <MealOptions
          newNote={newNote}
          setNewNote={setNewNote}
          newDate={newDate}
          setNewDate={setNewDate}
          wantsNotification={wantsNotification}
          setWantsNotification={setWantsNotification}
        />
      )}
      {selectedList === 'Walks' && (
        <WalkOptions
          newDate={newDate}
          setNewDate={setNewDate}
          wantsNotification={wantsNotification}
          setWantsNotification={setWantsNotification}
        />
      )}
      {selectedList === 'Medication' && (
        <MedicationOptions
          newNote={newNote}
          setNewNote={setNewNote}
          newDate={newDate}
          setNewDate={setNewDate}
          wantsNotification={wantsNotification}
          setWantsNotification={setWantsNotification}
          frequency={frequency}
          setFrequency={setFrequency}
        />
      )}
      {selectedList === 'Appointments' && (
        <AppointmentOptions
          newNote={newNote}
          setNewNote={setNewNote}
          newDate={newDate}
          setNewDate={setNewDate}
          wantsNotification={wantsNotification}
          setWantsNotification={setWantsNotification}
        />
      )}
    </KeyboardAvoidingView>
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
