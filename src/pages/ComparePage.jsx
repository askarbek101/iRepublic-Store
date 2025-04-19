import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Import icons
import DisplayIcon from '../assets/icons/icon_design__buduljgzh8fm_large_2x.png';
import DynamicIslandIcon from '../assets/icons/icon_dynamic_island__brl9766tbcpe_large_2x.jpg';
import CameraIcon from '../assets/icons/icon_iphone_triple3_lens__djh3m7buzpkm_large_2x.jpg';
import DualCameraIcon from '../assets/icons/icon_iphone_dual1_lens__bleqtzeurcc2_large_2x.jpg';
import DualCamera2Icon from '../assets/icons/icon_iphone_dual2_lens__fn6dmiwwpnmi_large_2x.jpg';
import CameraControlIcon from '../assets/icons/icon_camera_control__burhhhpgcqaa_large_2x.jpg';
import OpticalZoom3Icon from '../assets/icons/icon_optical_zoom_3__fv6136vrvj22_medium_2x.jpg';
import OpticalZoom8Icon from '../assets/icons/icon_optical_zoom_8__f4t6w5pocmqa_medium_2x.jpg';
import ChipA18Icon from '../assets/icons/icon_A18PRO__dl5j8kabov6u_large_2x.jpg';
import ChipA17Icon from '../assets/icons/icon_A17PRO__d4p37fupi4sy_large_2x.jpg';
import ChipA16Icon from '../assets/icons/icon_A16__ccopt1mkr2ty_large_2x.jpg';
import ChipA15Icon from '../assets/icons/icon_A15__cldbzv099xzm_large_2x.jpg';
import ChipA14Icon from '../assets/icons/icon_A15__cldbzv099xzm_large_2x.jpg';
import ChipA13Icon from '../assets/icons/icon_A13__exr1v3z62qky_large_2x.jpg';
import BatteryIcon from '../assets/icons/icon_battery__ge1fjzzgyhym_large_2x.jpg';
import FiveGIcon from '../assets/icons/icon_5g__b0gxvkl3jv2a_large_2x.jpg';
import FourGIcon from '../assets/icons/icon_4g__c56oyfzt9o66_large_2x.jpg';
import FaceIDIcon from '../assets/icons/icon_face_id__ge6yb00wsmi6_large_2x.jpg';
import USBCIcon from '../assets/icons/icon_usbc__el7x12ywobgy_large_2x.png';
import LightningIcon from '../assets/icons/icon_lightning__7y9evq76biq6_large_2x.png';
import CeramicShieldIcon from '../assets/icons/icon_ceramic_shield__esef7kqwglci_large_2x.jpg';
import MagSafeIcon from '../assets/icons/icon_magsafe__cpwajrp6pnhy_large_2x.jpg';
import SOSIcon from '../assets/icons/icon_sos__c2memf0o0oom_large_2x.jpg';

const SpecIcons = {
  Display: DisplayIcon,
  DynamicIsland: DynamicIslandIcon,
  Camera: CameraIcon,
  DualCamera: DualCameraIcon,
  DualCamera2: DualCamera2Icon,
  CameraControl: CameraControlIcon,
  OpticalZoom3: OpticalZoom3Icon,
  OpticalZoom8: OpticalZoom8Icon,
  ChipA18: ChipA18Icon,
  ChipA17: ChipA17Icon,
  ChipA16: ChipA16Icon,
  ChipA15: ChipA15Icon,
  ChipA14: ChipA14Icon,
  ChipA13: ChipA13Icon,
  Battery: BatteryIcon,
  FiveG: FiveGIcon,
  FourG: FourGIcon,
  FaceID: FaceIDIcon,
  USBC: USBCIcon,
  Lightning: LightningIcon,
  CeramicShield: CeramicShieldIcon,
  MagSafe: MagSafeIcon,
  SOS: SOSIcon
};

