import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { useState } from 'react';
import cn from 'classnames';

export const Layout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn('h-full grid', {
      'grid-cols-[83px_1fr_400px]':!open,
      'grid-cols-[250px_1fr_400px]':open,
    })}>
      <div className="bg-white border-r border-r-slate-200">
        <Sidebar open={open} onToggle={() => setOpen(prev => !prev)}/>
      </div>
      <div className="p-8 overflow-x-auto">
        <Outlet/>
      </div>
      <div className="bg-gray-200">
        // right sidebar
      </div>
    </div>
  );
}
