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
  Image,
  ImageView,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const SongPlayer = () => {
  return (
    <React.Fragment>
      <SafeAreaView style={styles.header}>
        
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Image style={styles.img} source={require('../img/Legends.png')}></Image>
        </ScrollView>
      </SafeAreaView>
    </React.Fragment>
  );
};

export default SongPlayer;

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'center', 
    },
    img: {
        width: 350, 
        height: 350,
        resizeMode: 'contain',
    }
});
