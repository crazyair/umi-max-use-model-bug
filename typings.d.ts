import '@umijs/max/typings';

declare module 'react-router' {
  export interface RouteObject {
    name?: string;
  }
}
