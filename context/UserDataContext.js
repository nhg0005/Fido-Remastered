import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserDataContext = createContext(null);

const UserDataProvider = ({children}) => {
  /* Global state hooks */
  const [dummyData, setDummyData] = useState([
    {
      title: 'To do',
      data: [{item: 'Get more dog food', date: new Date()}],
    },
    {
      title: 'Meals',
      data: [
        {item: 'Lunch', date: new Date()},
        {item: 'Dinner', date: new Date()},
      ],
    },
    {
      title: 'Medication',
      data: [
        {item: 'Heart worm prevention', date: new Date()},
        {item: 'Flea and tick prevention', date: new Date()},
      ],
    },
    {
      title: 'Appointments',
      data: [{item: 'Annual check up', date: new Date()}],
    },
  ]);

  /* Lifecycle hooks for updating state */
  // Sets the user's preferences when the app launches
  useEffect(() => {
    // Set preferences on launch
    setPreferences();
  }, [setPreferences]);

  // Store the user's data upon each change in state
  useEffect(() => {
    storeData('user_data', dummyData);
  }, [dummyData]);

  // Async Storage Functions
  const storeData = async (key, value) => {
    try {
      const storageKey = '@' + key.toString();
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(storageKey, jsonValue);
      console.log('Storage successful');
    } catch (e) {
      // saving error
      console.error(e);
    }
  };

  const getData = async key => {
    try {
      const storageKey = '@' + key.toString();
      const jsonValue = await AsyncStorage.getItem(storageKey);
      console.log('Storage get successful');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      console.error(e);
    }
  };

  // Set preferences
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setPreferences = async () => {
    // Get user data and set it
    const userDataStorage = await getData('user_data');
    if (userDataStorage !== null) {
      // Make a copy of stored data
      const editedData = [...userDataStorage];
      // Search through each object
      let obj = editedData.find((o, i) => {
        // Search through the data object
        let edObj = o.data.find((p, j) => {
          // Replace the stringified Dates with regular Date objects
          o.data[j] = {item: p.item, date: new Date(p.date)};
        });
      });
      // Set copy to state
      setDummyData(editedData);
    }
  };

  return (
    <UserDataContext.Provider value={{dummyData, setDummyData}}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;
