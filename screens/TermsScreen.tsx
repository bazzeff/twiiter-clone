import { StyleSheet, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { ListItem, Avatar, Icon } from 'react-native-elements'
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import {  RootStackParamList } from '../types';
import { Button } from 'react-native-elements';


const Stack = createNativeStackNavigator<RootStackParamList>();

type RootStackParamList = {
  Home: undefined;
  ProfileScreen: undefined;
  CookiesPolicyScreen: undefined;
  DisclaimerScreen: undefined;
  ReturnRefundPolicyScreen: undefined;
  TermsAndConditionScreen: undefined;
};

const list = [
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
      title: 'Cookies Policy',
      icon: 'policy',
      url: 'CookiesPolicyScreen'
    },
    {
      title: 'Return and Refund Policy',
      icon: 'policy',
      url: 'ReturnRefundPolicyScreen'
    },
    {
      title: 'Disclaimer',
      icon: 'policy',
      url: 'DisclaimerScreen'
    },
    {
      title: 'Terms and Condition',
      icon: 'policy',
      url: 'TermsAndConditionScreen'
    },
    
  ]
const TermsScreen = ({ route, navigation }: Props) => {
  return (
    <View>
    <ScrollView>
        <Text style={styles.title}>
        Agreements and Policies</Text>
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

export default TermsScreen

const styles = StyleSheet.create({
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      alignSelf: 'center',
      marginTop: 15,
      marginBottom: 50,
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