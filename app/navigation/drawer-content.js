import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {View, StyleSheet, Image, Text} from 'react-native';

export const DrawerContent = (props) => {
  return (
    <>
      <View style={styles.profile}>
        <Image
          style={styles.via}
          source={{uri: 'https://cdn.huodao.hk/zlj_default_ava.png'}}
        />
        <View style={styles.info}>
          <Text style={styles.name}>Kylin</Text>
          <Text style={styles.signature}>编辑个性，展示我的独特态度</Text>
        </View>
      </View>
      <DrawerContentScrollView>
        <DrawerItem
          label="开通会员"
          onPress={() => {}}
          icon={() => {
            return (
              <Image
                style={styles.icon}
                source={require('../icons/crown.png')}
              />
            );
          }}
        />
        <DrawerItem
          label="我的钱包"
          onPress={() => {}}
          icon={() => {
            return (
              <Image
                style={styles.icon}
                source={require('../icons/crown.png')}
              />
            );
          }}
        />
        <DrawerItem
          label="我的个性装扮"
          onPress={() => {}}
          icon={() => {
            return (
              <Image
                style={styles.icon}
                source={require('../icons/crown.png')}
              />
            );
          }}
        />
        <DrawerItem
          label="我的情侣空间"
          onPress={() => {}}
          icon={() => {
            return (
              <Image
                style={styles.icon}
                source={require('../icons/crown.png')}
              />
            );
          }}
        />
        <DrawerItem
          label="我的收藏"
          onPress={() => {}}
          icon={() => {
            return (
              <Image
                style={styles.icon}
                source={require('../icons/crown.png')}
              />
            );
          }}
        />
        <DrawerItem
          label="我的相册"
          onPress={() => {}}
          icon={() => {
            return (
              <Image
                style={styles.icon}
                source={require('../icons/crown.png')}
              />
            );
          }}
        />
        <DrawerItem
          label="我的文件"
          onPress={() => {}}
          icon={() => {
            return (
              <Image
                style={styles.icon}
                source={require('../icons/crown.png')}
              />
            );
          }}
        />
        <DrawerItem
          label="我的小游戏"
          onPress={() => {}}
          icon={() => {
            return (
              <Image
                style={styles.icon}
                source={require('../icons/crown.png')}
              />
            );
          }}
        />
        <DrawerItem
          label="开王卡送SVIP"
          onPress={() => {}}
          icon={() => {
            return (
              <Image
                style={styles.icon}
                source={require('../icons/crown.png')}
              />
            );
          }}
        />
      </DrawerContentScrollView>
      <View style={styles.settingContainer}>
        <View style={styles.settingItem}>
          <Image style={styles.icon} source={require('../icons/setting.png')} />
          <Text style={styles.settingFont}>设置</Text>
        </View>
        <View style={styles.settingItem}>
          <Image style={styles.icon} source={require('../icons/setting.png')} />
          <Text style={styles.settingFont}>夜间</Text>
        </View>
        <View style={styles.settingItem}>
          <Image style={styles.icon} source={require('../icons/setting.png')} />
          <Text style={styles.settingFont}>13天</Text>
        </View>
        <View style={styles.settingItem}>
          <Image
            style={styles.settingIcon}
            source={require('../icons/setting.png')}
          />
          <Text style={styles.settingFont}>南山</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingLeft: 10,
  },
  via: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  info: {},
  name: {},
  signature: {
    fontSize: 12,
    color: 'gray',
  },
  icon: {
    marginLeft: 5,
    width: 20,
    height: 20,
  },
  settingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  settingItem: {
    flex: 1,
    alignItems: 'center',
  },
  settingIcon: {
    width: 20,
    height: 20,
  },
  settingFont: {
    fontSize: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
});
