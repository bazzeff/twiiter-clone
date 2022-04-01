import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import { StripeProvider } from '@stripe/stripe-react-native';
import PaymentScreen from "./PaymentScreen";

const CheckOutScreen = () => {
    const publishableKey = "pk_test_ttgsxvQHqbgNZgopICqlH6Lr00bdFsBxK4";
  return (
    <StripeProvider
      publishableKey={publishableKey}
    >
      <PaymentScreen />
    </StripeProvider>
  )
}

export default CheckOutScreen

const styles = StyleSheet.create({})