import { createEffect, createEvent, sample } from 'effector';
import { toast } from 'react-toastify';
import { ClotheType } from 'src/shared/types';
import { fetchBuyNft } from 'src/shared/api/market';

const clickedOnBuy = createEvent<ClotheType>();
const buyNft = createEffect((info: ClotheType) => {
  return fetchBuyNft(info.uri, 'RUBLE')
});

buyNft.done.watch(() => {
  toast('Вы купили')
})

buyNft.fail.watch(() => {
  toast('Что-то пошло не так', {
    type: 'error'
  })
})


sample({
  clock: clickedOnBuy,
  target: buyNft,
})

const loading$ = buyNft.pending;

export const ProductInfoModel = {
  clickedOnBuy,
  loading$,
}
