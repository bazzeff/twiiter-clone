import { StyleSheet, Share, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements';

const ShareScreen = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Dominatrix | A app for sharing your fantasy with photos with your Goddess or God. Download it now!',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
   <Text style={styles.title}>Invite a friend</Text>
    <Text style={styles.description}>
      Join our community of friends and people that have a kinky desire and love to full filled their fantasies.
      </Text>
       {/* {this.onShare} */}
      <Button onPress={onShare} title="Share" />
    </View>
  )
}

export default ShareScreen

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