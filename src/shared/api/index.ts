import axios from 'axios';
import { ClotheType } from 'src/shared/types';

export const getClothes = () => axios({
  method: 'GET', url: 'https://wegoapp.ru/api/nft/clothes', headers: {
    userId: 1,
  }
}) as Promise<ClotheType[]>

export const getUsual = () => axios({
  method: 'GET', url: 'https://wegoapp.ru/api/nft/usual', headers: {
    userId: 1,
  }
}) as Promise<ClotheType[]>


export const fetchBuyNft = (uri: string, currency: string) => axios({
  method: 'POST',
  url: `https://wegoapp.ru/api/nft/buy`,
  data: {
    uri,
    currency,
  },
  headers: {
    userId: 1,
  }
}).then(data => data.data);

