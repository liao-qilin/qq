import React from 'react';
import {Image, StyleSheet} from 'react-native';
const tabIconsMap = {
  contact: require('../icons/contact.png'),
  inContact: require('../icons/in-contact.png'),
  dynamic: require('../icons/dynamic.png'),
  inDynamic: require('../icons/in-dynamic.png'),
  news: require('../icons/news.png'),
  inNews: require('../icons/in-news.png'),
  message: require('../icons/message.png'),
  inMessage: require('../icons/in-message.png'),
};
export const TabIcons = (props) => {
  let iconKey = '';
  switch (props.name) {
    case 'Message':
      iconKey = props.focused ? 'message' : 'inMessage';
      break;
    case 'News':
      iconKey = props.focused ? 'news' : 'inNews';
      break;
    case 'Dynamic':
      iconKey = props.focused ? 'dynamic' : 'inDynamic';
      break;
    case 'Contact':
      iconKey = props.focused ? 'contact' : 'inContact';
      break;
  }
  return <Image style={styles.icon} source={tabIconsMap[iconKey]} />;
};

const styles = StyleSheet.create({
  icon: {
    height: 20,
    width: 20,
  },
});
