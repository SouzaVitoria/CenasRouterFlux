import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Principal from './src/components/Principal';
import SobreJogo from './src/components/SobreJogo';
import OutrosJogos from './src/components/OutrosJogos';
import Jogando from './src/components/Jogando';

export default class App extends Component {
  render() {
    return (
      <Router sceneStyle={{}}>
        <SafeAreaView style={{ backgroundColor: '#61bd8c', flex: 1 }}>
          <Scene key='principal' component={Principal} title='CARA OU COROA' initial />
          <Scene key='sobrejogo' component={SobreJogo} title='SOBRE O JOGO' />
          <Scene key='outrosjogos' component={OutrosJogos} title='OUTROS JOGOS' />
          <Scene key='jogando' component={Jogando} title='CARA OU COROA' />
        </SafeAreaView>
      </Router>
    );
  }
}