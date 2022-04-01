import { StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context' 
import { Text, View } from '../../components/Themed'; 

import EditScreenInfo from '../../components/EditScreenInfo';

const Albums = () => {
  return (
    <SafeAreaView>
    <View style={styles.container}>
     <Text>Albums</Text> 
      <EditScreenInfo path="/screens/albums/Albums.tsx" />
    </View>
    </SafeAreaView>
  )
}

export default Albums

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});