import { Outlet } from 'react-router-dom';
import './App.css'
import { Sidebar } from 'src/widgets/layout/Sidebar'
import cn from 'classnames';

export const Layout = () =>
    <div className={cn('h-full grid grid-cols-[83px_1fr_400px]')}>
    <Sidebar />
    <div className="p-8 overflow-x-auto">
      <Outlet />
    </div>
    <div className="bg-gray-200">
      // right sidebar
    </div>
  </div>
