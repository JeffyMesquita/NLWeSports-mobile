import React, { useCallback, useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GameController } from 'phosphor-react-native';
import * as AuthSession from 'expo-auth-session';

import {  AuthSessionUserResponse} from '../../@types/authSession'

import logoPng from '../../assets/logo-nlw-esports.png';
import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';
import { THEME } from '../../theme';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';



export function SignIn() {
  const navigation = useNavigation();
  const [user, setUser] = useState({} as AuthSessionUserResponse);

  const handleDiscordSignIn = useCallback(async () => {
    const response: AuthSession.AuthSessionResult = await AuthSession.startAsync({
      authUrl:
        'https://discord.com/api/oauth2/authorize?client_id=1024127810069090454&redirect_uri=https%3A%2F%2Fauth.expo.io%2F%40jeffymesquita%2Fmobile&response_type=token&scope=identify',
    });

    fetch('https://discord.com/api/users/@me', {
      headers: {
        authorization: `Bearer ${response.params.access_token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setUser(data));

    console.log(response);
  }, [AuthSession]);

  

  useEffect(() => {
    if(user) {
        navigation.navigate('home', {
          user,
        });
    }
  }, [user])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        
        <Image source={logoPng} style={styles.logo} />

        <Heading title="Entrar" subtitle="Encontre o seu duo e bora jogar." />

        <TouchableOpacity style={styles.button} onPress={handleDiscordSignIn}>
          <GameController color={THEME.COLORS.TEXT} size={20} />

          <Text style={styles.buttonTitle}>Entrar no Discord</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Background>
  );
}
