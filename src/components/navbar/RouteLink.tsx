import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';

interface IRouteLink {
  route: string;
  link: string;
}

const RouteLink: React.FC<IRouteLink> = ({ route, link }: IRouteLink) => {
  const { pathname } = useLocation();
  const isSelected = pathname === link;

  console.log(pathname, route);

  return (
    <Link
      to={link}
      className={clsx('flex-1 border-b-2 border-gray-600 py-5 text-center text-xl transition-colors', {
        '!border-sky-600': isSelected,
      })}
    >
      {route}
    </Link>
  );
};

export default RouteLink;
