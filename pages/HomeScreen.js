import React, {useContext, useEffect, useLayoutEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  SectionList,
  TouchableOpacity,
} from 'react-native';
import {UserDataContext} from '../context/UserDataContext';

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
        <TouchableOpacity onPress={() => navigation.navigate('NewItemModal')}>
          <Text style={{color: '#fff', fontSize: 36}}>+</Text>
        </TouchableOpacity>
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
        renderSectionHeader={({section: {title}}) => (
          <Text style={textStyles.sectionHeader}>{title}</Text>
        )}
        renderItem={({item}) => <Item title={item.item} date={item.date} />}
      />
    </SafeAreaView>
  );
};

/**************
 * Components
 **************/
// TODO: Add onPress and bring up a modal with the appropriate data for editing
const Item = ({title, date}) => {
  const {setDummyData} = useContext(UserDataContext);

  return (
    <TouchableOpacity
      style={containerStyles.listItem}
      onPress={() => {
        console.log('TODO: Bring up edit modal');
      }}>
      {/* Width used for making the ellipses work, along with numberOfLines and flex: 1 */}
      <Text style={(textStyles.listItem, {width: 200})} numberOfLines={1}>
        {title}
      </Text>
      <Text style={textStyles.listItem}>
        {/* TODO: Write a function up top: IF ELSE statements for showing date/time properly based on section. Pass in section */}
        {date.toLocaleString([], {
          month: 'numeric',
          day: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
        })}
      </Text>
    </TouchableOpacity>
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
    fontSize: 17,
    marginHorizontal: 8,
    color: '#32292F',
    fontWeight: '500',
  },
});

const buttonStyles = StyleSheet.create({});
