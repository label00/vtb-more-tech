import { createEffect, createStore, sample } from 'effector';
import { createGate } from 'effector-react';
import { ClotheType } from 'src/shared/types';
import { getClothes } from 'src/shared/api';

const fetchClothes = createEffect(() => getClothes())
const gate = createGate<string>();
const store$ = createStore<ClotheType | null>(null);

sample({
  clock: gate.open,
  target: fetchClothes,
})

sample({
  clock: fetchClothes.done,
  source: gate.open,
  fn: (uri, { result }) => result.find(item => item.uri === uri) ?? null,
  target: store$,
})

export const MarketItemModel = {
  gate,
  store$,
  fetch: fetchClothes,
}
