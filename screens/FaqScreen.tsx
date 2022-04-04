import {
  StyleSheet,
  Text,
  View,
  ScrollView, 
  TouchableOpacity,
} from 'react-native';
import { ListItem, Avatar, Icon } from 'react-native-elements'
import React from 'react'
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import {  RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import {  ToggleButton, Divider,List } from 'react-native-paper';
import list from '../data/faq'

const FaqScreen = ({ route, navigation }: Props) => {
  const [expanded, setExpanded] = React.useState<boolean>(true);
  const [first, setFirst] = React.useState<string>('bold');
  const [fruit, setFruit] = React.useState<string>('watermelon');
  const [status, setStatus] = React.useState<StatusState>('checked');

  const _handlePress = () => {
    setExpanded(!expanded);
  };


  const [visible, setVisible] = React.useState(false);
  const [checkedNormal, setCheckedNormal] = React.useState<boolean>(true);
  return (

    <ScrollView>
    <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Frequent Ask Question</Text>
          </View>
          <View>
</View>

<List.Section title="General Information">
{
    list.map((item, i) => (
      <List.Accordion
          left={props => <List.Icon {...props} icon={item.icon} />}
          title={item.title}
          key={item.id}
        >
        <View style={styles.detailContent}>
          <Text style={styles.text}>
           {item.description}
          </Text>
        </View>
        </List.Accordion>
    ))
  }
      </List.Section>
      <Divider />

      </View>
    </ScrollView>
  )
}

export default FaqScreen

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#CCC",
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  avatar: {
    alignSelf: 'center',
    marginTop: 20,
  },
  list: {
    margin: 2,
  },
  count:{
    fontSize:18,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
    marginTop:40
  },
  textInfo:{
    fontSize:18,
    marginTop:20,
    color: "#696969",
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
    backgroundColor: "#00CED1",
  },
  description:{
    fontSize:20,
    color: "#00CED1",
    marginTop:10,
    textAlign: 'center'
  },
});