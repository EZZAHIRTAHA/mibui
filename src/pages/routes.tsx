import {RouteObject} from 'react-router/dist/lib/context';
import App from '../App.tsx';
import {COMPONENT_ROUTES} from './Components';
import {FORM_ROUTES} from './Forms';

import {RouteEnum} from '../@types/Route.ts';

const ROUTES: RouteObject = {
  id: RouteEnum.Home,
  path: '/',
  element: <App/>,
  children: [
    COMPONENT_ROUTES,
    FORM_ROUTES,
  ]
};


export default ROUTES;