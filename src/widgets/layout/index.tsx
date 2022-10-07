import { Outlet } from 'react-router-dom';
import { Sidebar } from 'src/widgets/layout/Sidebar';

export const Layout = () =>
  <div className="h-full grid grid-cols-[83px_1fr_400px]">
    <div className="bg-red-200">
      <Sidebar />
    </div>
    <div className="p-8 overflow-x-auto">
      <Outlet />
    </div>
    <div className="bg-gray-200">
      // right sidebar
    </div>
  </div>
