import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal';
import settings from '../../settings.json';

const ProductCard = ({ model, image, price, size, colorData = [] }) => {
  const [selectedSize, setSelectedSize] = useState(size || '');
  const [selectedColor, setSelectedColor] = useState(colorData[0] || null);

  // Filter out duplicate colors based on hex value
  const uniqueColors = colorData.filter((color, index, self) =>
    index === self.findIndex((c) => c.hex === color.hex)
  );

  const handleBuy = () => {
    const message = `Здравствуйте! Интересует ${model} ${selectedSize}мм ${selectedColor?.name || ''} за ${price} ${settings.currency}`;
    const encodedMessage = encodeURIComponent(message);
    console.log(encodedMessage);  
    const whatsappUrl = `https://wa.me/${settings.whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-[#1d1d1f] rounded-2xl p-4 text-center">
      <div className="aspect-square mb-4 flex items-center justify-center">
        <img src={image} alt={model} className="w-40 h-auto" />
      </div>
      <h2 className="text-lg font-bold mb-1">{model}</h2>
      <div className="text-sm text-gray-400 mb-2 flex flex-wrap gap-2 justify-center">
        {size && (
          <button
            className={`px-3 py-1 rounded-full ${
              selectedSize === size
                ? 'bg-gray-500 text-white hover:bg-gray-600'
                : 'bg-blue-500 text-white'
            }`}
          >
            {size} мм
          </button>
        )}
      </div>
      <div className="flex flex-col items-center gap-2 mb-3">
        <div className="flex justify-center gap-1">
          {uniqueColors.map((color) => (
            <button
              key={color.hex}
              className={`w-4 h-4 rounded-full transition-transform ${
                selectedColor?.hex === color.hex
                  ? 'ring-2 ring-offset-2 ring-blue-500 ring-offset-[#1d1d1f] scale-110'
                  : 'hover:scale-110'
              }`}
              style={{ backgroundColor: color.hex }}
              onClick={() => setSelectedColor(color)}
              title={color.name}
            />
          ))}
        </div>
        <span className="text-sm text-gray-400">{selectedColor?.name}</span>
      </div>
      <p className="text-sm text-gray-400 mb-3">от {price} ₸</p>
      <div className="space-y-2">
        <button 
          onClick={handleBuy}
          className="w-full border border-gray-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Купить
        </button>
      </div>
    </div>
  );
};

const FeatureIcon = ({ icon, title, description }) => (
  <div className="text-center p-4">
    <div className="w-16 h-16 mx-auto mb-3 bg-[#2a2a2b] rounded-full flex items-center justify-center">
      <img src={icon} alt={title} className="w-8 h-8" />
    </div>
    <h3 className="text-white text-lg font-semibold mb-1">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const StoreWatchModal = ({ isOpen, onClose }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await axios.get('https://admin-dashboard-qff2.vercel.app/api/product?category=watch');
    console.log(response.data);
    setProducts(response.data);
  };

  const productsView = products.map(product => ({
    model: product.model,
    image: product.image,
    price: product.price,
    size: product.size,
    colorData: product.colors
  }));

  const features = [
    {
      icon: "/icons/watchos.svg",
      title: "watchOS",
      description: "Создан для Apple Watch"
    },
    {
      icon: "/icons/compare.svg",
      title: "Сравнение",
      description: "Сравните модели Apple Watch"
    },
    {
      icon: "/icons/health.svg",
      title: "Здоровье",
      description: "Мониторинг здоровья и фитнеса"
    },
    {
      icon: "/icons/accessories.svg",
      title: "Ремешки",
      description: "Ремешки и другие аксессуары"
    },
    {
      icon: "/icons/support.svg",
      title: "Поддержка",
      description: "Помощь в выборе и использовании"
    },
    {
      icon: "/icons/delivery.svg",
      title: "Доставка",
      description: "Бесплатная доставка по всему Казахстану"
    }
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Apple Watch</h1>
          <p className="text-gray-400">Купить Apple Watch в iRepublic</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsView.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="bg-[#1d1d1f] rounded-2xl p-6 text-center my-8">
          <h2 className="text-2xl font-bold mb-2">Trade-in</h2>
          <p className="text-gray-400 mb-4">
            Обменяйте свои старые Apple Watch и получите скидку на новые
          </p>
          <a href="/trade-in" className="text-blue-500 hover:underline">
            Узнать подробнее →
          </a>
        </div>

        <div className="border-t border-[#424245] pt-8 mt-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {features.map((feature, index) => (
              <FeatureIcon key={index} {...feature} />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm">
          <a href="#" className="text-blue-500 hover:underline">Сравнить модели</a>
          <span className="text-gray-400">•</span>
          <a href="#" className="text-blue-500 hover:underline">Руководство пользователя</a>
          <span className="text-gray-400">•</span>
          <a href="#" className="text-blue-500 hover:underline">watchOS</a>
          <span className="text-gray-400">•</span>
          <a href="#" className="text-blue-500 hover:underline">Ремешки</a>
          <span className="text-gray-400">•</span>
          <a href="#" className="text-blue-500 hover:underline">Поддержка</a>
        </div>
      </div>
    </Modal>
  );
};

export default StoreWatchModal; 