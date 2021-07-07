/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
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
  Dimensions,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class SongPlayer extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.container1}>
          <View style={styles.imgWrapper}>
            <Image
              style={styles.img}
              source={require('../img/Legends.png')}></Image>
          </View>
        </View>
        <View style={styles.container2}>
          <Text style={styles.text}>Ghost of Tsushima</Text>
        </View>
        <View style={styles.container3}></View>
        <View style={styles.container4}></View>
        <View style={styles.container5}></View>
      </React.Fragment>
    );
  }
}
export default SongPlayer;

const styles = StyleSheet.create({
  // Beginning of Container 1
  container1: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffe0',
    flexDirection: 'column',
  },
  imgWrapper: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: `red`,
  },
  img: {
    width: wp(90),

    resizeMode: 'contain',
    borderRadius: 20,
  },

  // End of Container 1

  // Beginning of Container 2
  container2: {
    flex: 0.5,
    backgroundColor: '#ffc0cb',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
    text: {
    color: 'white',
    fontSize: 30
  },
  // End of Container 2

  // Beginning of Container 3
  container3: {
    flex: 0.5,
    backgroundColor: '#fdf5e6',
  },
  // End of Container 3

  // Beginning of Container 4
  container4: {
    flex: 1,
    backgroundColor: '#eee8aa',
  },

  // End of Container 4

  // Beginning of Container 5
  container5: {
    flex: 0.5,
    backgroundColor: '#ffdab9',
  },

  // End of Container 5
});
