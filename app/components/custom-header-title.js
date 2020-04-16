import React from 'react';
import {Text, StyleSheet} from 'react-native';

export const CustomHeaderTitle = (props) => {
  console.log('props', props);
  if (props.route.state === undefined) {
    return <Text style={styles.title}>消息</Text>;
  }
  const titleMap = {
    0: '消息',
    1: '联系人',
    2: '看点',
    3: '动态',
  };
  let index = props.route.state.index;
  return <Text style={styles.title}>{titleMap[index]}</Text>;
};

const styles = StyleSheet.create({
  title: {color: 'white'},
});
