/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, EvilIcons, AntDesign, Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import TabFourScreen from '../screens/TabFourScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import Dashboard from '../screens/Dashboard';
import Matches from '../screens/Matches';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Messages from '../screens/Messages';
import MessageViewScreen from '../screens/MessageViewScreen';
import PaymentScreen from '../screens/PaymentScreen';
import CheckOutScreen from '../screens/CheckOutScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SettingScreen from '../screens/SettingScreen';
import ContactScreen from '../screens/ContactScreen';
import NotificationScreen from '../screens/NotificationScreen';
import AccountScreen from '../screens/AccountScreen';
import FaqScreen from '../screens/FaqScreen';
import SafetyTipsScreen from '../screens/SafetyTipsScreen';
import ReportProblemScreen from '../screens/ReportProblemScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
import SubscriptionScreen from '../screens/SubscriptionScreen';
import StoreScreen from '../screens/StoreScreen';
import ChatScreen from '../screens/ChatScreen';
import ContactUsScreen from '../screens/ContactUsScreen';
import FeedScreen from '../screens/FeedScreen';
import TermsAndConditionScreen from '../screens/TermsAndConditionScreen';
import ReturnRefundPolicyScreen from '../screens/ReturnRefundPolicyScreen';
import CookiesPolicyScreen from '../screens/CookiesPolicyScreen';
import DisclaimerScreen from '../screens/DisclaimerScreen';
import ProfileEditScreen from '../screens/ProfileEditScreen';
import DeleteAccountScreen from '../screens/DeleteAccountScreen';
import PreferencesScreen from '../screens/PreferencesScreen';
import ShareScreen from '../screens/ShareScreen';
import PhotoEditScreen from '../screens/PhotoEditScreen';
import PhotoVerifyScreen from '../screens/PhotoVerifyScreen';
import TermsScreen from '../screens/TermsScreen';
import {  RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
//Dashboard
import { City, Filters, CardItem } from "../components";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/** . 
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ title: 'Settings' }} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ title: 'Search' }} />
      <Stack.Screen name="AccountScreen" component={AccountScreen} options={{ title: 'Account' }} />
      <Stack.Screen name="StoreScreen" component={StoreScreen} options={{ title: 'Store' }} />
      <Stack.Screen name="SubscriptionScreen" component={SubscriptionScreen} options={{ title: 'Subscription' }} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: 'Profile' }} />
      <Stack.Screen name="ProfileEditScreen" component={ProfileEditScreen} options={{ title: 'Edit Profile' }} />
      <Stack.Screen name="FeedScreen" component={FeedScreen} options={{ title: 'Feed' }} />
      <Stack.Screen name="FaqScreen" component={FaqScreen} options={{ title: 'FAQ' }} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen}  options={{ title: 'Notification' }} />
      <Stack.Screen name="PreferencesScreen" component={PreferencesScreen} options={{ title: 'Preferences' }} />
      <Stack.Screen name="PhotoVerifyScreen" component={PhotoVerifyScreen} options={{ title: 'Photo Verify' }} />
      <Stack.Screen name="PhotoEditScreen" component={PhotoEditScreen} options={{ title: 'Edit Photo' }} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} options={{ title: 'Settings' }} />
      <Stack.Screen name="TermsScreen" component={TermsScreen} options={{ title: 'Terms and Agreements' }} />
      <Stack.Screen name="MessageViewScreen" component={MessageViewScreen} options={{ title: 'Message Detail' }} /> 
      <Stack.Screen name="ShareScreen" component={ShareScreen} options={{ title: 'Share' }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
      <Stack.Screen name="Modal" component={ModalScreen} />
      <Stack.Screen name="ContactScreen" component={ContactScreen} options={{ title: 'Contact' }} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} options={{ title: 'Payment' }} />
      <Stack.Screen name="CheckOutScreen" component={CheckOutScreen} options={{ title: 'CheckOut' }} />
      <Stack.Screen name="Matches" component={Matches} options={{ title: 'Matches' }} />
      <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
      <Stack.Screen name="Profile" component={Profile} options={{ title: 'Home' }} />
      <Stack.Screen name="Messages" component={Messages} options={{ title: 'Messages' }} />
      <Stack.Screen name="SafetyTipsScreen" component={SafetyTipsScreen} options={{ title: 'Safety Tips' }} />
      <Stack.Screen name="ReportProblemScreen" component={ReportProblemScreen} options={{ title: 'Report Problem' }} />
      <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} options={{ title: 'Privacy Policy' }} />
      <Stack.Screen name="TermsAndConditionScreen" component={TermsAndConditionScreen} options={{ title: 'Terms and Condition'}} />
      <Stack.Screen name="ReturnRefundPolicyScreen" component={ReturnRefundPolicyScreen} options={{ title: 'Return & Refund Policy'}} />
      <Stack.Screen name="CookiesPolicyScreen" component={CookiesPolicyScreen} options={{ title: 'Cookies Policy'}} />
      <Stack.Screen name="DisclaimerScreen" component={DisclaimerScreen} options={{ title: 'Disclaimer'}} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ title: 'Chat' }} />
      <Stack.Screen name="ContactUsScreen" component={ContactUsScreen} options={{ title: 'Contact Us' }} />
      <Stack.Screen name="DeleteAccountScreen" component={DeleteAccountScreen} options={{ title: 'Delete Account' }} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={SettingsScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
           <City />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <Filters
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={SearchScreen}
        options={({ navigation }: RootTabScreenProps<'TabTwo'>) => ({
          title: 'Search',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <AntDesign
                name="menufold"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginLeft: 15 }}
              />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <AntDesign
                name="find"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabThree"
        component={Messages}
        options={({ navigation }: RootTabScreenProps<'TabThree'>) => ({
          title: 'Messages',
          tabBarIcon: ({ color }) => <AntDesign name="message1" size={30} color={color} />,
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <AntDesign
                name="menufold"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginLeft: 15 }}
              />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('ContactScreen')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <AntDesign
                name="contacts"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabFour"
        component={NotificationScreen}
        options={({ navigation }: RootTabScreenProps<'TabFour'>) => ({
          title: 'Notification',
          tabBarIcon: ({ color }) => <TabBarIcon name="bell" color={color} />,
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <AntDesign
                name="menufold"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginLeft: 15 }}
              />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Matches')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <Entypo
                name="add-to-list"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={({ navigation }: RootTabScreenProps<'Profile'>) => ({
          title: 'Profile',
          tabBarIcon: ({ color }) => <EvilIcons name="user" size={40} color={color} />,
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.navigate('Home')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <AntDesign
                name="menufold"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginLeft: 15 }}
              />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('SettingsScreen')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <AntDesign
                name="setting"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
