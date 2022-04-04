import {SafeAreaView, StyleSheet, View, Text,TextInput, Image, Button, FlatList} from 'react-native';
import React, {useState} from 'react';

const ProfileEditScreen = () => {
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);
    const [data, setData] = React.useState([]);
    const [data2, setData2] = React.useState([]);
    const [data3, setData3] = React.useState([]);
    const [data4, setData4] = React.useState([]);
    const [data5, setData5] = React.useState([]);
    const [data6, setData6] = React.useState([]);
    const onPressFunction = () => {}
  return (
    <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar2.png'}}/>
                <Text style={styles.title}>
                  John Doe
                </Text>
            </View>
          </View>
    <View style={styles.contentWrapper}>
    <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.inputTwo}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <Button
      style={styles.buttonContainer}
      onPress={onPressFunction}
      title="Learn More"
      accessibilityLabel="Learn more about this purple button"
      />
    </View>
  </SafeAreaView>
  )
}

export default ProfileEditScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e8e7e3',
    },
    contentWrapper: {
      padding: 20,
      backgroundColor: '#fff',
    },
    buttonContainer: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
      backgroundColor: "#841584",
    },
    header:{
      backgroundColor: "#841584",
    },
    headerContent:{
      padding:30,
      alignItems: 'center',
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      alignSelf: 'center',
      marginTop: 5,
      marginBottom: 20,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    inputTwo: {
      height: 80,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });