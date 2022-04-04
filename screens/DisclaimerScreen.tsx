import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DisclaimerScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Disclaimer</Text>
      <View>
        <Text style={styles.description}>
        Copyright disclaimers: a copyright disclaimer is useful if you own the material on your social media pages. Copyright disclaimers tell users that the material on your page is yours, and that using your content without your permission could lead to legal actions.
Fair use disclaimers: a fair use disclaimer tells users that the content on your page contains copyrighted material that you do not own, but is protected by the fair use exception of the copyright act.
Affiliate disclaimers: an affiliate disclaimer (also referred to as an affiliate disclosure) is a statement on your social media that tells users that you are being paid by companies to promote, review, or recommend their products. Under FTC guidelines, this is a legally required disclaimer.
        </Text>
      </View>
    </View>
  )
}

export default DisclaimerScreen

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