import { AboutUser, MainInfo } from 'src/widgets';
import { Tab, TabContent, Tabs } from 'src/shared/ui';


export const ProfilePage = () => {
  return (
    <Tabs defaultValue="profile" trigger={
      <>
        <Tab value="profile">Профиль</Tab>
        <Tab value="test">Испытания</Tab>
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
    </Tabs>


  )
}
