import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {RootNavigation} from './navigation/root-navigation';
import 'react-native-gesture-handler';
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <RootNavigation />
      </SafeAreaView>
    </>
  );
};

export default App;
