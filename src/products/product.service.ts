import { Porduct } from './product.model'

export const products: Porduct[] = [];

export const createProduct = (data: Porduct) => {
  products.push(data);
}

export const calcStock = (): number => {
  let total = 0;
  products.forEach((item) =>
  total += item.stock
  );
  return total;
}
