import Colors from '@/pages/Colors';
import General from '@/pages/General';
import Screens from '@/pages/Screens';
import Spacings from '@/pages/Spacings';
import Typographies from '@/pages/Typographies';

export const ROUTES = {
  general: '/',
  colors: '/colors',
  spacings: '/spacings',
  screens: '/screens',
  typographies: '/typographies',
};

const routerChildren = [
  { path: ROUTES.general, element: <General /> },
  { path: ROUTES.colors, element: <Colors /> },
  { path: ROUTES.spacings, element: <Spacings /> },
  { path: ROUTES.screens, element: <Screens /> },
  { path: ROUTES.typographies, element: <Typographies /> },
];

export default routerChildren;
