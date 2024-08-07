import { RiTailwindCssFill } from 'react-icons/ri';

const Header: React.FC = () => {
  return (
    <header className="p-10">
      <h1 className="flex items-center justify-center gap-3 text-center text-4xl font-semibold uppercase text-sky-400">
        <RiTailwindCssFill className="mt-1" />
        Tailwind Config Builder
      </h1>
    </header>
  );
};

export default Header;
