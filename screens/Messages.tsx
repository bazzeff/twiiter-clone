import { StyleSheet,  Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState,useLayoutEffect, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import SearchInput from '../components/common/SearchInput';
import USERS from "../data/users";
import { Card, ListItem, Button, Icon, Avatar} from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';

const Message = (props) => {
  const [messages, setMessages] = useState([]); 
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <View style={{ padding: 5}}>
  <ScrollView>
  {
    USERS.map((l, i) => (
      <TouchableOpacity>
      <ListItem key={i} 
      style={styles.messageContainer}
      friction={90} //
      tension={100} // These props are passed to the parent component (here TouchableScale)
      activeScale={0.95} //
      linearGradientProps={{
        colors: ['#BA55D3', '#7444C0'],
        start: { x: 1, y: 0 },
        end: { x: 0.2, y: 0 },
      }}
      ViewComponent={LinearGradient} 
      bottomDivider>
        <Avatar 
           size="medium"
           rounded
           title={l.user}
           onPress={() => console.log("Works!")}
           activeOpacity={0.7}
           source={{uri: l.image}} 
           />
        <ListItem.Content>
          <ListItem.Title>{l.user}</ListItem.Title>
          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
          <Text style={styles.ratingText}>5 months ago</Text>
        </ListItem.Content>
       <ListItem.Chevron />
      </ListItem>
      </TouchableOpacity>
    ))
  }
</ScrollView>
       
      </View>
  )
}

export default Message

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },
    messageContainer: {
      margin: 2,
    },
    messageImage: {
      height: "100%",
      resizeMode: "cover",
    },
    input: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        padding: 15,
        marginBottom: 20,
        borderColor: 'gray',
    },
    container1: {
        flex: 1,
        backgroundColor: '#fff',
        paddingBottom: 0
      },
      title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
      },
      item: {
        marginVertical: 14,
        flexDirection: 'row'
     },
     itemIn: {
         marginLeft: 10
     },
     itemOut: {
        alignSelf: 'flex-end',
        marginRight: 10
     },
     ratingText: {
       paddingLeft: 10,
       color: 'white'
     },
     balloon: {
        maxWidth: 250,
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 15,
        borderRadius: 20,
     },
     arrowContainer: {
         position: 'absolute',
         top: 0,
         left: 0,
         right: 0,
         bottom: 0,
         zIndex: -1
         // backgroundColor: 'red'
     },
     arrowLeftContainer: {
         justifyContent: 'center',
         alignItems: 'flex-start',
         // backgroundColor: 'green'
     },
     
     arrowLeft: {
         left: -20,
     },
     italic: {fontStyle: 'italic',color: 'white', paddingHorizontal: 10, paddingTop: 5, fontWeight: '700'},
     replier_name :{color: 'red', paddingHorizontal: 10, paddingTop: 5,fontWeight: 'bold'}
})