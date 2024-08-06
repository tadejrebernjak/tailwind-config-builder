import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import ConfigSidebar from '../components/config-output/ConfigSidebar';
import Navbar from '../components/navbar/Navbar';

const Root: React.FC = () => {
  return (
    <div className="max-w-screen flex min-h-screen flex-col bg-gradient-to-tr from-indigo-950 to-sky-950 text-gray-200">
      <Header />

      <div className="mx-auto mb-10 w-full max-w-7xl flex-1 rounded-3xl border-2 border-gray-700 bg-slate-950 bg-opacity-25">
        <Navbar />
        <main className="p-5 md:p-10">
          <Outlet />
        </main>
      </div>

      <ConfigSidebar />
    </div>
  );
};

export default Root;
