import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const cara = require('../imgs/moeda_cara.png');
const coroa = require('../imgs/moeda_coroa.png');

export default class Jogando extends Component {
  render() {
    return (
        <View style={styles.view}>
         <Image source={cara}></Image>
         <Image source={coroa}></Image>
        </View>
    );
  }
}

const styles = StyleSheet.create({
 view:{
  flex: 1,
  backgroundColor: '#61bd8c', 
  alignItems: 'center',
  justifyContent: 'center'
 }
});