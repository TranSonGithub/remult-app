export interface IRouter {
  path: string;
  element: JSX.Element;
  children?: IRouter[];
}
