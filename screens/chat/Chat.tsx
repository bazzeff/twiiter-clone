import { StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, View } from '../../components/Themed';

import EditScreenInfo from '../../components/EditScreenInfo';

const Chat = () => {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Text>Chat</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/chat/Chat.tsx" />
    </View>
  </SafeAreaView>

  )
}

export default Chat

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  header: {
    marginTop: 50,
  }
});