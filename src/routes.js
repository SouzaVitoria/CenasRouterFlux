import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Principal from './components/Principal';
import SobreJogo from './components/SobreJogo';
import OutrosJogos from './components/OutrosJogos';
import Jogando from './components/Jogando';

const Rotas = () => (
 <Router sceneStyle={{}}>
  <Scene>
   <Scene key='principal' component={Principal} title='CARA OU COROA' initial />
   <Scene key='sobrejogo' component={SobreJogo} title='SOBRE O JOGO' />
   <Scene key='outrosjogos' component={OutrosJogos} title='OUTROS JOGOS' />
   <Scene key='jogando' component={Jogando} title='CARA OU COROA' />
  </Scene>

 </Router>
)

export default Rotas;