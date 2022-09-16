import React from 'react';
import { View, Image } from 'react-native';

import logoPng from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoPng} style={styles.logo} />

      <Heading title="Encontre seu duo!" subtitle="Selecione o jogo que deseja jogar..." />
    </View>
  );
}
