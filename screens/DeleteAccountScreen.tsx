import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements'

const DeleteAccountScreen = () => {
  return (
    <View style={styles.container}>
       <Text style={styles.title}>Delete Account</Text>
       <Text style={styles.text}>Are you sure you want to delete your account?</Text>
       <View style={styles.detailContent}>
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

export default DeleteAccountScreen

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
    text: {
        fontSize: 15,
        alignSelf: 'center',
        marginTop: 2,
        marginBottom: 2,
    },
    detailContent:{
      margin:10,
      alignItems: 'center'
    },
  })