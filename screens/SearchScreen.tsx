import { StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import SearchInput from '../components/common/SearchInput';
import USERS from "../data/users";
import { Card, ListItem, Button, Icon, Avatar} from 'react-native-elements'
import { Text, View } from '../components/Themed';
import SearchBar from '../components/search/SearchBar'
import List from '../components/search/List'

const SearchScreen = () => {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [fakeData, setFakeData] = useState();
    // get data from the fake api endpoint
    useEffect(() => {
      const getData = async () => {
        const apiResponse = await fetch(
          "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
        );
        const data = await apiResponse.json();
        setFakeData(data);
      };
      getData();
    }, []);
   
  return (
    <SafeAreaView style={styles.root}>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      {(

          <List
            searchPhrase={searchPhrase}
            data={fakeData}
            setClicked={setClicked}
          />

      )}
    </SafeAreaView>
    )
  }
  
  export default SearchScreen
  
  const styles = StyleSheet.create({
    root: {
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      width: "100%",
      marginTop: 20,
      fontSize: 25,
      fontWeight: "bold",
      marginLeft: "10%",
    },
  });