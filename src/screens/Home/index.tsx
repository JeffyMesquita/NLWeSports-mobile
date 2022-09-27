import { useNavigation, useRoute } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';

import logoPng from '../../assets/logo-nlw-esports.png';
import { Background } from '../../components/Background';
import { GameCard } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import { Games, listGames } from '../../services/games/listGames';
import { THEME } from '../../theme';
import { styles } from './styles';

export function Home() {
  const navigation = useNavigation();
  const route = useRoute();

  const [games, setGames] = useState<Games[]>([] as Games[]);

  const handleOpenGame = ({ id, title, bannerUrl }: Games) => {
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
        <View style={styles.header}>
          <View style={styles.right} />
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo name="log-out" color={THEME.COLORS.CAPTION_300} size={20} />
          </TouchableOpacity>
        </View>

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
