(() => {
  const login = (data: {email: string, password: number}) => {
    console.log(data.email, data.password);
  }

  login({
    email: 'nest@gamil.com',
    password: 123233,
  })

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  }

  addProduct({
    title: 'Prod1',
    createdAt: new Date(1993,1,1),
    stock: 1,
    size: "XL"
  })
  console.log(products);

})();
