import { StyleSheet, Text,Image, View } from 'react-native'
import React from 'react'
import { Button, Icon } from 'react-native-elements';
import UploadImage from './UploadImage';
import IMAGE_VERFICATION_EXAMPLE from '../data/image';

const PhotoVerifyScreen = () => {
    const onPressFunction = () => {}
  return (
    <View>
            <View style={styles.headerContent}>
                 <UploadImage />
            </View>
      <Text style={styles.title}>Photo Verify Example</Text>
        <Text style={styles.photo}>
      <Image style={styles.avatar} source={{uri: IMAGE_VERFICATION_EXAMPLE}}/>
        </Text>
    <Text style={styles.description}>
    This is the photo verify section. Please upload a photo to verify your identity. A photo of your face is required. Example is shown above
    </Text>
      <Button
      onPress={onPressFunction}
      title="Submit"
      />
    </View>
  )
}

export default PhotoVerifyScreen

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
      marginTop: 2,
      marginBottom: 20,
    },
    description: {
      padding: 10,
      paddingTop: 10,
      flexDirection: 'column',
      justifyContent: 'center',
    },
    padding: {
      paddingHorizontal: 16,
    },
    row: {
      flexDirection: 'row',
    },
    photo: {
        padding: 10,
        paddingTop: 10,
        flexDirection: 'column',
        alignSelf: 'center',
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
    },
    header:{
      backgroundColor: "#841584",
    },
    headerContent:{
      padding:30,
      alignItems: 'center',
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
  })