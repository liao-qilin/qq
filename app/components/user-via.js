import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

export const UserVia = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.openDrawer();
      }}>
      <Image
        style={styles.via}
        source={{uri: 'https://cdn.huodao.hk/zlj_default_ava.png'}}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  via: {
    height: 30,
    width: 30,
  },
});
