import React, {useContext, useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  SectionList,
  TouchableOpacity,
  View,
} from 'react-native';
import {UserDataContext} from '../context/UserDataContext';

/**************
 * Page
 **************/
export const NewItemModal = () => {
  //   const {dummyData} = useContext(UserDataContext);

  //   useEffect(() => {}, [dummyData]);

  return (
    <View
      style={containerStyles.main}
      contentInsetAdjustmentBehavior="automatic">
      <StatusBar barStyle="light-content" />
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
  },
  listItem: {
    backgroundColor: 'rgba(194, 199, 197, 0.5)',
    borderRadius: 10,
    height: 50,
    marginVertical: 10,
    justifyContent: 'center',
  },
});

const textStyles = StyleSheet.create({});

const buttonStyles = StyleSheet.create({});
