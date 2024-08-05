import Colors from '../pages/Colors';
import Home from '../pages/Home';
import Screens from '../pages/Screens';
import Spacings from '../pages/Spacings';
import Typographies from '../pages/Typographies';

export const ROUTES = {
  home: '/',
  colors: '/colors',
  spacings: '/spacings',
  screens: '/screens',
  typographies: '/typographies',
};

const routerChildren = [
  { path: ROUTES.home, element: <Home /> },
  { path: ROUTES.colors, element: <Colors /> },
  { path: ROUTES.spacings, element: <Spacings /> },
  { path: ROUTES.screens, element: <Screens /> },
  { path: ROUTES.typographies, element: <Typographies /> },
];

export default routerChildren;
