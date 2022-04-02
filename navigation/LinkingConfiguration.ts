/** 
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          TabThree: {
            screens: {
              TabThreeScreen: 'three',
            },
          },
          TabFour: {
            screens: {
              TabFourScreen: 'Four',
            },
          },
          Profile: {
            screens: {
              Profile: 'Profile',
            },
          },
          Settings: {
            screens: {
              SettingsScreen: 'Settings',
            },
          },
          ContactScreen: {
            screens: {
              ContactScreen: 'Contact',
            },
          }
        },
      },
      Modal: 'modal',
      ContactModal: 'modal',
      PaymentModal: 'modal',
      PaymentSuccessModal: 'modal',
      PaymentFailureModal: 'modal',
      PaymentConfirmationModal: 'modal',
      PaymentConfirmationSuccessModal: 'modal',
      PaymentConfirmationFailureModal: 'modal',
      CheckOutModal: 'modal',
      SettingsModal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
