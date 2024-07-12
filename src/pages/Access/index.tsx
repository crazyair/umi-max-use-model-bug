import { matchRoutes } from '@umijs/max';

// declare module 'react-router' {
//   export interface RouteObject {
//     name?: string;
//   }
// }

// declare module 'react-router/lib/router' {
// declare module 'react-router' {
//   export interface RouteObject {
//     name?: string;
//   }
// }

const AccessPage: React.FC = () => {
  // const d = useModel('aaa');
  const routes = matchRoutes([], location.pathname);
  console.log('1', routes?.[0].route.name);
  return <>11</>;
};

export default AccessPage;
