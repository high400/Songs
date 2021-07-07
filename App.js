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
  Dimensions,
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
    <View style={styles.container}>
    <StatusBar barStyle="light-content" />
      <SongPlayer />
    </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
});

export default App;
