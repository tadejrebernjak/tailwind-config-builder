import { Outlet } from 'react-router-dom';

import Header from '../components/Header';

const Root: React.FC = () => {
  return (
    <div className="flex min-h-screen w-screen flex-col bg-gradient-to-tr from-indigo-950 to-sky-950 text-gray-200">
      <Header />

      <main className="mx-auto flex w-full max-w-5xl flex-1 p-5 md:p-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
