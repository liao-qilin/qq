import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

class Message extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{uri: 'https://cdn.huodao.hk/zlj_default_ava.png'}}
        />
        <View style={styles.middleContent}>
          <Text style={styles.title}>腾讯看点</Text>
          <Text style={styles.desc}>[精选]今日步数到</Text>
        </View>
        <View style={styles.rightContent}>
          <Text style={styles.time}>12:21</Text>
          <View style={styles.circle}>
            <Text style={styles.total}>6</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Message;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  middleContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  title: {
    fontSize: 14,
  },
  desc: {
    fontSize: 10,
    color: 'gray',
  },
  rightContent: {
    alignItems: 'center',
    marginRight: 5,
  },
  time: {
    color: 'gray',
    fontSize: 12,
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 12,
    backgroundColor: 'red',
    alignItems: 'center',
    marginTop: 5,
  },
  total: {
    color: 'white',
    fontSize: 10,
  },
});
