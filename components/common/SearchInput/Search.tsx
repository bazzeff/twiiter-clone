import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import { JsonPlaceHolder } from 'react-fakers' 
const KEYS_TO_FILTERS = ['user.name', 'subject'];

//const Search = () => {
export default class Search extends Component<{}> {
   constructor(props) {
    super(props)
    this.state = {
      loading: false,
      data: ''
    }
  }

  onSuccess = (res) => {
    this.setState({
      loading: true,
      data: res
    })
  }

  onError = (error) => {
    if (error) {
      alert(error.message)
    }
  }
  searchUpdated(data) {
    this.setState({ searchTerm: data })
  }

  render() {
    return (
      <>
        <JsonPlaceHolder success={this.onSuccess} error={this.onError} />
        <View style={styles.container}>
        <SearchInput
          onChangeText={(data) => { this.searchUpdated(data) }}
          style={styles.searchInput}
          placeholder="Type a search here"
        />
        <ScrollView>
        {!this.state.loading && <h4>Loading....</h4>}
        <ul>
          {this.state.loading &&
            this.state.data.map((val, id) => (
              <li key={id}>
                {val.name} - {val.email}
              </li>
            ))}
        </ul> 
        </ScrollView>
        </View>
        
      </>
    )
  }
}
//export default Search


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  },
  emailItem:{
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 10
  },
  emailSubject: {
    color: 'rgba(0,0,0,0.5)'
  },
  searchInput:{
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1
  }
});