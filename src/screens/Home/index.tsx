import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { FlatList, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import logoPng from '../../assets/logo-nlw-esports.png';
import { Background } from '../../components/Background';
import { GameCard } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import { Games, listGames } from '../../services/games/listGames';
import { styles } from './styles';

export function Home() {
  const navigation = useNavigation();

  const [games, setGames] = useState<Games[]>([] as Games[]);

  const handleOpenGame = ({id, title, bannerUrl}: Games) => {
    navigation.navigate('game', { id, title, bannerUrl });
  };

  const loadGamesList = useCallback(async () => {
    const response = await listGames();

    setGames(response.data);
  }, [listGames, setGames]);

  useEffect(() => {
    loadGamesList();
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoPng} style={styles.logo} />

        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o jogo que deseja jogar..."
        />

        <FlatList
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GameCard data={item} onPress={() => handleOpenGame(item)} />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}