const CheckIcon = () => (
  <svg className="w-6 h-6 text-[#0071e3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const CrossIcon = () => (
  <svg className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const MinusIcon = () => (
  <span className="text-gray-300 text-xl">—</span>
);

const ComparePage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add click outside listener to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://admin-dashboard-qff2.vercel.app/api/product?category=iphone');
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  const handleModelSelect = (product) => {
    setSelectedProduct(product);
    setOpenDropdown(false);
  };

  const getChipIcon = (product) => {
    if (!product || !product.model) return SpecIcons.ChipA18;
    
    const model = product.model.toLowerCase();
    if (model.includes('11')) return SpecIcons.ChipA13;
    if (model.includes('12')) return SpecIcons.ChipA14;
    if (model.includes('13')) return SpecIcons.ChipA15;
    if (model.includes('14')) return SpecIcons.ChipA16;
    if (model.includes('15')) return SpecIcons.ChipA17;
    if (model.includes('16 pro') || model.includes('16 pro max')) return SpecIcons.ChipA18;
    if (model.includes('16')) return SpecIcons.ChipA17;
    return SpecIcons.ChipA18;
  };

  const getNetworkIcon = (product) => {
    if (!product || !product.network) return SpecIcons.FiveG;
    
    const network = product.network.toLowerCase();
    if (network.includes('5g')) return SpecIcons.FiveG;
    if (network.includes('4g')) return SpecIcons.FourG;
    return SpecIcons.FiveG;
  };

  const getDisplayIcon = (product) => {
    if (!product || !product.model) return SpecIcons.Display;
    return SpecIcons.Display;
  };

  const getCameraIcon = (product) => {
    if (!product || !product.model) return SpecIcons.Camera;
    return SpecIcons.Camera;
  };

  const getBatteryIcon = (product) => {
    if (!product || !product.model) return SpecIcons.Battery;
    return SpecIcons.Battery;
  };

  const comparisonSpecs = [
    {
      key: 'display',
      label: 'Дисплей',
      getIcon: (product) => getDisplayIcon(product),
      subSpecs: [
        { 
          key: 'screenSize', 
          label: 'Дисплей Super Retina XDR', 
          type: 'text',
          icon: SpecIcons.Display,
          getValue: (product) => {
            if (!product || !product.model) return '—';
            const model = product.model.toLowerCase();
            if (model.includes('pro max') || model.includes('plus')) return '6,7"';
            return '6,1"';
          }
        },
        { 
          key: 'promotion', 
          label: 'ProMotion с адаптивной частотой обновления до 120 Гц', 
          type: 'boolean',
          icon: SpecIcons.Display,
          getValue: (product) => {
            if (!product || !product.model) return false;
            const model = product.model.toLowerCase();
            return model.includes('pro') || model.includes('16') || model.includes('15');
          }
        },
        { 
          key: 'refresh60', 
          label: 'Частота обновления 60 Гц', 
          type: 'boolean',
          icon: SpecIcons.Display,
          getValue: (product) => {
            if (!product || !product.model) return false;
            const model = product.model.toLowerCase();
            return !model.includes('pro') && !model.includes('16') && !model.includes('15');
          }
        },
        { 
          key: 'dynamicIsland', 
          label: 'Dynamic Island', 
          type: 'boolean',
          icon: SpecIcons.DynamicIsland,
          getValue: (product) => {
            if (!product || !product.model) return false;
            const model = product.model.toLowerCase();
            return model.includes('14') || model.includes('15') || model.includes('16') || model.includes('pro');
          }
        }
      ]
    },
    {
      key: 'camera',
      label: 'Камера',
      getIcon: (product) => getCameraIcon(product),
      subSpecs: [
        { 
          key: 'mainCamera', 
          label: 'Основная камера', 
          type: 'text',
          icon: SpecIcons.Camera,
          getValue: (product) => {
            if (!product || !product.model) return '—';
            const model = product.model.toLowerCase();
            if (model.includes('16 pro') || model.includes('16 pro max') || 
                model.includes('15 pro') || model.includes('15 pro max')) return '48 Мп';
            if (model.includes('14 pro') || model.includes('14 pro max')) return '48 Мп';
            return '12 Мп';
          }
        },
        { 
          key: 'ultraWide', 
          label: 'Сверхширокоугольная камера', 
          type: 'text',
          icon: SpecIcons.DualCamera,
          getValue: (product) => {
            if (!product || !product.model) return '—';
            const model = product.model.toLowerCase();
            if (model.includes('16 pro') || model.includes('16 pro max') || 
                model.includes('15 pro') || model.includes('15 pro max')) return '12 Мп';
            if (model.includes('14 pro') || model.includes('14 pro max')) return '12 Мп';
            return '12 Мп';
          }
        },
        { 
          key: 'telephoto', 
          label: 'Телефото', 
          type: 'text',
          icon: SpecIcons.DualCamera2,
          getValue: (product) => {
            if (!product || !product.model) return '—';
            const model = product.model.toLowerCase();
            if (model.includes('16 pro') || model.includes('16 pro max') || 
                model.includes('15 pro') || model.includes('15 pro max')) return '12 Мп';
            if (model.includes('14 pro') || model.includes('14 pro max')) return '12 Мп';
            if (model.includes('13 pro') || model.includes('13 pro max')) return '12 Мп';
            return '—';
          }
        },
        { 
          key: 'opticalZoom', 
          label: 'Оптический зум', 
          type: 'text',
          icon: SpecIcons.OpticalZoom3,
          getValue: (product) => {
            if (!product || !product.model) return '—';
            const model = product.model.toLowerCase();
            if (model.includes('16 pro max') || model.includes('15 pro max')) return '5x';
            if (model.includes('16 pro') || model.includes('15 pro')) return '3x';
            if (model.includes('14 pro max')) return '3x';
            if (model.includes('14 pro')) return '3x';
            if (model.includes('13 pro max')) return '3x';
            if (model.includes('13 pro')) return '3x';
            return '—';
          }
        },
        { 
          key: 'cameraControl', 
          label: 'Управление камерой', 
          type: 'boolean',
          icon: SpecIcons.CameraControl,
          getValue: (product) => {
            if (!product || !product.model) return false;
            const model = product.model.toLowerCase();
            return model.includes('pro') || model.includes('15') || model.includes('16');
          }
        }
      ]
    },
    {
      key: 'chip',
      label: 'Процессор',
      getIcon: (product) => getChipIcon(product),
      subSpecs: [
        { 
          key: 'processor', 
          label: 'Модель процессора', 
          type: 'text',
          getIcon: (product) => getChipIcon(product),
          getValue: (product) => {
            if (!product || !product.model) return '—';
            const model = product.model.toLowerCase();
            if (model.includes('11')) return 'A13 Bionic';
            if (model.includes('12')) return 'A14 Bionic';
            if (model.includes('13')) return 'A15 Bionic';
            if (model.includes('14')) return 'A16 Bionic';
            if (model.includes('15')) return 'A17 Pro';
            if (model.includes('16 pro') || model.includes('16 pro max')) return 'A18 Pro';
            if (model.includes('16')) return 'A17 Pro';
            return '—';
          }
        },
        { 
          key: 'cpuCores', 
          label: '6 ядер CPU (2+4)', 
          type: 'boolean',
          getIcon: (product) => getChipIcon(product),
          getValue: (product) => true
        },
        { 
          key: 'gpuCores', 
          label: '5 ядер GPU', 
          type: 'boolean',
          getIcon: (product) => getChipIcon(product),
          getValue: (product) => {
            if (!product || !product.model) return false;
            const model = product.model.toLowerCase();
            return model.includes('13 pro') || 
                   model.includes('14') || 
                   model.includes('15') || 
                   model.includes('16');
          }
        },
        { 
          key: 'gpuCores4', 
          label: '4 ядра GPU', 
          type: 'boolean',
          getIcon: (product) => getChipIcon(product),
          getValue: (product) => {
            if (!product || !product.model) return false;
            const model = product.model.toLowerCase();
            return model.includes('11') || 
                   model.includes('12') || 
                   model.includes('13');
          }
        },
        { 
          key: 'neuralCores16', 
          label: '16 ядер нейронного процессора', 
          type: 'boolean',
          getIcon: (product) => getChipIcon(product),
          getValue: (product) => {
            if (!product || !product.model) return false;
            const model = product.model.toLowerCase();
            return model.includes('13 pro') || 
                   model.includes('14') || 
                   model.includes('15') || 
                   model.includes('16');
          }
        },
        { 
          key: 'neuralCores8', 
          label: '8 ядер нейронного процессора', 
          type: 'boolean',
          getIcon: (product) => getChipIcon(product),
          getValue: (product) => {
            if (!product || !product.model) return false;
            const model = product.model.toLowerCase();
            return model.includes('11') || 
                   model.includes('12') || 
                   model.includes('13');
          }
        },
        { 
          key: 'transistors', 
          label: 'Количество транзисторов', 
          type: 'boolean',
          getIcon: (product) => getChipIcon(product),
          getValue: (product) => {
            if (!product || !product.processor) return false;
            return true;
          }
        },
        { 
          key: 'process', 
          label: 'Техпроцесс', 
          type: 'boolean',
          getIcon: (product) => getChipIcon(product),
          getValue: (product) => {
            if (!product || !product.processor) return false;
            return true;
          }
        }
      ]
    },
    {
      key: 'battery',
      label: 'Аккумулятор',
      getIcon: (product) => getBatteryIcon(product),
      subSpecs: [
        { 
          key: 'batteryLife', 
          label: 'Время работы', 
          type: 'text',
          icon: SpecIcons.Battery,
          getValue: (product) => {
            if (!product || !product.model) return '—';
            return 'До 19 часов';
          }
        },
        { 
          key: 'fastCharging', 
          label: 'Быстрая зарядка', 
          type: 'boolean',
          icon: SpecIcons.Lightning,
          getValue: (product) => {
            if (!product || !product.model) return false;
            return true;
          }
        }
      ]
    },
    {
      key: 'connectivity',
      label: 'Подключение',
      getIcon: (product) => SpecIcons.USBC,
      subSpecs: [
        { 
          key: 'network', 
          label: 'Сотовая связь', 
          type: 'text',
          getIcon: (product) => getNetworkIcon(product),
          getValue: (product) => {
            if (!product || !product.model) return '—';
            return '5G';
          }
        },
        { 
          key: 'magsafe', 
          label: 'MagSafe', 
          type: 'boolean',
          icon: SpecIcons.MagSafe,
          getValue: (product) => {
            if (!product || !product.model) return false;
            return true;
          }
        },
        { 
          key: 'usbc', 
          label: 'USB-C', 
          type: 'boolean',
          icon: SpecIcons.USBC,
          getValue: (product) => true
        }
      ]
    },
    {
      key: 'security',
      label: 'Безопасность',
      getIcon: (product) => SpecIcons.FaceID,
      subSpecs: [
        { 
          key: 'faceid', 
          label: 'Face ID', 
          type: 'boolean',
          icon: SpecIcons.FaceID,
          getValue: (product) => {
            if (!product || !product.model) return false;
            return true;
          }
        },
        { 
          key: 'sos', 
          label: 'Экстренный вызов SOS', 
          type: 'boolean',
          icon: SpecIcons.SOS,
          getValue: (product) => {
            if (!product || !product.model) return false;
            return true;
          }
        },
        { 
          key: 'crashdetection', 
          label: 'Обнаружение аварий', 
          type: 'boolean',
          icon: SpecIcons.SOS,
          getValue: (product) => true
        }
      ]
    },
    {
      key: 'protection',
      label: 'Защита',
      getIcon: (product) => SpecIcons.CeramicShield,
      subSpecs: [
        { 
          key: 'ceramicShield', 
          label: 'Ceramic Shield', 
          type: 'boolean',
          icon: SpecIcons.CeramicShield,
          getValue: (product) => {
            if (!product || !product.model) return false;
            return true;
          }
        }
      ]
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0071e3]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-8">
        <h1 className="text-4xl font-semibold text-black mb-8 text-center mt-12">Характеристики iPhone</h1>
        
        {/* Product Selection */}
        <div className="mb-8 text-center">
          <div className="dropdown-container">
            <div className="relative">
              <button
                className="w-full p-4 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:border-[#0071e3] text-center text-lg hover:border-[#0071e3] transition-colors"
                onClick={() => setOpenDropdown(!openDropdown)}
              >
                {selectedProduct?.model || 'Выберите iPhone'}
              </button>

              {/* Dropdown Menu */}
              {openDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-[300px] overflow-y-auto">
                  {products.map((product) => (
                    <button
                      key={product._id}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors text-gray-900"
                      onClick={() => handleModelSelect(product)}
                    >
                      <div className="flex flex-col">
                        <span className="font-medium">{product.model}</span>
                        <span className="text-sm text-gray-500">{product.processor}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {selectedProduct && (
              <div className="mt-6">
                <div className="w-[240px] h-[240px] mx-auto flex items-center justify-center mb-4">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.model}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {selectedProduct.colors.map((color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className="w-7 h-7 rounded-full border border-gray-200 cursor-pointer hover:border-gray-400 transition-colors"
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Specifications */}
        {selectedProduct && (
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-semibold mb-8 text-center">Характеристики</h2>
            
            {/* Display Size */}
            <div className="text-center mb-12">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-medium mb-2">{selectedProduct.screenSize}"</span>
                <span className="text-sm text-gray-500">Дисплей Super Retina XDR</span>
                {selectedProduct.promotion && (
                  <span className="text-sm text-gray-500">Технология ProMotion</span>
                )}
                {selectedProduct.dynamicIsland && (
                  <span className="text-sm text-gray-500">Dynamic Island</span>
                )}
              </div>
            </div>

            {/* Detailed Specs */}
            <div className="space-y-12">
              {comparisonSpecs.map((spec) => (
                <div key={spec.key} className="border-t border-gray-200 pt-8">
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img
                        src={spec.getIcon ? spec.getIcon(selectedProduct) : spec.icon}
                        alt={spec.label}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-medium text-gray-900">{spec.label}</h3>
                  </div>
                  <div className="space-y-4">
                    {spec.subSpecs.map((subSpec) => (
                      <div key={subSpec.key} className="flex items-center justify-between px-4">
                        <div className="flex items-center gap-2">
                          {(subSpec.getIcon || subSpec.icon) && (
                            <div className="w-6 h-6 flex items-center justify-center">
                              <img
                                src={subSpec.getIcon ? subSpec.getIcon(selectedProduct) : subSpec.icon}
                                alt={subSpec.label}
                                className="w-5 h-5 object-contain"
                              />
                            </div>
                          )}
                          <span className="text-sm font-medium text-gray-900 min-w-[200px]">
                            {subSpec.label}
                          </span>
                        </div>
                        {subSpec.type === 'boolean' ? (
                          <div className="flex items-center justify-center w-8 h-8">
                            {subSpec.getValue ? subSpec.getValue(selectedProduct) ? <CheckIcon /> : <MinusIcon /> : (selectedProduct[subSpec.key] ? <CheckIcon /> : <MinusIcon />)}
                          </div>
                        ) : (
                          <span className="text-sm text-gray-600 font-medium">
                            {subSpec.getValue ? subSpec.getValue(selectedProduct) : (selectedProduct[subSpec.key] || '—')}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!selectedProduct && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-4">
              Выберите iPhone для просмотра характеристик
            </p>
            <Link
              to="/iphone"
              className="text-[#0071e3] hover:text-[#0077ed] transition-colors duration-300"
            >
              Вернуться к каталогу iPhone
            </Link>
          </div>
        )}

        {/* Trade In Banner */}
        <div className="bg-[#fbfbfd] rounded-2xl p-8 text-center mb-16">
          <h2 className="text-3xl font-semibold text-black mb-3">Trade In</h2>
          <p className="text-lg text-black mb-6 max-w-2xl mx-auto">
            Обменяйте свой старый iPhone и получите скидку на новый
          </p>
          <Link 
            to="/trade-in" 
            className="inline-block bg-black text-white px-8 py-3 rounded-full text-base font-medium hover:bg-gray-900 transition-all duration-300"
          >
            Узнать свою скидку
          </Link>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 pt-8">
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

export default ComparePage; 