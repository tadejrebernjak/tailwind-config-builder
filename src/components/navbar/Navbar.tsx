import { ROUTES } from '@/navigation/routes';
import RouteLink from './RouteLink';

const Navbar: React.FC = () => {
  const renderedLinks = (Object.keys(ROUTES) as (keyof typeof ROUTES)[]).map((key) => {
    return <RouteLink key={key} route={key} link={ROUTES[key]} />;
  });

  return <nav className="flex capitalize">{renderedLinks}</nav>;
};

export default Navbar;
