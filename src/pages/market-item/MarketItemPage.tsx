import ProductInfo from 'src/widgets/market/product-info/ProductInfo';
import { useParams } from 'react-router-dom';
import { useGate } from 'effector-react';
import { MarketItemModel } from 'src/pages/market-item/model';

type MarketItemProps = {
};
export const MarketItemPage = (props: MarketItemProps) => {
  const params = useParams();
  useGate(MarketItemModel.gate, params.id!)

  return (
    <ProductInfo />
  );
};
