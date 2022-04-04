import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Icon } from 'react-native-elements'

const CurrentLocationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CurrentLocationScreen</Text>
      <View style={styles.description}>
      <Button
      title="Delete Account"
      icon={
        <Icon
          name="delete"
          size={15}
          color="white"
        />
      }
      />
      </View>
    </View>
  )
}

export default CurrentLocationScreen

const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
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
      paddingTop: 50,
      flexDirection: 'column',
      justifyContent: 'center',
    },
    padding: {
      paddingHorizontal: 16,
    },
    row: {
      flexDirection: 'row',
    },
  })