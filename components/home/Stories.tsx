import { StyleSheet, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import USERS  from '../../data/users';
import { Text, View } from '../../components/Themed';

const Stories = () => {
  const [users, setUser] = useState(USERS);
  return (
    <View style={{  marginBottom: 13 }}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
     {users.map((story, index) => (
         <View key={index} style={{ alignItems: 'center' }}>
         <Image source={{uri: story.image}} style={styles.story} />
         <Text style={{ color: 'black' }}>{
             story.user.length > 11 ? story.user.slice(0, 10).toLowerCase() + '...' 
             : story.user.toLowerCase()}
         </Text>
         </View>
     ))}
    </ScrollView>
      <Text style={{ color: 'white' }}>Stories</Text>
    </View>
  )
}
 
export default Stories

const styles = StyleSheet.create({
  story: {
      width: 70,
      height: 70,
      borderRadius: 50,
      marginLeft: 6,
      borderWidth: 3,
      borderColor: '#ff8501',
  },
})