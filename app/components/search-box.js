import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
export const SearchBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <Image style={styles.search} source={require('../icons/search.png')} />
        <Text style={styles.searchText}>搜索</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 44,
    paddingTop: 10,
    paddingBottom: 10,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#e6e6e6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  search: {
    width: 12,
    height: 12,
    marginRight: 6,
  },
  searchText: {
    color: '#cdcdcd',
  },
});
