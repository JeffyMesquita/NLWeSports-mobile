import { AuthSessionUserResponse } from './authSession';

export interface GameParams {
  id: string;
  title: string;
  bannerUrl: string;
}

export interface HomeParams {
  user: AuthSessionUserResponse;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      signIn: undefined;
      home: HomeParams;
      game: GameParams;
    }
  }
}