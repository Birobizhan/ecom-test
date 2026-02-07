export const mockProducts = [
  {
    id: 1,
    title: "Смарт-часы X100",
    price: 7490,
    category: "Гаджеты",
    image: "https://avatars.mds.yandex.net/get-mpic/5345452/img_id1679764090628242133.jpeg/orig",
    description: "Водонепроницаемые, GPS, 7-дневный аккумулятор"
  },
  {
    id: 2,
    title: "Наушники JBL",
    price: 10000,
    category: "Аудио",
    image: "https://avatars.mds.yandex.net/i?id=c077e13eb9d698e6644853d47d67abce_l-4795551-images-thumbs&n=13",
    description: "Шумоподавление"
  },
  {
    id: 3,
    title: "Рюкзак xiaomi",
    price: 2500,
    category: "Аксессуары",
    image: "https://avatars.mds.yandex.net/i?id=2a0000019b6f13f187b384efe237d8e9faf8-16482436-yarec&n=13",
    description: "Прочный материал, вмещается ноутбук до 15 дюймов"
  },
  {
    id: 4,
    title: "Кофемашина Redmond",
    price: 14000,
    category: "Бытовая техника",
    image: "https://avatars.mds.yandex.net/i?id=3c45f55def1c1d2d1eb3f09e9c16cb63_l-9222726-images-thumbs&n=13",
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
