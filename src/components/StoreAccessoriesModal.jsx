import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal';

const ProductCard = ({ model, image, price, category }) => (
  <div className="bg-[#1d1d1f] rounded-2xl p-4 text-center">
    <div className="aspect-square mb-4 flex items-center justify-center">
      <img src={image} alt={model} className="w-40 h-auto" />
    </div>
    <h2 className="text-lg font-bold mb-1">{model}</h2>
    <p className="text-sm text-gray-400 mb-2">{category}</p>
    <p className="text-sm text-gray-400 mb-3">от {price} ₸</p>
    <div className="space-y-2">
      <button className="w-full bg-blue-500 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
        Купить
      </button>
      <button className="w-full border border-gray-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
        В рассрочку
      </button>
    </div>
  </div>
);

const FeatureIcon = ({ icon, title, description }) => (
  <div className="text-center p-4">
    <div className="w-16 h-16 mx-auto mb-3 bg-[#2a2a2b] rounded-full flex items-center justify-center">
      <img src={icon} alt={title} className="w-8 h-8" />
    </div>
    <h3 className="text-white text-lg font-semibold mb-1">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const StoreAccessoriesModal = ({ isOpen, onClose }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await axios.get('https://admin-dashboard-qff2.vercel.app/api/product?category=accessories');
    setProducts(response.data);
  };

  const productsView = products.map(product => ({
    model: product.model,
    image: product.image,
    price: product.price,
    category: product.category
  }));

  const features = [
    {
      icon: "/icons/original.svg",
      title: "Оригинальные",
      description: "Только оригинальные аксессуары"
    },
    {
      icon: "/icons/warranty.svg",
      title: "Гарантия",
      description: "Официальная гарантия Apple"
    },
    {
      icon: "/icons/quality.svg",
      title: "Качество",
      description: "Высокое качество материалов"
    },
    {
      icon: "/icons/compatibility.svg",
      title: "Совместимость",
      description: "Идеальная совместимость с устройствами"
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
          <h1 className="text-4xl font-bold mb-2">Аксессуары</h1>
          <p className="text-gray-400">Купить аксессуары в iRepublic</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsView.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="border-t border-[#424245] pt-8 mt-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {features.map((feature, index) => (
              <FeatureIcon key={index} {...feature} />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm">
          <a href="#" className="text-blue-500 hover:underline">Чехлы</a>
          <span className="text-gray-400">•</span>
          <a href="#" className="text-blue-500 hover:underline">Зарядные устройства</a>
          <span className="text-gray-400">•</span>
          <a href="#" className="text-blue-500 hover:underline">Защитные стекла</a>
          <span className="text-gray-400">•</span>
          <a href="#" className="text-blue-500 hover:underline">Поддержка</a>
        </div>
      </div>
    </Modal>
  );
};

export default StoreAccessoriesModal;