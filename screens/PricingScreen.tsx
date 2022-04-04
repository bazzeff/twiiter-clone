import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PricingCard } from 'react-native-elements';

const PricingScreen = () => {
  return (
    <View style={styles.container}>
   <Text style={styles.title}>PricingScreen</Text>
      <PricingCard
  color="#4f9deb"
  title="Free"
  price="$0"
  info={['1 User', 'Basic Support', 'All Core Features']}
  button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
/>
<PricingCard
  color="#4f9deb"
  title="Free"
  price="$0"
  info={['1 User', 'Basic Support', 'All Core Features']}
  button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
/>


    </View>
  )
}

export default PricingScreen

const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      alignSelf: 'center',
      marginTop: 50,
      marginBottom: 20,
    },
    description: {
      padding: 10,
    },
  })