import React, {createContext, useState, useEffect} from 'react';

export const UserDataContext = createContext(null);

const UserDataProvider = ({children}) => {
  // Global state hooks
  const [dummyData, setDummyData] = useState([
    {
      title: 'To do',
      data: [
        {item: 'Make doc appt', date: new Date()},
        {item: 'Get more dog food', date: new Date()},
      ],
    },
    {
      title: 'Meals',
      data: [
        {item: 'Lunch', date: new Date()},
        {item: 'Dinner', date: new Date()},
      ],
    },
    {
      title: 'Walks',
      data: [
        {item: 'Morning', date: new Date()},
        {item: 'Evening', date: new Date()},
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

  // Lifecycle hook for updating states
  useEffect(() => {}, []);

  return (
    <UserDataContext.Provider value={{dummyData, setDummyData}}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;
