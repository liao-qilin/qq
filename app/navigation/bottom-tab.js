import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Message from '../screens/message';
import Contact from '../screens/contact';
import {News} from '../screens/news';
import {Dynamic} from '../screens/dynamic';
import {TabIcons} from './tab-icons';

const Tab = createBottomTabNavigator();
export const BottomTabs = () => {
  return (
    <React.Fragment>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            const params = {name: route.name, focused: focused};
            return <TabIcons {...params} />;
          },
        })}
        initialRouteName="Message"
        backBehavior="initialRoute"
        shifting={true}>
        <Tab.Screen
          name="Message"
          component={Message}
          options={{tabBarLabel: '消息'}}
        />
        <Tab.Screen
          name="Contact"
          component={Contact}
          options={{tabBarLabel: '联系人'}}
        />
        <Tab.Screen
          name="News"
          component={News}
          options={{tabBarLabel: '看点'}}
        />
        <Tab.Screen
          name="Dynamic"
          component={Dynamic}
          options={{tabBarLabel: '动态'}}
        />
      </Tab.Navigator>
    </React.Fragment>
  );
}
