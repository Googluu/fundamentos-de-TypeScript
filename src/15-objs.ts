(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Porduct= {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }

  const products: Porduct[] = [];

  const addProduct = (data: Porduct) => {
    products.push(data);
  }

  addProduct({
    title: 'Prod1',
    createdAt: new Date(1993,1,1),
    stock: 1,
    size: "XL"
  })
  console.log(products);
  products.push({
    title: 'Prod2',
    createdAt: new Date(1993,2,1),
    stock: 2,
    size: "XL",
  })
})();
