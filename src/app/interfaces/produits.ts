//interface for a product

export interface simpleProduct {
  id: string;
  name: string;
  description:string;
  image:string;
  price?:string;
  category?:string;
  promo: boolean;
  promoval?:number;    // le ? montre que l'element est optionel
}
