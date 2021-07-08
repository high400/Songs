/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, useState} from 'react';
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
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {Icon} from 'react-native-elements';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Slider from '@react-native-community/slider';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

class SongPlayer extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.mainContainer}></View>
        <View
          style={styles.bottomContainer}>
          <View
            style={styles.bottomControls}>
            <TouchableOpacity onPress={() => {}}>
            <Ionicons name="heart-outline" size={30} />
            </TouchableOpacity> 
            <TouchableOpacity onPress={() => {}}>
            <Ionicons name="repeat" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
            <Ionicons name="share-outline" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
            <Ionicons name="ellipsis-horizontal" size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
export default SongPlayer;

const styles = StyleSheet.create({
  // Beginning of Container 1
  container: {
    flex: 1,
    backgroundColor: '#a9a9a9',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  // End of Container 1

  // Beginning of Container 2

  // End of Container 2

  // Beginning of Container 3

  // End of Container 3

  // Beginning of Container 4

  // End of Container 4

  // Beginning of Container 5
  bottomContainer:
  {
    borderTopWidth: 1, 
    borderTopColor: 'black', 
    width: '100%',
    
  },
  bottomControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  }
  // End of Container 5
});
