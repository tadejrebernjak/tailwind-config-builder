import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from './Root';
import routerChildren from './routes';

const appRouter = createBrowserRouter([{ path: '/', children: [...routerChildren], element: <Root /> }]);

const AppRouterProvider = () => <RouterProvider router={appRouter} />;

export default AppRouterProvider;
