import axios from 'axios';
import { API_URL, USER_ID } from 'src/shared/consts/api';

export type CoinsInfo = {
  coinsAmount: number;
  maticAmount: number;
}

export const getCoins = () =>
  axios
    .get(`${API_URL}/wallet/coin`, { params: { userId: USER_ID } })
    .then(data => data.data) as Promise<any>;

