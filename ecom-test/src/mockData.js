export const mockProducts = [
  {
    id: 1,
    title: "Смарт-часы X100",
    price: 7490,
    category: "Гаджеты",
    image: "https://example.com/img/1.jpg",
    description: "Водонепроницаемые, GPS, 7-дневный аккумулятор"
  },
  {
    id: 2,
    title: "Наушники JBL",
    price: 10000,
    category: "Аудио",
    image: "https://example.com/img/1.jpg",
    description: "Шумоподавление"
  },
  {
    id: 3,
    title: "Рюкзак xiaomi",
    price: 2500,
    category: "Аксессуары",
    image: "https://example.com/img/1.jpg",
    description: "Прочный материал, вмещается ноутбук до 15 дюймов"
  },
  {
    id: 4,
    title: "Кофемашина Redmond",
    price: 14000,
    category: "Бытовая техника",
    image: "https://example.com/img/1.jpg",
    description: "Готовит вкусный кофе"
  }
];

export const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts);
    }, 500);
  });
};