import { api } from "../api";

interface Ads {
  ads: number;
}

export interface Games {
  id: string;
  title: string;
  bannerUrl: string;
  _count: Ads;
}

interface GamesResponse {
  result: string;
  message: string;
  data: Games[]
}

const listGames = async (): Promise<GamesResponse> => {
  const response = await api
    .get("/games")
    .then((res) => res)
    .catch((error) => error.response);

  return response.data;
};

export { listGames };
