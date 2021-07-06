/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import SongPlayer from './screens/SongPlayer';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const App = () => {
  return (
    <React.Fragment>
      <SongPlayer />
      <View style={styles.container1}>
        <View style={styles.slide}></View>
      </View>
      <View style={styles.container2}>
        <View style={styles.body}></View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container1: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 0,
  },
  slide: {
    backgroundColor: '#808080',
    width: 50,
    height: 50,
  },
  container2: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  body: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
    backgroundColor: '#8fbc8f',
  },
});

export default App;
