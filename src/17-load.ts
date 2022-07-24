import _ from 'lodash';

const data = [
  {
    username: 'nix',
    role: 'admin'
  },
  {
    username: 'valen',
    role: 'seller'
  },
  {
    username: 'zule',
    role: 'seller'
  },
  {
    username: 'san',
    role: 'customer'
  }
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
