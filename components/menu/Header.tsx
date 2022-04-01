import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'; 

import Albums from '../../screens/albums/Albums';
import Chat from '../../screens/chat/Chat';
import Contacts from '../../screens/contacts/Contacts';

type MaterialTopTabParams = {
    albums: undefined;
    chat: undefined;
    contacts: undefined;
  };
  
  const MaterialTopTabs = createMaterialTopTabNavigator<MaterialTopTabParams>();
  function MyTabs() {
    return (
      <MaterialTopTabs.Navigator style={styles.container}>
        <MaterialTopTabs.Screen name="albums" component={Albums} />
        <MaterialTopTabs.Screen name="chat" component={Chat} />
        <MaterialTopTabs.Screen name="contacts" component={Contacts} />
      </MaterialTopTabs.Navigator>
    );
  }
  interface Props {
    title: string;
  }
  const Header: React.FC<Props> = ({title}) =>  {
  return (
      <>
      <SafeAreaView>
      <View style={styles.header}> 
        <MyTabs />
    </View>
    </SafeAreaView>
      </>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cfcfcf',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
  },
});