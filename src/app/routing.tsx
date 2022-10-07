import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'src/widgets/layout';
import { MainPage } from 'src/pages/main';
import { ProfilePage } from 'src/pages/profile';

export const Routing = () =>
  <Routes>
    <Route element={<Layout/>}>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/profile" element={<ProfilePage />}></Route>
      <Route path="/profile/:tab" element={<ProfilePage />}></Route>
    </Route>
    <Route path="*" element={<Navigate to="/"/>}></Route>
  </Routes>
