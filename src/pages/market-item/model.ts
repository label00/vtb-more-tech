import { createEffect, restore, sample } from 'effector';
import { createGate } from 'effector-react';
import { getProduct } from 'src/shared/api';

const fetchClothes = createEffect((uri: string) => getProduct(uri))
const gate = createGate<string>();
const store$ = restore(fetchClothes.done.map(({result}) => result), null);

sample({
  clock: gate.open,
  target: fetchClothes,
})

store$.reset(gate.close);

export const MarketItemModel = {
  gate,
  store$,
  fetch: fetchClothes,
}
