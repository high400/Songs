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
  FlatList,
} from 'react-native';

import {Icon} from 'react-native-elements';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import songs from '../Data/Data';

import Slider from '@react-native-community/slider';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const SongPlayer = () => {

  const renderSongs = ({index, item}) => {
    
      return (
          <View style={styles.img}> 
            <Image
              source={require('../img/Colossus.jpg')}
              style={styles.artwork}></Image>
          </View>
      );
  }

  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.mainContainer}>
          <FlatList
          data={songs}
          renderItems={renderSongs}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
           />
          <View>
            <Text style={styles.txt}>Song Title</Text>
            <Text style={styles.txt}>Song Artist Name</Text>
          </View>
          <View>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={100}
              minimumTrackTintColor="#da70d6"
              maximumTrackTintColor="#000000"
              thumbTintColor="#FFD369"
              minimumTrackTintColor="#FFD369"
              maximumTrackTintColor="#FFD369"
              onSlidingComplete={() => {}}              
            />
            <View style={styles.progressLabelContainer}>
              <Text style={styles.ProgressLabelTxt}>0:00</Text>
              <Text style={styles.ProgressLabelTxt}>3.55</Text>
            </View>
          </View>
          <View style={styles.musicControls}>
            <TouchableOpacity onPress={() => {}}>
              <Ionicons name="play-skip-back-outline" size={30} color="#ffff00" style={{marginTop: 15}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Ionicons name="ios-pause-circle-outline" size={60} color="#ffff00" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Ionicons name="play-skip-forward-outline" size={30} color="#ffff00" style={{marginTop: 15}} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.bottomControls}>
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
export default SongPlayer;

const styles = StyleSheet.create({
  // Beginning of Container
  container: {
    flex: 1,
    backgroundColor: 'rgb(56,56,56)',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // End of Container

  // Beginning of image
  img: {
    width: 300,
    height: 350,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  artwork: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 30,
  },

  // End of Image

  // Beginning of text
  txt: {
    color: '#fffaf0',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // End of text

  // Beginning of Slider

  slider: {
    width: 350,
    height: 40,
    marginTop: 20,
    flexDirection: 'row',
  },
  progressLabelContainer: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLabelTxt: {
    color: '#228b22',
  },
  // End of Slider

// Beginning of music Controls
  musicControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },

// End of music Controls

  // Beginning of bottom Container
  bottomContainer: {
    borderTopWidth: 1,
    borderTopColor: 'black',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
  },
  bottomControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  // End of Container 5
});
