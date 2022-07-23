(() => {
  // de froma inferida
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice: ', productPrice);

  // de forma explicita
  let customerAge: number = 34;
  // customerAge = customerAge + '1'; // 341
  customerAge = customerAge + 1;
  console.log('customerAge', customerAge);

  let productInStock: number;
  console.log('productInStock', productInStock);
  if(productInStock > 10) {
    console.log('is greater')
  }

  let discount = parseInt('100');
  console.log('discount', discount);
  if(discount <= 200) {
    console.log('apply')
  } else {
    console.log('not apply')
  }

  let hex = 0xff;
  console.log('hex', hex);
  let bin = 0b10101;
  console.log('bin', bin);
})();
