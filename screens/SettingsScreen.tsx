import { StyleSheet, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { ListItem, Avatar, Icon } from 'react-native-elements'
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import {  RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

type RootStackParamList = {
  Home: undefined;
  AccountScreen: undefined;
  NotificationScreen: undefined;
  ContactUsScreen: undefined;
  SettingsScreen: undefined;
  FaqScreen: undefined;
  SafetyTipsScreen: undefined;
  ReportProblemScreen: undefined;
  PrivacyPolicyScreen: undefined;
  SubscriptionScreen: undefined;
  PaymentScreen: undefined;
  StoreScreen: undefined;
  ProfileScreen: undefined;
  Profile: { userId: string };
  FeedScreen: { sort: 'latest' | 'top' } | undefined;
};
const list = [
  {
    title: 'Account',
    icon: 'account-box',
    url: 'AccountScreen',
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
    url: 'SettingsScreen'
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
    title: 'Privacy Policy',
    icon: 'policy',
    url: 'PrivacyPolicyScreen'
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
    marginTop: 20,
    marginBottom: 20,
  },
  avatar: {
    alignSelf: 'center',
    marginTop: 20,
  },
  list: {
    margin: 2,
  },
})