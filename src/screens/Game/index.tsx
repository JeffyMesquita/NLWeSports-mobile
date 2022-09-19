import { useCallback, useEffect, useState } from 'react';
import { listAdsByGameID, Ads } from '../../services/games/listAdsByGameID';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

import { THEME } from '../../theme';
import { styles } from './styles';

import logoImg from '../../assets/logo-nlw-esports.png';
import { Background } from '../../components/Background';

import { Heading } from '../../components/Heading';
import { GameParams } from '../../@types/navigation';
import { DuoCard } from '../../components/DuoCard';

export function Game() {
  const route = useRoute();
  const navigation = useNavigation();
  const game = route?.params as GameParams;

  const [duos, setDuos] = useState<Ads[]>([] as Ads[]);

  const loadAdsList = useCallback(async () => {
    const response = await listAdsByGameID(game.id);

    setDuos(response.data);
  }, [listAdsByGameID, setDuos]);

  useEffect(() => {
    loadAdsList();
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image source={logoImg} style={styles.logo} />

          <View style={styles.right} />
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />

        <Heading title={game.title} subtitle="Conecte-se e comece a jogar!" />

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={duos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DuoCard data={item} onConnect={() => {}} />
          )}
          contentContainerStyle={[
            duos.length > 0 ? styles.contentList : styles.emptyListContent,
          ]}
          style={styles.containerList}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Não há anúncios publicados para este jogo ainda.
            </Text>
          )}
        />
      </SafeAreaView>
    </Background>
  );
}
