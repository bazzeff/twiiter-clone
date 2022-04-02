
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default class ProfileScreen extends Component {

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar2.png'}}/>
                <Text style={styles.name}>
                  John Doe
                </Text>
            </View>
          </View>


          <TouchableOpacity style={styles.buttonContainer}>
                <Text>Opcion 1</Text>  
              </TouchableOpacity> 
          <View style={styles.profileDetail}>
            <View style={styles.detailContent}>
              <Text style={styles.title}>Photos</Text>
              <Text style={styles.count}>200</Text>
            </View>
            <View style={styles.detailContent}>
              <Text style={styles.title}>Followers</Text>
              <Text style={styles.count}>200</Text>
            </View>
            <View style={styles.detailContent}>
              <Text style={styles.title}>Following</Text>
              <Text style={styles.count}>200</Text>
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
              <View style={styles.menuBox}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/cottage.png'}}/>
                <Text style={styles.info}>Icon</Text>
              </View>

              <View style={styles.menuBox}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/administrator-male.png'}}/>
                <Text style={styles.info}>Icon</Text>
              </View>

              <View style={styles.menuBox}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/filled-like.png'}}/>
                <Text style={styles.info}>Icon</Text>
              </View>

              <View style={styles.menuBox}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/facebook-like.png'}}/>
                <Text style={styles.info}>Icon</Text>
              </View>

              <View style={styles.menuBox}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/shutdown.png'}}/>
                <Text style={styles.info}>Icon</Text>
              </View>

              <View style={styles.menuBox}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/traffic-jam.png'}}/>
                <Text style={styles.info}>Icon</Text>
              </View>

              <View style={styles.menuBox}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/dusk/70/000000/visual-game-boy.png'}}/>
                <Text style={styles.info}>Icon</Text>
              </View>

              <View style={styles.menuBox}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/flat_round/70/000000/cow.png'}}/>
                <Text style={styles.info}>Icon</Text>
              </View>

              <View style={styles.menuBox}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/coworking.png'}}/>
                <Text style={styles.info}>Icon</Text>
              </View>

            </View>
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00CED1",
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
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  profileDetail:{
    alignSelf: 'center',
    marginTop:200,
    alignItems: 'center',
    flexDirection: 'row',
    position:'absolute',
    backgroundColor: "#ffffff"
  },
  detailContent:{
    margin:10,
    alignItems: 'center'
  },
  title:{
    fontSize:20,
    color: "#00CED1"
  },
  count:{
    fontSize:18,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  textInfo:{
    fontSize:18,
    marginTop:20,
    color: "#696969",
  },
  bodyContent:{
    paddingTop:40,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  buttonContainer: {
    marginTop:50,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:5,
    marginLeft:70,
    width:250,
    borderRadius:30,
    backgroundColor: "#00CED1",
  },
  description:{
    fontSize:20,
    color: "#00CED1",
    marginTop:5,
    textAlign: 'center'
  },
  menuBox:{
    backgroundColor: "#DCDCDC",
    width:100,
    height:100,
    alignItems: 'center',
    justifyContent: 'center',
    margin:12,
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:2,
      width:-2
    },
    elevation:4,
  },
  icon: {
    width:60,
    height:60,
  },
  info:{
    fontSize:22,
    color: "#696969",
  }
});
