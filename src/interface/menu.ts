export interface ISize {
  name: string;
  price: string;
  size: number;
}

export interface IMenuItem {
  avatar?: string | null;
  name: string;
  description: string;
  type: string;
  size: ISize[];
}
