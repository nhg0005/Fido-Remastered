import React, {useContext, useEffect, useState, useLayoutEffect} from 'react';
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
import DateTimePicker from '@react-native-community/datetimepicker';

/**************
 * Page
 **************/
export const EditItemModal = ({route, navigation}) => {
  /* State Hooks */
  const {dummyData, setDummyData} = useContext(UserDataContext);
  const [selectedList, setSelectedList] = useState('To do');

  // Props from navigation.navigate
  const {title, date, sectionTitle} = route.params;

  const [editedNote, setEditedNote] = useState(title);
  const [editedDate, setEditedDate] = useState(date);
  const [editedFrequency, setEditedFrequency] = useState();
  const [editedWantsNotification, setEditedWantsNotification] = useState();

  /* Lifecycle Hooks */
  useEffect(() => {}, [dummyData]);

  // Adds new item header button to call modal
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => console.log('TODO: Edit function')}>
          <Text style={{color: '#fff', fontSize: 18}}>Edit</Text>
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={{color: '#fff', fontSize: 18}}>Cancel</Text>
        </TouchableOpacity>
      ),
    });

    // TODO: 'Add' button handler
    const addListItem = () => {
      // If 'To do' is selected
      if (selectedList === 'To do') {
        // Make a copy of dummyData
        const updatedData = [...dummyData];
        // Replace the object in copy
        let obj = updatedData.find((o, i) => {
          if (o.title === 'To do') {
            updatedData[i] = {
              title: o.title,
              data: [...o.data, {item: newNote, date: newDate}],
            };
            return true;
          }
        });
        // Set copy to state
        setDummyData(updatedData);
      } else if (selectedList === 'Meals') {
        // Make a copy of dummyData
        const updatedData = [...dummyData];
        // Replace the object in copy
        let obj = updatedData.find((o, i) => {
          if (o.title === 'Meals') {
            updatedData[i] = {
              title: o.title,
              data: [...o.data, {item: newNote, date: newDate}],
            };
            return true;
          }
        });
        // Set copy to state
        setDummyData(updatedData);
      } else if (selectedList === 'Walks') {
        // Make a copy of dummyData
        const updatedData = [...dummyData];
        // Replace the object in copy
        let obj = updatedData.find((o, i) => {
          if (o.title === 'Walks') {
            updatedData[i] = {
              title: o.title,
              data: [...o.data, {date: newDate}],
            };
            return true;
          }
        });
        // Set copy to state
        setDummyData(updatedData);
      } else if (selectedList === 'Medication') {
        // Make a copy of dummyData
        const updatedData = [...dummyData];
        // Replace the object in copy
        let obj = updatedData.find((o, i) => {
          if (o.title === 'Medication') {
            updatedData[i] = {
              title: o.title,
              data: [
                ...o.data,
                {item: newNote, date: newDate, frequency: frequency},
              ],
            };
            return true;
          }
        });
        // Set copy to state
        setDummyData(updatedData);
      } else if (selectedList === 'Appointments') {
        // Make a copy of dummyData
        const updatedData = [...dummyData];
        // Replace the object in copy
        let obj = updatedData.find((o, i) => {
          if (o.title === 'Appointments') {
            updatedData[i] = {
              title: o.title,
              data: [...o.data, {item: newNote, date: newDate}],
            };
            return true;
          }
        });
        // Set copy to state
        setDummyData(updatedData);
      } else {
        console.log('Wat');
      }

      // Dismiss the modal
      return navigation.navigate('Home');
    };
  }, []);

  /* Handlers */

  return (
    <KeyboardAvoidingView
      behavior="position"
      enabled
      style={containerStyles.main}>
      {sectionTitle === 'To do' && (
        <ToDoOptions
          newNote={editedNote}
          setNewNote={setEditedNote}
          newDate={editedDate}
          setNewDate={setEditedDate}
          wantsNotification={editedWantsNotification}
          setWantsNotification={setEditedWantsNotification}
        />
      )}
      {sectionTitle === 'Meals' && (
        <MealOptions
          newNote={editedNote}
          setNewNote={setEditedNote}
          newDate={editedDate}
          setNewDate={setEditedDate}
          wantsNotification={editedWantsNotification}
          setWantsNotification={setEditedWantsNotification}
        />
      )}
      {sectionTitle === 'Walks' && (
        <WalkOptions
          newDate={editedDate}
          setNewDate={setEditedDate}
          wantsNotification={editedWantsNotification}
          setWantsNotification={setEditedWantsNotification}
        />
      )}
      {sectionTitle === 'Medication' && (
        <MedicationOptions
          newNote={editedNote}
          setNewNote={setEditedNote}
          newDate={editedDate}
          setNewDate={setEditedDate}
          wantsNotification={editedWantsNotification}
          setWantsNotification={setEditedWantsNotification}
          frequency={editedFrequency}
          setFrequency={setEditedFrequency}
        />
      )}
      {sectionTitle === 'Appointments' && (
        <AppointmentOptions
          newNote={editedNote}
          setNewNote={setEditedNote}
          newDate={editedDate}
          setNewDate={setEditedDate}
          wantsNotification={editedWantsNotification}
          setWantsNotification={setEditedWantsNotification}
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
