import { Card, H2, H3, Tab, TabContent, Tabs } from 'src/shared/ui';
import { ProductCard } from 'src/widgets/market/ProductCard';
import { FoodCard } from 'src/widgets/market/FoodCard';
import { FoodSection } from 'src/pages/market/FoodSection';

export const MarketPage = () => {
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
            <ProductCard id="12" title="Сумка VTB черного цвета" count={32} price={125} img="/nft/nft-2.png" />
            <ProductCard id="12" title="Сумка VTB черного цвета" count={32} price={125} img="/nft/nft-2.png" />
            <ProductCard id="12" title="Сумка VTB черного цвета" count={32} price={125} img="/nft/nft-2.png" />
            <ProductCard id="12" title="Сумка VTB черного цвета" count={32} price={125} img="/nft/nft-2.png" />
          </div>

          <H3 className="my-6">Разное</H3>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-4">
            <ProductCard id="12" title="Сумка VTB черного цвета" count={32} price={125} img="/nft/nft-2.png" />
            <ProductCard id="12" title="Сумка VTB черного цвета" count={32} price={125} img="/nft/nft-2.png" />
            <ProductCard id="12" title="Сумка VTB черного цвета" count={32} price={125} img="/nft/nft-2.png" />
            <ProductCard id="12" title="Сумка VTB черного цвета" count={32} price={125} img="/nft/nft-2.png" />
          </div>
        </TabContent>

        <TabContent value="event">
          <H3 className="mb-6">Подписки</H3>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-4">
            <ProductCard id="12" title="Сумка VTB черного цвета" count={32} price={125} img="/nft/nft-2.png" />
            <ProductCard id="12" title="Сумка VTB черного цвета" count={32} price={125} img="/nft/nft-2.png" />
            <ProductCard id="12" title="Сумка VTB черного цвета" count={32} price={125} img="/nft/nft-2.png" />
            <ProductCard id="12" title="Сумка VTB черного цвета" count={32} price={125} img="/nft/nft-2.png" />
          </div>

          <H3 className="my-6">Разное</H3>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-4">
            <ProductCard id="12" title="Сумка VTB черного цвета" count={32} price={125} img="/nft/nft-2.png" />
            <ProductCard id="12" title="Сумка VTB черного цвета" count={32} price={125} img="/nft/nft-2.png" />
            <ProductCard id="12" title="Сумка VTB черного цвета" count={32} price={125} img="/nft/nft-2.png" />
            <ProductCard id="12" title="Сумка VTB черного цвета" count={32} price={125} img="/nft/nft-2.png" />
          </div>
        </TabContent>

        <TabContent value="food">
          <FoodSection />
        </TabContent>
      </Tabs>
    </div>
  )
}
