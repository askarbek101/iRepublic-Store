import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AccessoriesPage = () => {
  const [accessories, setAccessories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetchAccessories();
  }, []);

  const fetchAccessories = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get('https://admin-dashboard-qff2.vercel.app/api/product?category=accessories');
      if (Array.isArray(response.data)) {
        setAccessories(response.data);
      } else {
        setError('Получены некорректные данные');
        setAccessories([]);
      }
    } catch (error) {
      console.error('Error fetching accessories:', error);
      setError(error.message);
      setAccessories([]);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { id: 'all', name: 'Все аксессуары' },
    { id: 'cases', name: 'Чехлы' },
    { id: 'chargers', name: 'Зарядные устройства' },
    { id: 'cables', name: 'Кабели' },
    { id: 'headphones', name: 'Наушники' },
    { id: 'watches', name: 'Ремешки для Apple Watch' },
  ];

  const filteredAccessories = selectedCategory === 'all' 
    ? accessories 
    : accessories.filter(accessory => accessory.category === selectedCategory);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0071e3]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-12">
        {/* Title */}
        <h1 className="text-center text-2xl font-medium text-gray-900 mb-8">
          Аксессуары
        </h1>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-[#0071e3] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-center text-red-500 mb-8">
            {error}
          </div>
        )}

        {/* Accessories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredAccessories.map((accessory) => (
            <Link
              key={accessory._id}
              to={`/accessories/${accessory._id}`}
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="aspect-square bg-gray-50 flex items-center justify-center p-4">
                  <img
                    src={accessory.image}
                    alt={accessory.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    {accessory.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {accessory.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900">
                      {accessory.price} ₸
                    </span>
                    <button className="text-[#0071e3] hover:text-[#0077ed] transition-colors">
                      Подробнее
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredAccessories.length === 0 && !error && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              Аксессуары не найдены
            </p>
          </div>
        )}

        {/* Footer */}
        <footer className="border-t border-gray-200 pt-8 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Атырау */}
            <div className="text-center">
              <h4 className="text-lg font-medium text-black mb-4">Атырау</h4>
              <p className="text-gray-600 mb-2">Оператор: +7 747 760 0606</p>
              <div className="mb-4">
                <p className="text-gray-600">ул. Жарбосынова, 85</p>
                <p className="text-gray-600">ТРК Атырау, ул. Сатпаева, 17</p>
                <p className="text-gray-600">Жұмыс уақыты: 10:00-21:00</p>
              </div>
              <a 
                href="https://instagram.com/irepublic_atyrau_tm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#0071e3] hover:text-[#0077ed] transition-colors duration-300"
              >
                @irepublic_atyrau_tm
              </a>
            </div>

            {/* Актау */}
            <div className="text-center">
              <h4 className="text-lg font-medium text-black mb-4">Актау</h4>
              <p className="text-gray-600 mb-2">Оператор: +7 747 760 1212</p>
              <div className="mb-4">
                <p className="text-gray-600">16 мкр, дом 85</p>
                <p className="text-gray-600">Жұмыс уақыты: 10:00-21:00</p>
              </div>
              <a 
                href="https://instagram.com/irepublic_aktau_tm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#0071e3] hover:text-[#0077ed] transition-colors duration-300"
              >
                @irepublic_aktau_tm
              </a>
            </div>

            {/* Уральск */}
            <div className="text-center">
              <h4 className="text-lg font-medium text-black mb-4">Уральск</h4>
              <p className="text-gray-600 mb-2">Оператор: +7 747 760 7700</p>
              <div className="mb-4">
                <p className="text-gray-600">ТРЦ Форум</p>
                <p className="text-gray-600">ул. Молдагалиева, 18</p>
                <p className="text-gray-600">Жұмыс уақыты: 10:00-20:00</p>
              </div>
              <a 
                href="https://instagram.com/irepublic_uralsk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#0071e3] hover:text-[#0077ed] transition-colors duration-300"
              >
                @irepublic_uralsk
              </a>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm mt-8 pb-4">
            © 2024 iRepublic. Все права защищены.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AccessoriesPage; 