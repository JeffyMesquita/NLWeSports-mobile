import { View, Image, FlatList } from 'react-native';
import { GAMES } from '../../utils/games';

import logoPng from '../../assets/logo-nlw-esports.png';
import { GameCard } from '../../components/GameCard';
import { Heading } from '../../components/Heading';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoPng} style={styles.logo} />

      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o jogo que deseja jogar..."
      />

      <FlatList
        data={GAMES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />

    </View>
  );
}
