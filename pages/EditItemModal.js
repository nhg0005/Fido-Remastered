import React, {useContext, useEffect, useState, useLayoutEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  SectionList,
  Pressable,
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
import PushNotificationIOS from '@react-native-community/push-notification-ios';

/**************
 * Page
 **************/
export const EditItemModal = ({route, navigation}) => {
  /* State Hooks */
  const {dummyData, setDummyData} = useContext(UserDataContext);
  //   const [selectedList, setSelectedList] = useState('To do');

  // Props from navigation.navigate
  const {title, date, sectionTitle} = route.params;

  const [editedNote, setEditedNote] = useState(title);
  const [editedDate, setEditedDate] = useState(date);
  const [editedFrequency, setEditedFrequency] = useState();
  const [editedWantsNotification, setEditedWantsNotification] = useState(false);

  /* Lifecycle Hooks */
  useEffect(() => {}, [dummyData]);

  // Adds new item header button to call modal
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => editListItem()}>
          <Text style={{color: '#fff', fontSize: 18}}>Edit</Text>
        </Pressable>
      ),
      headerLeft: () => (
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Text style={{color: '#fff', fontSize: 18}}>Cancel</Text>
        </Pressable>
      ),
    });

    // 'Edit' button handler
    const editListItem = () => {
      // If 'To do' is selected
      if (sectionTitle === 'To do') {
        // Make a copy of dummyData
        const editedData = [...dummyData];
        // Replace the object in copy
        let obj = editedData.find((o, i) => {
          if (o.title === 'To do') {
            // Search the data object to find the object that's being edited, matched by 'item'
            let edObj = o.data.find((p, j) => {
              if (p.item === title) {
                // Edit the found object
                o.data[j] = {item: editedNote, date: editedDate};
                return true;
              }
            });
          }
        });
        // Set copy to state
        setDummyData(editedData);

        // Remove existing notification
        PushNotificationIOS.removePendingNotificationRequests([title]);
        // Check if local notification is wanted
        console.log(editedWantsNotification);
        if (editedWantsNotification === true) {
          PushNotificationIOS.addNotificationRequest({
            id: editedNote,
            title: 'Fido',
            subtitle: sectionTitle + ' reminder',
            body: editedNote,
            fireDate: editedDate,
          });
        }
      } // If 'Meals' is selected
      else if (sectionTitle === 'Meals') {
        // Make a copy of dummyData
        const editedData = [...dummyData];
        // Replace the object in copy
        let obj = editedData.find((o, i) => {
          if (o.title === 'Meals') {
            // Search the data object to find the object that's being edited, matched by 'item'
            let edObj = o.data.find((p, j) => {
              if (p.item === title) {
                // Edit the found object
                o.data[j] = {item: editedNote, date: editedDate};
                return true;
              }
            });
          }
        });
        // Set copy to state
        setDummyData(editedData);

        // Remove existing notification
        PushNotificationIOS.removePendingNotificationRequests([title]);
        // Check if local notification is wanted
        console.log(editedWantsNotification);
        if (editedWantsNotification === true) {
          PushNotificationIOS.addNotificationRequest({
            id: editedNote,
            title: 'Fido',
            subtitle: sectionTitle + ' reminder',
            body: editedNote,
            fireDate: editedDate,
            repeats: true,
            repeatsComponent: {
              hour: true,
              minute: true,
            },
          });
        }
      } // If 'Walks' is selected
      else if (sectionTitle === 'Walks') {
        // Make a copy of dummyData
        const editedData = [...dummyData];
        // Replace the object in copy
        let obj = editedData.find((o, i) => {
          if (o.title === 'Walks') {
            // Search the data object to find the object that's being edited, matched by 'item'
            let edObj = o.data.find((p, j) => {
              if (p.item === title) {
                // Edit the found object
                o.data[j] = {item: editedNote, date: editedDate};
                return true;
              }
            });
          }
        });
        // Set copy to state
        setDummyData(editedData);

        // Remove existing notification
        PushNotificationIOS.removePendingNotificationRequests([
          date.toISOString(),
        ]);
        // Check if local notification is wanted
        console.log(editedWantsNotification);
        if (editedWantsNotification === true) {
          PushNotificationIOS.addNotificationRequest({
            id: editedDate.toISOString(),
            title: 'Fido',
            subtitle: sectionTitle + ' reminder',
            // body: editedNote,
            fireDate: editedDate,
            repeats: true,
            repeatsComponent: {
              hour: true,
              minute: true,
            },
          });
        }
      } // If 'Medication' is selected
      else if (sectionTitle === 'Medication') {
        // Make a copy of dummyData
        const editedData = [...dummyData];
        // Replace the object in copy
        let obj = editedData.find((o, i) => {
          if (o.title === 'Medication') {
            // Search the data object to find the object that's being edited, matched by 'item'
            let edObj = o.data.find((p, j) => {
              if (p.item === title) {
                // Edit the found object
                o.data[j] = {
                  item: editedNote,
                  date: editedDate,
                  frequency: editedFrequency,
                };
                return true;
              }
            });
          }
        });
        // Set copy to state
        setDummyData(editedData);

        // Remove existing notification
        PushNotificationIOS.removePendingNotificationRequests([title]);
        // Check if local notification is wanted
        console.log(editedWantsNotification);
        if (editedWantsNotification === true) {
          PushNotificationIOS.addNotificationRequest({
            id: editedNote,
            title: 'Fido',
            subtitle: sectionTitle + ' reminder',
            body: editedNote,
            fireDate: editedDate,
            repeats: true,
            repeatsComponent: {
              day: true,
              hour: true,
              minute: true,
            },
          });
        }
      } // If 'Appointments' is selected
      else if (sectionTitle === 'Appointments') {
        // Make a copy of dummyData
        const editedData = [...dummyData];
        // Replace the object in copy
        let obj = editedData.find((o, i) => {
          if (o.title === 'Appointments') {
            // Search the data object to find the object that's being edited, matched by 'item'
            let edObj = o.data.find((p, j) => {
              if (p.item === title) {
                // Edit the found object
                o.data[j] = {
                  item: editedNote,
                  date: editedDate,
                };
                return true;
              }
            });
          }
        });
        // Set copy to state
        setDummyData(editedData);

        // Remove existing notification
        PushNotificationIOS.removePendingNotificationRequests([title]);
        // Check if local notification is wanted
        console.log(editedWantsNotification);
        if (editedWantsNotification === true) {
          PushNotificationIOS.addNotificationRequest({
            id: editedNote,
            title: 'Fido',
            subtitle: sectionTitle + ' reminder',
            body: editedNote,
            fireDate: editedDate,
          });
        }
      } else {
        console.log('Wat');
      }

      // Dismiss the modal
      return navigation.navigate('Home');
    };
  }, [
    navigation,
    sectionTitle,
    editedNote,
    editedDate,
    editedFrequency,
    dummyData,
    setDummyData,
    title,
    editedWantsNotification,
    date,
  ]);

  /* Handlers */

  return (
    <View style={containerStyles.main}>
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
