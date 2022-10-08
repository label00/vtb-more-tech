import { Outlet } from 'react-router-dom';
import './App.css'
import { SidebarLeft } from 'src/widgets/layout/SidebarLeft'
import cn from 'classnames';
import SideBar from 'src/widgets/layout/SideBar'
import 'src/styles/styles.scss';


export const Layout = () =>
    <div className={cn('h-full grid grid-cols-[83px_1fr_400px]')}>
    <SidebarLeft />
    <div className="p-8 overflow-x-auto">
      <Outlet />
    </div>
    <div className="bg-gray-200">
      <SideBar/>
    </div>
  </div>
