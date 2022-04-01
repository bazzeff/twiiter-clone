
import React from 'react'
import {
    SafeAreaView, 
    ScrollView,
    TouchableHighlight,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Image,
    FlatList,
  } from "react-native";
  import { Text, View } from '../../Themed';
  import styles, { DARK_GRAY } from "../../../constants/MatchLayout";

  import { CardItem, Icon } from "../../forms";
  import { DEMO } from "../../../assets/data/demo";
  
const PostItems = () => { 
  return ( 
    <View style={styles.containerMatches}>
      <View style={styles.top}>
        <Text style={styles.title}>Matches</Text>
        <TouchableOpacity>
          <Icon name="ellipsis-vertical" color={DARK_GRAY} size={20} />
        </TouchableOpacity>
      </View>

      <FlatList
        numColumns={2}
        data={DEMO}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <CardItem
              image={item.image}
              name={item.name}
              isOnline={item.isOnline}
              hasVariant
            />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default PostItems
