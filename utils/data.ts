import ShoppingImage2 from '../public/images/shopping-list-2.jpg';
import ShoppingImage from '../public/images/shopping-list.jpg';

const shoppingItems = [
  { id: crypto.randomUUID(), name: 'chleb', price: 3, currency: 'PLN', category: 'pieczywo', image: ShoppingImage },
  {
    id: crypto.randomUUID(),
    name: 'masło',
    price: 5,
    currency: 'PLN',
    category: 'produkty mleczne',
    image: ShoppingImage2
  },
  {
    id: crypto.randomUUID(),
    name: 'drożdżówka',
    price: 2,
    currency: 'PLN',
    category: 'pieczywo',
    image: ShoppingImage
  },
  {
    id: crypto.randomUUID(),
    name: 'ser',
    price: 2,
    currency: 'PLN',
    category: 'pieczywo',
    image: ShoppingImage
  },
  {
    id: crypto.randomUUID(),
    name: 'kiełba',
    price: 2,
    currency: 'PLN',
    category: 'pieczywo',
    image: ShoppingImage
  }
];

const shoppingItems2 = [
  { id: crypto.randomUUID(), name: 'chleb', price: 3, currency: 'PLN', category: 'pieczywo', image: ShoppingImage },
  {
    id: crypto.randomUUID(),
    name: 'margaryna',
    price: 2,
    currency: 'PLN',
    category: 'produkty mleczne',
    image: ShoppingImage2
  },
  {
    id: crypto.randomUUID(),
    name: 'jagodzianka',
    price: 3,
    currency: 'PLN',
    category: 'pieczywo',
    image: ShoppingImage
  },
  {
    id: crypto.randomUUID(),
    name: 'ser',
    price: 2,
    currency: 'PLN',
    category: 'pieczywo',
    image: ShoppingImage
  },
  {
    id: crypto.randomUUID(),
    name: 'kiełba',
    price: 2,
    currency: 'PLN',
    category: 'pieczywo',
    image: ShoppingImage
  }
];

export const lists = [{
  id: crypto.randomUUID(),
  items: shoppingItems,
  image: ShoppingImage
},
{
  id: crypto.randomUUID(),
  items: shoppingItems2,
  image: ShoppingImage2

},
];