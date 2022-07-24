import { subDays, format } from 'date-fns'

const data = new Date(1998, 1, 28);
const rta = subDays(data, 30);
const str = format(rta, 'yyyy-MM-dd');

console.log(str);
