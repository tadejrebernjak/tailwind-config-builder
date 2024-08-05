import clsx from 'clsx';
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

import ConfigOutput from './ConfigOutput';

const ConfigSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((current) => !current);
  };

  return (
    <aside
      className={clsx(
        'bg-vscode fixed right-0 h-screen w-fit origin-right rounded-l-lg border-l-8 border-sky-600 transition-transform',
        { 'translate-x-full': !isOpen },
      )}
    >
      <button
        className="absolute -left-16 top-1/2 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-l-full bg-sky-600 text-3xl"
        onClick={toggleOpen}
      >
        <FaArrowLeft
          className={clsx('transition-transform duration-300', {
            'rotate-180': isOpen,
          })}
        />
      </button>
      <ConfigOutput />
    </aside>
  );
};

export default ConfigSidebar;
