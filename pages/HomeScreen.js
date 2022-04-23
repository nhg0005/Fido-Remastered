import React, {useContext, useEffect, useLayoutEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  SectionList,
  Pressable,
  Alert,
} from 'react-native';
import {UserDataContext} from '../context/UserDataContext';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

/**************
 * Page
 **************/
export const HomeScreen = ({navigation}) => {
  /* State Hooks */
  const {dummyData} = useContext(UserDataContext);

  /* Lifecycle Hooks */
  // Adds new item header button to call modal
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => navigation.navigate('NewItemModal')}>
          <Text style={{color: '#fff', fontSize: 36}}>+</Text>
        </Pressable>
      ),
    });
  }, [navigation]);

  // Updates the data on screen
  useEffect(() => {}, [dummyData]);

  return (
    <SafeAreaView
      style={containerStyles.main}
      contentInsetAdjustmentBehavior="automatic">
      <StatusBar barStyle="light-content" />
      <SectionList
        style={{paddingHorizontal: 20}}
        sections={dummyData}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({section: {title, data}}) => {
          // Hide the section header if there is no data in the section
          if (data.length === 0) {
            return;
          }
          return <Text style={textStyles.sectionHeader}>{title}</Text>;
        }}
        renderItem={({item, section: {title}}) => (
          <Item
            title={item.item}
            date={item.date}
            sectionTitle={title}
            navigation={navigation}
          />
        )}
      />
    </SafeAreaView>
  );
};

/**************
 * Components
 **************/
const Item = ({title, date, sectionTitle, navigation}) => {
  const {dummyData, setDummyData} = useContext(UserDataContext);

  /* Functions */
  const dateToString = () => {
    switch (sectionTitle) {
      case 'To do':
        return date.toLocaleString([], {
          month: 'numeric',
          day: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
        });
      case 'Meals':
        return date.toLocaleString([], {
          hour: 'numeric',
          minute: '2-digit',
        });
      case 'Walks':
        return date.toLocaleString([], {
          hour: 'numeric',
          minute: '2-digit',
        });
      case 'Medication':
        return date.toLocaleString([], {
          month: 'numeric',
          day: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
        });
      case 'Appointments':
        return date.toLocaleString([], {
          month: 'numeric',
          day: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
        });
    }
    return date;
  };

  // Delete an item from a list
  const deleteListItem = () => {
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
              // o.data[j] = {item: editedNote, date: editedDate};
              o.data.splice(j, 1);
              return true;
            }
          });
        }
      });
      // Set copy to state
      setDummyData(editedData);

      // Remove existing notification
      PushNotificationIOS.removePendingNotificationRequests([title]);
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
              // o.data[j] = {item: editedNote, date: editedDate};
              o.data.splice(j, 1);
              return true;
            }
          });
        }
      });
      // Set copy to state
      setDummyData(editedData);

      // Remove existing notification
      PushNotificationIOS.removePendingNotificationRequests([title]);
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
              // o.data[j] = {item: editedNote, date: editedDate};
              o.data.splice(j, 1);
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
              // o.data[j] = {
              //   item: editedNote,
              //   date: editedDate,
              //   frequency: editedFrequency,
              // };
              o.data.splice(j, 1);
              return true;
            }
          });
        }
      });
      // Set copy to state
      setDummyData(editedData);

      // Remove existing notification
      PushNotificationIOS.removePendingNotificationRequests([title]);
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
              // o.data[j] = {
              //   item: editedNote,
              //   date: editedDate,
              // };
              o.data.splice(j, 1);
              return true;
            }
          });
        }
      });
      // Set copy to state
      setDummyData(editedData);

      // Remove existing notification
      PushNotificationIOS.removePendingNotificationRequests([title]);
    } else {
      console.log('Wat');
    }
  };

  const createLongPressAlert = () =>
    Alert.alert('Hello there!', 'Would you like to delete this item?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => deleteListItem()},
    ]);

  return (
    <Pressable
      style={containerStyles.listItem}
      onPress={() => {
        navigation.navigate('EditItemModal', {
          title: title,
          date: date,
          sectionTitle: sectionTitle,
        });
      }}
      onLongPress={() => createLongPressAlert()}>
      {/* Width used for making the ellipses work, along with numberOfLines and flex: 1 */}
      <Text style={[textStyles.listItem, {width: 200}]} numberOfLines={1}>
        {title}
      </Text>
      <Text style={textStyles.listItem}>{dateToString()}</Text>
    </Pressable>
  );
};

/**************
 * Styling
 **************/
const containerStyles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#5C6EA2',
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(194, 199, 197, 0.5)',
    borderRadius: 10,
    height: 50,
    marginVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
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
    fontSize: 15,
    marginHorizontal: 3,
    color: '#32292F',
    fontWeight: '500',
  },
});

const buttonStyles = StyleSheet.create({});
