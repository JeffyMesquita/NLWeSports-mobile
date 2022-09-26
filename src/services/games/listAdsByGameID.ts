import { api } from '../api';

export interface Ads {
  hourEnd: string;
  hourStart: string;
  id: string;
  name: string;
  discord: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

interface GamesResponse {
  result: string;
  message: string;
  data: Ads[];
}

const listAdsByGameID = async (gameID: string): Promise<GamesResponse> => {
  const response = await api
    .get(`/games/${gameID}/ads`)
    .then((res) => res)
    .catch((error) => error.response);

  return response.data;
};

export { listAdsByGameID };
