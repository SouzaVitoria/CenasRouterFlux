import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

const logo = require("../imgs/logo.png");
const btnJogar = require("../imgs/botao_jogar.png");
const btnSobreJogo = require("../imgs/sobre_jogo.png");
const btnOutrosJogos = require("../imgs/outros_jogos.png");

export default class Principal extends Component {
 render() {
  return (
   <SafeAreaView style={styles.styleView}>
    <View style={styles.viewJogo}>
     <Image source={logo}></Image>
     <TouchableHighlight
      onPress={() => { Actions.jogando(); }}
     >
      <Image source={btnJogar}></Image>
     </TouchableHighlight>

    </View>
    <View style={styles.viewRodape}>
     <TouchableHighlight
      onPress={() => { Actions.sobrejogo(); }}
     >
      <Image source={btnSobreJogo}></Image>
     </TouchableHighlight>
     <TouchableHighlight
      onPress={() => { Actions.outrosjogos(); }}
     >
      <Image source={btnOutrosJogos}></Image>
     </TouchableHighlight>
    </View>
   </SafeAreaView>
  );
 }
}

const styles = StyleSheet.create({
 styleView: {
  fontSize: 25,
  backgroundColor: '#61bd8c',
  flex: 1
 },
 viewJogo: {
  alignItems: 'center',
  justifyContent: 'center',
  flex: 10
 },
 viewRodape: {
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  flexDirection: 'row',
  marginHorizontal: 5,
  flex: 1
 }
})
