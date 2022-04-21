import React, {createContext, useState, useEffect} from 'react';

export const UserDataContext = createContext(null);

const UserDataProvider = ({children}) => {
  // Global state hooks
  const [dummyData, setDummyData] = useState([
    {
      title: 'To do',
      data: ['Make doc appt', 'Get more dog food'],
    },
    {
      title: 'Meals',
      data: ['Lunch', 'Dinner', 'Denta-stix'],
    },
    {
      title: 'Walks',
      data: ['Morning', 'Evening'],
    },
    {
      title: 'Medication',
      data: ['Heart worm prevention', 'Flea and tick prevention'],
    },
    {
      title: 'Appointments',
      data: ['Annual check up'],
    },
  ]);

  // Lifecycle hook for updating states
  useEffect(() => {}, []);

  return (
    <UserDataContext.Provider value={{dummyData}}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;
