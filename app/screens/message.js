import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import {SearchBox} from '../components/search-box';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  _keyExtractor = (item, index) => item.id.toString();
  componentDidMount() {
    const data = [
      {
        title: '腾讯看点',
        desc: '[精选]今日步数到',
        time: '12:21',
        total: 5,
        id: 1,
      },
      {
        title: '微视',
        desc: '李佳琪对面那驾驭口红，表情逐渐',
        time: '12:20',
        total: 5,
        id: '2',
      },
      {
        title: 'QQ直播',
        desc: 'EDG vs IG之战，EDG阿步坐阵',
        time: '20:30',
        total: 5,
        id: '3',
      },
      {
        title: '群助手',
        desc: '[精选]今日步数到',
        time: '16:21',
        total: 7,
        id: '4',
      },
      {
        title: '订阅号',
        desc: '[精选]今日步数到',
        time: '12:21',
        total: 0,
        id: '5',
      },
      {
        title: '好友动态',
        desc: '[精选]今日步数到',
        time: '09:10',
        total: 46,
        id: '6',
      },
      {
        title: '群通知',
        desc: '[精选]今日步数到',
        time: '21:21',
        total: 5,
        id: '7',
      },
      {
        title: '群通知',
        desc: '[精选]今日步数到',
        time: '21:21',
        total: 5,
        id: '12',
      },
      {
        title: '群通知',
        desc: '[精选]今日步数到',
        time: '21:21',
        total: 5,
        id: '8',
      },
      {
        title: '群通知',
        desc: '[精选]今日步数到',
        time: '21:21',
        total: 5,
        id: '9',
      },
      {
        title: '群通知',
        desc: '[精选]今日步数到',
        time: '21:21',
        total: 5,
        id: '10',
      },
      {
        title: '群通知',
        desc: '[精选]今日步数到',
        time: '21:21',
        total: 5,
        id: '11',
      },
    ];
    this.setState({list: data});
  }

  _renderItem = (item, index) => {
    return (
      <View style={styles.container} key={item.name}>
        <Image
          style={styles.logo}
          source={{uri: 'https://cdn.huodao.hk/zlj_default_ava.png'}}
        />
        <View style={styles.middleContent}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.desc}</Text>
        </View>
        <View style={styles.rightContent}>
          <Text style={styles.time}>{item.time}</Text>
          {item.total > 0 ? (
            <View style={styles.circle}>
              <Text style={styles.total}>{item.total}</Text>
            </View>
          ) : null}
        </View>
      </View>
    );
  }

  render() {
    return (
      <>
        <SearchBox />
        <FlatList
          data={this.state.list}
          renderItem={({item, index}) => this._renderItem(item, index)}
          keyExtractor={this._keyExtractor}
        />
      </>
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
