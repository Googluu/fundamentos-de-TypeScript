(() => {
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null; //
  myNumber = 123;

  let myString: string | null = null;
  myString = 'assa';

  function h1(name: string | null) {
    let hello = 'hola '
    if(name) {
      hello += name
    } else {
      hello += ' noboby'
    }
    console.log(hello)
  }

  function h2(name: string | null) {
    let hello = 'hola '
    hello += name?.toLowerCase() || 'noboby'
    console.log(hello)
  }

  h1('nice')
  h1(null)

  h2('nice')
  h2(null)
})();
