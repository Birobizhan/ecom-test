import React from 'react';
import './App.css';


function App() {
  const dummyProducts = [
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

  return (
    <div className="container">
      <h1>Магазин товаров</h1>

      <input
        type="text"
        placeholder="Поиск товаров..."
        className="search-input"
      />

      <div className="product-grid">
        {dummyProducts.map(product => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.title} />
            <div className="card-body">
              <h3>{product.title}</h3>
              <span className="price">{product.price.toLocaleString()} ₽</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;