import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabs} from './bottom-tab';
import {UserVia} from '../components/user-via';
import {HeaderRight} from '../components/header-right';
import {CustomHeaderTitle} from '../components/custom-header-title';
const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator headerMode="screen" initialRouteName="FeedList">
      <Stack.Screen
        component={BottomTabs}
        name="FeedList"
        options={({navigation, route}) => {
          return {
            headerTitle: () => {
              return <CustomHeaderTitle route={route} />;
            },
            headerRight: () => {
              return <HeaderRight navigation={navigation} route={route} />;
            },
            headerLeft: () => {
              return <UserVia navigation={navigation} route={route} />;
            },
            headerTitleAlign: 'center',
            headerLeftContainerStyle: {marginLeft: 10},
            headerRightContainerStyle: {marginRight: 10},
            headerStyle: {backgroundColor: '#1296db'},
          };
        }}
      />
    </Stack.Navigator>
  );
};
