import React from "react";
import {
  ScrollView, 
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import SearchInput from '../components/common/SearchInput';
import DEMO from "../assets/data/demo";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
       <SearchInput />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});
