export enum category {
  ENTRY = "Entrada",
  MAIN_DISH = "Prato principal",
  DESSERT = "Sobremesa",
  DRINK = "Bebida"
}

export interface IMenu {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string
}

export interface IMenuCardProps {
  name: string;
  description: string;
  price: number;
  category: string;
}

export interface IMenuListProps {
  itens: IItemsFromMenu
}

export interface IItemsFromMenu {
  [index: string]: any
  ENTRY: Array<IMenu>;
  MAIN_DISH: Array<IMenu>;
  DESSERT: Array<IMenu>;
  DRINK: Array<IMenu>;
}