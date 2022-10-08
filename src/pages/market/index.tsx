import { H2, H3, Tab, TabContent, Tabs } from 'src/shared/ui';
import { ProductCard } from 'src/widgets/market/ProductCard';
import { FoodSection } from 'src/pages/market/FoodSection';
import { useGate, useStore } from 'effector-react';
import { gate, clothes$, usual$ } from 'src/pages/market/model';

export const MarketPage = () => {
  useGate(gate);
  const data = useStore(clothes$);
  const other = useStore(usual$);

  return (
    <div>
      <H2 className="mb-10">Маркет</H2>

      <Tabs defaultValue="market" trigger={
        <>
          <Tab value="market">Маркет</Tab>
          <Tab value="event">Развлечения</Tab>
          <Tab value="food">Еда</Tab>
          <Tab value="shop">Товары от сотрудников</Tab>
        </>
      }>
        <TabContent value="market">
          <H3 className="mb-6">Брендированные</H3>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-4">
            { !data.length && <div>Нет товаров</div> }
            {
              data.map((item, idx) =>
                <ProductCard key={idx} id={item.uri} title={item.name} price={item.rublePrice} img={item.imageUrl} />)
            }
          </div>

          <H3 className="my-6">Разное</H3>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-4">
            { !data.length && <div>Нет товаров</div> }
            {
              other.map((item, idx) =>
                <ProductCard key={idx} id={item.uri} title={item.name} price={item.rublePrice} img={item.imageUrl} />)
            }
          </div>
        </TabContent>

        <TabContent value="event">
          <H3 className="mb-6">Подписки</H3>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-4">
            <ProductCard id="12" title="Сумка VTB черного цвета" price={125} img="/nft/nft-2.png" />
            <ProductCard id="12" title="Сумка VTB черного цвета" price={125} img="/nft/nft-2.png" />
            <ProductCard id="12" title="Сумка VTB черного цвета" price={125} img="/nft/nft-2.png" />
            <ProductCard id="12" title="Сумка VTB черного цвета" price={125} img="/nft/nft-2.png" />
          </div>

          <H3 className="my-6">Разное</H3>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-4">
            <ProductCard id="12" title="Сумка VTB черного цвета" price={125} img="/nft/nft-2.png" />
            <ProductCard id="12" title="Сумка VTB черного цвета" price={125} img="/nft/nft-2.png" />
            <ProductCard id="12" title="Сумка VTB черного цвета" price={125} img="/nft/nft-2.png" />
            <ProductCard id="12" title="Сумка VTB черного цвета" price={125} img="/nft/nft-2.png" />
          </div>
        </TabContent>

        <TabContent value="food">
          <FoodSection />
        </TabContent>
      </Tabs>
    </div>
  )
}
