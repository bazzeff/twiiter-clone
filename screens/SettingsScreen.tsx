import { StyleSheet, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { ListItem, Avatar, Icon } from 'react-native-elements'
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import {  RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import { AntDesign } from '@expo/vector-icons'; 
import { Button } from 'react-native-elements';

const Stack = createNativeStackNavigator<RootStackParamList>();

type RootStackParamList = {
  Home: undefined;
  AccountScreen: undefined;
  NotificationScreen: undefined;
  ContactUsScreen: undefined;
  SettingsScreen: undefined;
  SettingScreen: undefined;
  FaqScreen: undefined;
  SafetyTipsScreen: undefined;
  ReportProblemScreen: undefined;
  SubscriptionScreen: undefined;
  PaymentScreen: undefined;
  StoreScreen: undefined;
  ProfileScreen: undefined;
  TermsScreen: undefined;
  Profile: { userId: string };
  PhotoVerifyScreen: undefined;
  PhotoEditScreen: undefined;
  ProfileEditScreen: undefined;
  PreferencesScreen: undefined;
  ShareScreen: undefined;
  FeedScreen: { sort: 'latest' | 'top' } | undefined;
};
const list = [
  {
    title: 'Edit Profile',
    icon: 'account-box',
    url: 'ProfileEditScreen',
  },
  {
    title: 'Notifications',
    icon: 'notifications',
    url: 'NotificationScreen'
  },
  {
    title: 'My Feed',
    icon: 'rss-feed',
    url: 'FeedScreen'
  },
  {
    title: 'Contact Us',
    icon: 'contact-mail',
    url: 'ContactUsScreen'
  },
  {
    title: 'Settings',
    icon: 'settings',
    url: 'SettingScreen'
  },
  {
    title: 'FAQ',
    icon: 'forum',
    url: 'FaqScreen'
  },
  {
    title: 'Safety Tips',
    icon: 'security',
    url: 'SafetyTipsScreen'
  },
  {
    title: 'Report a Problem',
    icon: 'report-problem',
    url: 'ReportProblemScreen'
  },
  {
    title: 'Terms and Agreements',
    icon: 'policy',
    url: 'TermsScreen'
  },
  {
    title: 'Subscription',
    icon: 'subscriptions',
    url: 'SubscriptionScreen'
  },
  {
    title: 'Payment',
    icon: 'payment',
    url: 'PaymentScreen'
  },
  {
    title: 'Store',
    icon: 'store',
    url: 'StoreScreen'
  },
  {
    title: 'Invite a Friend',
    icon: 'share',
    url: 'ShareScreen'
  },
  {
    title: 'Photo Verified',
    icon: 'verified-user',
    url: 'PhotoVerifyScreen'
  },
  {
    title: 'Edit Photo',
    icon: 'photo',
    url: 'PhotoEditScreen'
  },
  {
    title: 'Preferences',
    icon: 'room-preferences',
    url: 'PreferencesScreen'
  },
  {
    title: 'Delete Account',
    icon: 'delete',
    url: 'DeleteAccountScreen'
  },
  
]
const SettingsScreen = ({ route, navigation }: Props) => {
  return (
    <View>
    <ScrollView>
      <Text style={styles.avatar}>
<Avatar
  rounded
  size="xlarge"
  title="LW"
  onPress={() =>  navigation.navigate('ProfileScreen')}
  activeOpacity={0.7}
  source={{
    uri:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  }}
/></Text>
      <Text style={styles.title}
      onPress={() =>  navigation.navigate('ProfileScreen')}
      >
        John Doe</Text>
        <Text style={styles.subtitle}>
        status</Text>
      <View>
  {
    list.map((item, i) => (
      <ListItem onPress={() => navigation.navigate(item.url)} style={styles.list} key={i} bottomDivider>
        <Icon name={item.icon} />
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    ))
  }
</View>
<View style={styles.detailContent}>
      <Button
       style={{ marginBottom: 20 }}
  icon={
    <Icon
      name="logout"
      size={15}
      color="white"
    />
  }
  title="Logout"
/>
      </View>
</ScrollView>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 15,
    alignSelf: 'center',
    marginTop: 2,
    marginBottom: 2,
  },
  avatar: {
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonContainer: {
    marginTop:10,
    marginLeft:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius: 60,
    color: 'white',
    backgroundColor: "#841584",
  },
  detailContent:{
    margin:10,
    alignItems: 'center'
  },
  list: {
    margin: 2,
  },
})