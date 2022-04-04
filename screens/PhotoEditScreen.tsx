import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PhotoEditScreen = () => {
  return (
    <View style={styles.container}>
   <Text style={styles.title}>Photo Edit</Text>
   <Text style={styles.description}>
    This is the photo edit screen.
    </Text>
    </View>
  )
}

export default PhotoEditScreen

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