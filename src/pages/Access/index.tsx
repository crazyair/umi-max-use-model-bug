import { matchRoutes } from '@umijs/max';

const AccessPage: React.FC = () => {
  // const d = useModel('aaa');
  const routes = matchRoutes([], location.pathname);
  console.log('routes', routes?.[0].params);
  return <>11</>;
};

export default AccessPage;
