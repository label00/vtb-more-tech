import { AboutUser, MainInfo, NftEvents } from 'src/widgets';
import { Tab, TabContent, Tabs } from 'src/shared/ui';
import { AchievementList } from 'src/widgets/profile/AchievementList';

export const ProfilePage = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

  return (
    <Tabs defaultValue="profile" trigger={
      <>
        <Tab value="profile">Профиль</Tab>
        <Tab value="achievements">Испытания</Tab>
        <Tab value="nft_event">NFT События</Tab>
        <Tab value="my_shop">Мои товары</Tab>
        <Tab value="posts">Посты</Tab>
        <Tab value="food">Еда</Tab>
      </>
    }>
      <TabContent value="profile">
        <div className="grid gap-4 grid-cols-[450px,_1fr]">
          <MainInfo />
          <AboutUser />
        </div>
      </TabContent>
      <TabContent value="achievements">
        <AchievementList />
      </TabContent>

      <TabContent value="nft_event">
        <NftEvents />
      </TabContent>
    </Tabs>


  )
}
