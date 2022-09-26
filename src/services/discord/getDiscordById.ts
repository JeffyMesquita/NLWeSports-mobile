import { api } from '../api';

export interface Discord {
  discord: string;
}

interface DiscordResponse {
  result: string;
  message: string;
  data: Discord;
}

const getDiscordById = async (adsId: string): Promise<DiscordResponse> => {
  const response = await api
    .get(`/ads/${adsId}/discord`)
    .then((res) => res)
    .catch((error) => error.response);

  return response.data;
};

export { getDiscordById };
