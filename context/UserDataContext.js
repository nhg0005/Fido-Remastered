import React, {createContext, useState, useEffect} from 'react';

export const UserDataContext = createContext(null);

const UserDataProvider = ({children}) => {
  // Global state hooks
  const [dummyData, setDummyData] = useState([
    {
      title: 'To do',
      data: [
        {item: 'Make doc appt', date: '12'},
        {item: 'Get more dog food', date: '2'},
      ],
    },
    {
      title: 'Meals',
      data: [
        {item: 'Lunch', date: '12'},
        {item: 'Dinner', date: '2'},
      ],
    },
    {
      title: 'Walks',
      data: [
        {item: 'Morning', date: '12'},
        {item: 'Evening', date: '2'},
      ],
    },
    {
      title: 'Medication',
      data: [
        {item: 'Heart worm prevention', date: '12'},
        {item: 'Flea and tick prevention', date: '2'},
      ],
    },
    {
      title: 'Appointments',
      data: [{item: 'Annual check up', date: '12'}],
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
