import React, { memo } from 'react';
import { SafeAreaView, Text } from 'react-native';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import BottomTabs from '../components/BottomTabs'
import { Navigation } from '../types'; 
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Matches, Messages, Profile } from "../screens";
import { PRIMARY_COLOR, DARK_GRAY, BLACK, WHITE } from "../assets/styles";
import TabBarIcon from "../components/TabBarIcon"; 
import { Stories } from '../components';
import Browse from '../components/Browse';

//import Home from '../screens/Home';
//import Matches from './screens/Matches';
//import Messages from './screens/Messages';
//import Profile from '../screens/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

type Props = {
  navigation: Navigation;
};
//{ navigation }: Props
const Dashboard = ({ navigation }: Props) => (
  <DashboardBackGround> 
  <Header>Let’s start</Header> 
  <Paragraph>
  <SafeAreaView>
  </SafeAreaView>
    </Paragraph>   
    <Tab.Navigator>
      <Tab.Screen name="Explore" component={Home} />
      <Tab.Screen name="Matches" component={Matches} />
      <Tab.Screen name="Chat" component={Messages} />
      <Tab.Screen name="Profile" component={Profile} /> 
    </Tab.Navigator>
  </DashboardBackGround>
);

export default Dashboard;
