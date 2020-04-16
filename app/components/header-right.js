import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';

export const HeaderRight = (props) => {
  const {navigation, route} = props;
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.openDrawer();
      }}>
      <Image
        style={styles.icon}
        source={{uri: 'https://cdn.huodao.hk/zlj_default_ava.png'}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 30,
    width: 30,
  },
});
