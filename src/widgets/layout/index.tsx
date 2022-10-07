import { Outlet } from 'react-router-dom';

export const Layout = () =>
  <div className="h-full grid grid-cols-[83px_1fr_400px]">
    <div className="bg-red-200">
      // sidebar
    </div>
    <div className="p-8 overflow-x-auto">
      <Outlet />
    </div>
    <div className="bg-gray-200">
      // right sidebar
    </div>
  </div>
