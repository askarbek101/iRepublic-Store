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

// Watch icons
import WatchRetina from '../assets/icons/Watch/icon_retina_display__c8aehjq3sb6u_large.png';
import WatchRetinaAlwaysOn from '../assets/icons/Watch/icon_retina_display_always_on__l63nuwtqbh6e_large.png';
import WatchHeart from '../assets/icons/Watch/icon_heart__c34gast9dd4y_large.png';
import WatchVitals from '../assets/icons/Watch/icon_vitals__xdpxrz0jtv6u_large.png';
import WatchSleep from '../assets/icons/Watch/icon_sleep__1y9s2efkfo26_large.png';
import WatchCycle from '../assets/icons/Watch/icon_cycletracking__dq5phajha7ma_large.png';
import WatchS9 from '../assets/icons/Watch/icon_sip_s9__cpk0pzu01eeu_large.png';
import WatchS8 from '../assets/icons/Watch/icon_sip_s8__5r533zrb59eq_large.png';
import WatchBattery from '../assets/icons/Watch/icon_battery__dimvijv601qq_large.png';
import WatchBatteryFast from '../assets/icons/Watch/icon_battery_faster_charge__cuhhjgysh6i6_large.png';
import WatchConnectivity from '../assets/icons/Watch/icon_connectivity__i9fjuem59k66_large.png';
import WatchSOS from '../assets/icons/Watch/icon_sos__f5fuz1rxegeq_large.png';
import WatchWater from '../assets/icons/Watch/icon_water_resistant__c7bt11bvqlme_large.png';
import WatchCase from '../assets/icons/Watch/icon_case__e8dwot4qm0ya_large.png';

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
  SOS: SOSIcon,
  WatchRetina: WatchRetina,
  WatchRetinaAlwaysOn: WatchRetinaAlwaysOn,
  WatchHeart: WatchHeart,
  WatchVitals: WatchVitals,
  WatchSleep: WatchSleep,
  WatchCycle: WatchCycle,
  WatchS9: WatchS9,
  WatchS8: WatchS8,
  WatchBattery: WatchBattery,
  WatchBatteryFast: WatchBatteryFast,
  WatchConnectivity: WatchConnectivity,
  WatchSOS: WatchSOS,
  WatchWater: WatchWater,
  WatchCase: WatchCase
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
  const [activeTab, setActiveTab] = useState('iphone');
  const [error, setError] = useState(null);

  useEffect(() => {
    setSelectedProduct(null);
    fetchProducts();
  }, [activeTab]);

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
      setLoading(true);
      setError(null);
      let category = '';
      
      // Определяем категорию
      switch(activeTab) {
        case 'iphone':
          category = 'iphone';
          break;
        case 'airpods':
          category = 'airpods';
          break;
        case 'watch':
          category = 'apple-watch';
          break;
        default:
          category = 'iphone';
      }
      
      console.log('Fetching products for category:', category);
      const url = `https://admin-dashboard-qff2.vercel.app/api/product?category=${category}`;
      console.log('API URL:', url);
      
      const response = await axios.get(url);
      console.log('API Response:', response);
      console.log('Received products:', response.data);
      
      if (Array.isArray(response.data)) {
        setProducts(response.data);
      } else {
        console.error('Received non-array data:', response.data);
        setError('Получены некорректные данные');
        setProducts([]);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      console.error('Error details:', error.response?.data);
      setError(error.message);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleModelSelect = (product) => {
    console.log('Selected product:', product);
    setSelectedProduct(product);
    setOpenDropdown(false);
  };

  const handleTabChange = (tab) => {
    console.log('Changing tab to:', tab);
    setActiveTab(tab);
    setSelectedProduct(null);
    setOpenDropdown(false);
  };

  const getChipIcon = (product) => {
    if (!product || !product.model) return SpecIcons.ChipA18;
    
    const model = product.model.toLowerCase();
    if (model.includes('16 pro max') || model.includes('16 pro')) return SpecIcons.ChipA18;
    if (model.includes('16')) return SpecIcons.ChipA17;
    if (model.includes('15 pro max') || model.includes('15 pro')) return SpecIcons.ChipA17;
    if (model.includes('15')) return SpecIcons.ChipA16;
    if (model.includes('14 pro max') || model.includes('14 pro')) return SpecIcons.ChipA16;
    if (model.includes('14')) return SpecIcons.ChipA15;
    if (model.includes('13 pro max') || model.includes('13 pro')) return SpecIcons.ChipA15;
    if (model.includes('13')) return SpecIcons.ChipA15;
    if (model.includes('12 pro max') || model.includes('12 pro')) return SpecIcons.ChipA14;
    if (model.includes('12')) return SpecIcons.ChipA14;
    if (model.includes('11 pro max') || model.includes('11 pro')) return SpecIcons.ChipA13;
    if (model.includes('11')) return SpecIcons.ChipA13;
    if (model.includes('se')) return SpecIcons.ChipA15;
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
            if (model.includes('16 pro') || model.includes('15 pro')) return '48 Мп, ƒ/1.78';
            if (model.includes('16') || model.includes('15')) return '48 Мп, ƒ/1.6';
            if (model.includes('14 pro') || model.includes('14 pro max')) return '48 Мп, ƒ/1.78';
            if (model.includes('14') || model.includes('14 plus')) return '12 Мп, ƒ/1.5';
            if (model.includes('13 pro') || model.includes('13 pro max')) return '12 Мп, ƒ/1.5';
            if (model.includes('13') || model.includes('13 mini')) return '12 Мп, ƒ/1.6';
            if (model.includes('12 pro') || model.includes('12 pro max')) return '12 Мп, ƒ/1.6';
            if (model.includes('12') || model.includes('12 mini')) return '12 Мп, ƒ/1.6';
            if (model.includes('11 pro') || model.includes('11 pro max')) return '12 Мп, ƒ/1.8';
            if (model.includes('11')) return '12 Мп, ƒ/1.8';
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
            if (model.includes('16 pro') || model.includes('15 pro')) return '12 Мп, ƒ/2.2, 120°';
            if (model.includes('16') || model.includes('15')) return '12 Мп, ƒ/2.4, 120°';
            if (model.includes('14 pro') || model.includes('14 pro max')) return '12 Мп, ƒ/2.2, 120°';
            if (model.includes('14') || model.includes('14 plus')) return '12 Мп, ƒ/2.4, 120°';
            if (model.includes('13 pro') || model.includes('13 pro max')) return '12 Мп, ƒ/1.8, 120°';
            if (model.includes('13') || model.includes('13 mini')) return '12 Мп, ƒ/2.4, 120°';
            if (model.includes('12 pro') || model.includes('12 pro max')) return '12 Мп, ƒ/2.4, 120°';
            if (model.includes('12') || model.includes('12 mini')) return '12 Мп, ƒ/2.4, 120°';
            if (model.includes('11 pro') || model.includes('11 pro max')) return '12 Мп, ƒ/2.4, 120°';
            if (model.includes('11')) return '12 Мп, ƒ/2.4, 120°';
            return '—';
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
            if (model.includes('16 pro max') || model.includes('15 pro max')) return '12 Мп, ƒ/2.8, 5x оптический зум';
            if (model.includes('16 pro') || model.includes('15 pro')) return '12 Мп, ƒ/2.8, 3x оптический зум';
            if (model.includes('14 pro max')) return '12 Мп, ƒ/2.8, 3x оптический зум';
            if (model.includes('14 pro')) return '12 Мп, ƒ/2.8, 3x оптический зум';
            if (model.includes('13 pro max')) return '12 Мп, ƒ/2.8, 3x оптический зум';
            if (model.includes('13 pro')) return '12 Мп, ƒ/2.8, 3x оптический зум';
            if (model.includes('12 pro max')) return '12 Мп, ƒ/2.2, 2.5x оптический зум';
            if (model.includes('12 pro')) return '12 Мп, ƒ/2.0, 2x оптический зум';
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
            if (model.includes('12 pro max')) return '2.5x';
            if (model.includes('12 pro')) return '2x';
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
            if (model.includes('16 pro max') || model.includes('16 pro') || model.includes('16')) return true;
            return false;
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
            if (model.includes('16 pro max') || model.includes('16 pro')) return 'A18 Pro';
            if (model.includes('16')) return 'A17 Pro';
            if (model.includes('15 pro max') || model.includes('15 pro')) return 'A17 Pro';
            if (model.includes('15')) return 'A16 Bionic';
            if (model.includes('14 pro max') || model.includes('14 pro')) return 'A16 Bionic';
            if (model.includes('14')) return 'A15 Bionic';
            if (model.includes('13 pro max') || model.includes('13 pro')) return 'A15 Bionic';
            if (model.includes('13')) return 'A15 Bionic';
            if (model.includes('12 pro max') || model.includes('12 pro')) return 'A14 Bionic';
            if (model.includes('12')) return 'A14 Bionic';
            if (model.includes('11 pro max') || model.includes('11 pro')) return 'A13 Bionic';
            if (model.includes('11')) return 'A13 Bionic';
            if (model.includes('se')) return 'A15 Bionic';
            return '—';
          }
        },
        { 
          key: 'cpuCores', 
          label: '6 ядер CPU (2+4)', 
          type: 'boolean',
          getIcon: (product) => getChipIcon(product),
          getValue: (product) => {
            if (!product || !product.model) return false;
            const model = product.model.toLowerCase();
            return model.includes('11') || model.includes('12') || model.includes('13') || 
                   model.includes('14') || model.includes('15') || model.includes('16');
          }
        },
        { 
          key: 'gpuCores', 
          label: '5 ядер GPU', 
          type: 'boolean',
          getIcon: (product) => getChipIcon(product),
          getValue: (product) => {
            if (!product || !product.model) return false;
            const model = product.model.toLowerCase();
            return model.includes('13 pro') || model.includes('14') || 
                   model.includes('15') || model.includes('16');
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
            return model.includes('11') || model.includes('12') || model.includes('13');
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
            return model.includes('13 pro') || model.includes('14') || 
                   model.includes('15') || model.includes('16');
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
            return model.includes('11') || model.includes('12') || model.includes('13');
          }
        },
        { 
          key: 'transistors', 
          label: 'Количество транзисторов', 
          type: 'text',
          getIcon: (product) => getChipIcon(product),
          getValue: (product) => {
            if (!product || !product.model) return '—';
            const model = product.model.toLowerCase();
            if (model.includes('16 pro max') || model.includes('16 pro')) return '19 млрд';
            if (model.includes('16')) return '19 млрд';
            if (model.includes('15 pro max') || model.includes('15 pro')) return '19 млрд';
            if (model.includes('15')) return '16 млрд';
            if (model.includes('14 pro max') || model.includes('14 pro')) return '16 млрд';
            if (model.includes('14')) return '15 млрд';
            if (model.includes('13 pro max') || model.includes('13 pro')) return '15 млрд';
            if (model.includes('13')) return '15 млрд';
            if (model.includes('12 pro max') || model.includes('12 pro')) return '11.8 млрд';
            if (model.includes('12')) return '11.8 млрд';
            if (model.includes('11 pro max') || model.includes('11 pro')) return '8.5 млрд';
            if (model.includes('11')) return '8.5 млрд';
            if (model.includes('se')) return '15 млрд';
            return '—';
          }
        },
        { 
          key: 'process', 
          label: 'Техпроцесс', 
          type: 'text',
          getIcon: (product) => getChipIcon(product),
          getValue: (product) => {
            if (!product || !product.model) return '—';
            const model = product.model.toLowerCase();
            if (model.includes('16 pro max') || model.includes('16 pro')) return '3 нм';
            if (model.includes('16')) return '3 нм';
            if (model.includes('15 pro max') || model.includes('15 pro')) return '3 нм';
            if (model.includes('15')) return '4 нм';
            if (model.includes('14 pro max') || model.includes('14 pro')) return '4 нм';
            if (model.includes('14')) return '5 нм';
            if (model.includes('13 pro max') || model.includes('13 pro')) return '5 нм';
            if (model.includes('13')) return '5 нм';
            if (model.includes('12 pro max') || model.includes('12 pro')) return '5 нм';
            if (model.includes('12')) return '5 нм';
            if (model.includes('11 pro max') || model.includes('11 pro')) return '7 нм';
            if (model.includes('11')) return '7 нм';
            if (model.includes('se')) return '5 нм';
            return '—';
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
          label: 'Время работы при воспроизведении видео', 
          type: 'text',
          icon: SpecIcons.Battery,
          getValue: (product) => {
            if (!product || !product.model) return '—';
            const model = product.model.toLowerCase();
            if (model.includes('16 pro max') || model.includes('15 pro max')) return 'До 29 часов';
            if (model.includes('16 pro') || model.includes('15 pro')) return 'До 23 часов';
            if (model.includes('16 plus') || model.includes('15 plus')) return 'До 26 часов';
            if (model.includes('16') || model.includes('15')) return 'До 20 часов';
            if (model.includes('14 pro max')) return 'До 29 часов';
            if (model.includes('14 pro')) return 'До 23 часов';
            if (model.includes('14 plus')) return 'До 26 часов';
            if (model.includes('14')) return 'До 20 часов';
            if (model.includes('13 pro max')) return 'До 28 часов';
            if (model.includes('13 pro')) return 'До 22 часов';
            if (model.includes('13')) return 'До 19 часов';
            if (model.includes('12 pro max')) return 'До 20 часов';
            if (model.includes('12 pro')) return 'До 17 часов';
            if (model.includes('12')) return 'До 17 часов';
            if (model.includes('11 pro max')) return 'До 20 часов';
            if (model.includes('11 pro')) return 'До 18 часов';
            if (model.includes('11')) return 'До 17 часов';
            return 'До 19 часов';
          }
        },
        { 
          key: 'batteryLifeStreaming', 
          label: 'Время работы при потоковом видео', 
          type: 'text',
          icon: SpecIcons.Battery,
          getValue: (product) => {
            if (!product || !product.model) return '—';
            const model = product.model.toLowerCase();
            if (model.includes('16 pro max') || model.includes('15 pro max')) return 'До 25 часов';
            if (model.includes('16 pro') || model.includes('15 pro')) return 'До 20 часов';
            if (model.includes('16 plus') || model.includes('15 plus')) return 'До 20 часов';
            if (model.includes('16') || model.includes('15')) return 'До 16 часов';
            if (model.includes('14 pro max')) return 'До 25 часов';
            if (model.includes('14 pro')) return 'До 20 часов';
            if (model.includes('14 plus')) return 'До 20 часов';
            if (model.includes('14')) return 'До 16 часов';
            if (model.includes('13 pro max')) return 'До 25 часов';
            if (model.includes('13 pro')) return 'До 20 часов';
            if (model.includes('13')) return 'До 15 часов';
            if (model.includes('12 pro max')) return 'До 12 часов';
            if (model.includes('12 pro')) return 'До 11 часов';
            if (model.includes('12')) return 'До 11 часов';
            if (model.includes('11 pro max')) return 'До 12 часов';
            if (model.includes('11 pro')) return 'До 11 часов';
            if (model.includes('11')) return 'До 10 часов';
            return 'До 15 часов';
          }
        },
        { 
          key: 'batteryLifeAudio', 
          label: 'Время работы при воспроизведении аудио', 
          type: 'text',
          icon: SpecIcons.Battery,
          getValue: (product) => {
            if (!product || !product.model) return '—';
            const model = product.model.toLowerCase();
            if (model.includes('16 pro max') || model.includes('15 pro max')) return 'До 95 часов';
            if (model.includes('16 pro') || model.includes('15 pro')) return 'До 75 часов';
            if (model.includes('16 plus') || model.includes('15 plus')) return 'До 100 часов';
            if (model.includes('16') || model.includes('15')) return 'До 80 часов';
            if (model.includes('14 pro max')) return 'До 95 часов';
            if (model.includes('14 pro')) return 'До 75 часов';
            if (model.includes('14 plus')) return 'До 100 часов';
            if (model.includes('14')) return 'До 80 часов';
            if (model.includes('13 pro max')) return 'До 95 часов';
            if (model.includes('13 pro')) return 'До 75 часов';
            if (model.includes('13')) return 'До 75 часов';
            if (model.includes('12 pro max')) return 'До 80 часов';
            if (model.includes('12 pro')) return 'До 65 часов';
            if (model.includes('12')) return 'До 65 часов';
            if (model.includes('11 pro max')) return 'До 80 часов';
            if (model.includes('11 pro')) return 'До 65 часов';
            if (model.includes('11')) return 'До 65 часов';
            return 'До 75 часов';
          }
        },
        { 
          key: 'fastCharging', 
          label: 'Быстрая зарядка (до 50% за 30 минут)', 
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
            const model = product.model.toLowerCase();
            if (model.includes('16 pro max') || model.includes('16 pro') || model.includes('16')) return '5G (sub-6 ГГц и mmWave)';
            if (model.includes('15 pro max') || model.includes('15 pro') || model.includes('15')) return '5G (sub-6 ГГц и mmWave)';
            if (model.includes('14 pro max') || model.includes('14 pro') || model.includes('14')) return '5G (sub-6 ГГц и mmWave)';
            if (model.includes('13 pro max') || model.includes('13 pro') || model.includes('13')) return '5G (sub-6 ГГц и mmWave)';
            if (model.includes('12 pro max') || model.includes('12 pro') || model.includes('12')) return '5G (sub-6 ГГц и mmWave)';
            if (model.includes('11 pro max') || model.includes('11 pro') || model.includes('11')) return '4G LTE';
            if (model.includes('se')) return '4G LTE';
            return '4G LTE';
          }
        },
        { 
          key: 'magsafe', 
          label: 'MagSafe', 
          type: 'boolean',
          icon: SpecIcons.MagSafe,
          getValue: (product) => {
            if (!product || !product.model) return false;
            const model = product.model.toLowerCase();
            return model.includes('12') || model.includes('13') || model.includes('14') || model.includes('15') || model.includes('16');
          }
        },
        { 
          key: 'usbc', 
          label: 'USB-C', 
          type: 'boolean',
          icon: SpecIcons.USBC,
          getValue: (product) => {
            if (!product || !product.model) return false;
            const model = product.model.toLowerCase();
            return model.includes('15') || model.includes('16');
          }
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
            const model = product.model.toLowerCase();
            return model.includes('pro') || model.includes('12') || model.includes('13') || model.includes('14') || model.includes('15') || model.includes('16');
          }
        },
        { 
          key: 'sos', 
          label: 'Экстренный вызов SOS', 
          type: 'boolean',
          icon: SpecIcons.SOS,
          getValue: (product) => {
            if (!product || !product.model) return false;
            const model = product.model.toLowerCase();
            return model.includes('14') || model.includes('15') || model.includes('16');
          }
        },
        { 
          key: 'crashdetection', 
          label: 'Обнаружение аварий', 
          type: 'boolean',
          icon: SpecIcons.SOS,
          getValue: (product) => {
            if (!product || !product.model) return false;
            const model = product.model.toLowerCase();
            if (model.includes('16 pro max') || model.includes('16 pro') || model.includes('16')) return true;
            if (model.includes('15 pro max') || model.includes('15 pro') || model.includes('15')) return true;
            if (model.includes('14 pro max') || model.includes('14 pro') || model.includes('14')) return true;
            return false;
          }
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

  const airpodsComparisonSpecs = [
    {
      key: 'sound',
      label: 'Звук',
      getIcon: () => '/src/assets/icons/Airpods/icon_spatialaudio__ctgtjv3iqq82_small_2x.png',
      subSpecs: [
        {
          key: 'spatialAudio',
          label: 'Пространственное аудио',
          type: 'boolean',
          icon: '/src/assets/icons/Airpods/icon_spatialaudio__ctgtjv3iqq82_small_2x.png',
          getValue: (product) => {
            if (!product || !product.model) return false;
            const model = product.model.toLowerCase();
            return model.includes('pro') || model.includes('max');
          }
        },
        {
          key: 'noiseCancellation',
          label: 'Активное шумоподавление',
          type: 'boolean',
          icon: '/src/assets/icons/Airpods/icon_hearing_health__d70zg3te83sm_large_2x.png',
          getValue: (product) => {
            if (!product || !product.model) return false;
            const model = product.model.toLowerCase();
            return model.includes('pro') || model.includes('max');
          }
        },
        {
          key: 'adaptiveEQ',
          label: 'Адаптивный эквалайзер',
          type: 'boolean',
          icon: '/src/assets/icons/Airpods/icon_controls_force_swipe__rkkniki9aeyy_small_2x.png',
          getValue: (product) => {
            if (!product || !product.model) return false;
            return true;
          }
        },
        {
          key: 'conversationAwareness',
          label: 'Осведомленность о разговоре',
          type: 'boolean',
          icon: '/src/assets/icons/Airpods/icon_conversation_awareness__68gbdvjcl76m_small_2x.png',
          getValue: (product) => {
            if (!product || !product.model) return false;
            const model = product.model.toLowerCase();
            return model.includes('pro') || model.includes('max');
          }
        }
      ]
    },
    {
      key: 'battery',
      label: 'Аккумулятор',
      getIcon: () => '/src/assets/icons/Airpods/icon_batterytime__cxshqzcbx0cy_small_2x.png',
      subSpecs: [
        {
          key: 'batteryLife',
          label: 'Время работы',
          type: 'text',
          icon: '/src/assets/icons/Airpods/icon_batterytime__cxshqzcbx0cy_small_2x.png',
          getValue: (product) => {
            if (!product || !product.model) return '—';
            const model = product.model.toLowerCase();
            if (model.includes('max')) return 'До 20 часов';
            if (model.includes('pro')) return 'До 6 часов';
            if (model.includes('3gen')) return 'До 6 часов';
            return 'До 5 часов';
          }
        },
        {
          key: 'fastCharging',
          label: 'Быстрая зарядка',
          type: 'boolean',
          icon: '/src/assets/icons/Airpods/icon_batterytime__cxshqzcbx0cy_small_2x.png',
          getValue: (product) => {
            if (!product || !product.model) return false;
            const model = product.model.toLowerCase();
            return model.includes('pro') || model.includes('max') || model.includes('3gen');
          }
        },
        {
          key: 'wirelessCharging',
          label: 'Беспроводная зарядка',
          type: 'boolean',
          icon: '/src/assets/icons/Airpods/icon_batterytime__cxshqzcbx0cy_small_2x.png',
          getValue: (product) => {
            if (!product || !product.model) return false;
            const model = product.model.toLowerCase();
            return !model.includes('2gen');
          }
        }
      ]
    },
    {
      key: 'protection',
      label: 'Защита',
      getIcon: () => '/src/assets/icons/Airpods/icon_sweatwaterresistance__wd53s2nrgz2e_small_2x.png',
      subSpecs: [
        {
          key: 'waterResistance',
          label: 'Влагозащита IPX4',
          type: 'boolean',
          icon: '/src/assets/icons/Airpods/icon_sweatwaterresistance__wd53s2nrgz2e_small_2x.png',
          getValue: (product) => {
            if (!product || !product.model) return false;
            const model = product.model.toLowerCase();
            return model.includes('pro');
          }
        },
        {
          key: 'sweatResistance',
          label: 'Устойчивость к поту',
          type: 'boolean',
          icon: '/src/assets/icons/Airpods/icon_sweatwaterresistance__wd53s2nrgz2e_small_2x.png',
          getValue: (product) => {
            if (!product || !product.model) return false;
            return true;
          }
        }
      ]
    },
    {
      key: 'controls',
      label: 'Управление',
      getIcon: () => '/src/assets/icons/Airpods/icon_force_sensor__eadtuejtmmc2_small_2x.png',
      subSpecs: [
        {
          key: 'forceSensor',
          label: 'Сенсор нажатия',
          type: 'boolean',
          icon: '/src/assets/icons/Airpods/icon_force_sensor__eadtuejtmmc2_small_2x.png',
          getValue: (product) => {
            if (!product || !product.model) return false;
            const model = product.model.toLowerCase();
            return model.includes('pro');
          }
        },
        {
          key: 'touchControl',
          label: 'Сенсорное управление',
          type: 'boolean',
          icon: '/src/assets/icons/Airpods/icon_touch_control__gcndbb17ryi6_small_2x.png',
          getValue: (product) => {
            if (!product || !product.model) return false;
            return true;
          }
        }
      ]
    },
    {
      key: 'features',
      label: 'Функции',
      getIcon: () => '/src/assets/icons/Airpods/icon_autoswitch__d54x8lxyl0gi_small_2x.png',
      subSpecs: [
        {
          key: 'autoSwitch',
          label: 'Автоматическое переключение',
          type: 'boolean',
          icon: '/src/assets/icons/Airpods/icon_autoswitch__d54x8lxyl0gi_small_2x.png',
          getValue: (product) => {
            if (!product || !product.model) return false;
            return true;
          }
        },
        {
          key: 'heySiri',
          label: 'Hey Siri',
          type: 'boolean',
          icon: '/src/assets/icons/Airpods/icon_heysiri__gg2lf80rdfu6_small_2x.png',
          getValue: (product) => {
            if (!product || !product.model) return false;
            return true;
          }
        },
        {
          key: 'siri',
          label: 'Siri',
          type: 'boolean',
          icon: '/src/assets/icons/Airpods/icon_siri__215cs0g5x4ya_small_2x.png',
          getValue: (product) => {
            if (!product || !product.model) return false;
            return true;
          }
        },
        {
          key: 'personalizedEngraving',
          label: 'Персональная гравировка',
          type: 'boolean',
          icon: '/src/assets/icons/Airpods/icon_personalizedengraving__fh8jv8fykweq_small_2x.png',
          getValue: (product) => {
            if (!product || !product.model) return false;
            return true;
          }
        }
      ]
    },
    {
      key: 'case',
      label: 'Кейс',
      getIcon: () => '/src/assets/icons/Airpods/icon_airpods_pro_case__m5lw3j5reluu_small_2x.png',
      subSpecs: [
        {
          key: 'smartCase',
          label: 'Умный кейс',
          type: 'boolean',
          icon: '/src/assets/icons/Airpods/icon_airpods_max_smartcase__br0txis59ueu_small_2x.png',
          getValue: (product) => {
            if (!product || !product.model) return false;
            const model = product.model.toLowerCase();
            return model.includes('max');
          }
        },
        {
          key: 'chargingCase',
          label: 'Кейс с зарядкой',
          type: 'boolean',
          icon: '/src/assets/icons/Airpods/icon_airpods_2gen_chargingcase__fj2joksyiiy6_small_2x.png',
          getValue: (product) => {
            if (!product || !product.model) return false;
            const model = product.model.toLowerCase();
            return !model.includes('max');
          }
        },
        {
          key: 'wirelessChargingCase',
          label: 'Кейс с беспроводной зарядкой',
          type: 'boolean',
          icon: '/src/assets/icons/Airpods/icon_airpods_pro_case__m5lw3j5reluu_small_2x.png',
          getValue: (product) => {
            if (!product || !product.model) return false;
            const model = product.model.toLowerCase();
            return model.includes('pro') || model.includes('3gen');
          }
        }
      ]
    },
    {
      key: 'chip',
      label: 'Чип',
      getIcon: () => '/src/assets/icons/Airpods/icon_h2chip__cuvhf536qzue_small_2x.png',
      subSpecs: [
        {
          key: 'h2Chip',
          label: 'Чип H2',
          type: 'boolean',
          icon: '/src/assets/icons/Airpods/icon_h2chip__cuvhf536qzue_small_2x.png',
          getValue: (product) => {
            if (!product || !product.model) return false;
            const model = product.model.toLowerCase();
            return model.includes('pro') || model.includes('max');
          }
        },
        {
          key: 'h1Chip',
          label: 'Чип H1',
          type: 'boolean',
          icon: '/src/assets/icons/Airpods/icon_h1chip__e0glsiaicfqu_small_2x.png',
          getValue: (product) => {
            if (!product || !product.model) return false;
            const model = product.model.toLowerCase();
            return model.includes('3gen') || model.includes('2gen');
          }
        }
      ]
    }
  ];

  const watchComparisonSpecs = [
    {
      key: 'display',
      label: 'Дисплей',
      getIcon: () => SpecIcons.WatchRetina,
      subSpecs: [
        {
          key: 'retinaDisplay',
          label: 'Дисплей Retina LTPO OLED',
          type: 'text',
          icon: SpecIcons.WatchRetina,
          getValue: (product) => {
            if (!product || !product.model) return '—';
            const model = product.model.toLowerCase();
            if (model.includes('series 10')) return 'До 3000 нит, Always-On, с технологией ProMotion';
            if (model.includes('ultra 2')) return 'До 3000 нит, Always-On';
            if (model.includes('ultra')) return 'До 2000 нит, Always-On';
            if (model.includes('series 9')) return 'До 2000 нит, Always-On';
            if (model.includes('series 8')) return 'До 1000 нит, Always-On';
            if (model.includes('series 7')) return 'До 1000 нит, Always-On';
            if (model.includes('se 2')) return 'До 1000 нит';
            return '—';
          }
        },
        {
          key: 'displaySize',
          label: 'Размер дисплея',
          type: 'text',
          icon: SpecIcons.WatchRetina,
          getValue: (product) => {
            if (!product || !product.model) return '—';
            const model = product.model.toLowerCase();
            if (model.includes('series 10')) return '47 мм или 51 мм';
            if (model.includes('ultra')) return '49 мм';
            if (model.includes('45mm')) return '45 мм';
            if (model.includes('44mm')) return '44 мм';
            if (model.includes('41mm')) return '41 мм';
            if (model.includes('40mm')) return '40 мм';
            return '—';
          }
        }
      ]
    },
    {
      key: 'processor',
      label: 'Процессор',
      getIcon: () => SpecIcons.WatchS9,
      subSpecs: [
        {
          key: 'chip',
          label: 'Процессор',
          type: 'text',
          icon: SpecIcons.WatchS9,
          getValue: (product) => {
            if (!product || !product.model) return '—';
            const model = product.model.toLowerCase();
            if (model.includes('series 10')) 
              return 'S10 SiP с 64-битным двухъядерным процессором и 8-ядерным Neural Engine';
            if (model.includes('series 9') || model.includes('ultra 2')) 
              return 'S9 SiP с 64-битным двухъядерным процессором и 4-ядерным Neural Engine';
            if (model.includes('series 8') || model.includes('ultra') || model.includes('se 2')) 
              return 'S8 SiP с 64-битным двухъядерным процессором';
            if (model.includes('series 7')) 
              return 'S7 SiP с 64-битным двухъядерным процессором';
            return '—';
          }
        }
      ]
    },
    {
      key: 'battery',
      label: 'Аккумулятор',
      getIcon: () => SpecIcons.WatchBattery,
      subSpecs: [
        {
          key: 'batteryLifeNormal',
          label: 'Время работы в обычном режиме',
          type: 'text',
          icon: SpecIcons.WatchBattery,
          getValue: (product) => {
            if (!product || !product.model) return '—';
            const model = product.model.toLowerCase();
            if (model.includes('series 10')) 
              return 'До 24 часов при обычном использовании, до 48 часов в режиме энергосбережения';
            if (model.includes('ultra 2') || model.includes('ultra')) 
              return 'До 36 часов при обычном использовании, до 72 часов в режиме энергосбережения';
            if (model.includes('series 9') || model.includes('series 8')) 
              return 'До 18 часов при обычном использовании, до 36 часов в режиме энергосбережения';
            if (model.includes('series 7')) 
              return 'До 18 часов при обычном использовании';
            if (model.includes('se 2')) 
              return 'До 18 часов при обычном использовании, до 36 часов в режиме энергосбережения';
            return '—';
          }
        },
        {
          key: 'fastCharging',
          label: 'Быстрая зарядка',
          type: 'text',
          icon: SpecIcons.WatchBatteryFast,
          getValue: (product) => {
            if (!product || !product.model) return '—';
            const model = product.model.toLowerCase();
            if (model.includes('series 10'))
              return '0-80% за 30 минут, полная зарядка за 60 минут';
            if (model.includes('ultra 2') || model.includes('ultra')) 
              return '0-80% за 60 минут, полная зарядка за 90 минут';
            if (model.includes('series 9') || model.includes('series 8') || model.includes('series 7')) 
              return '0-80% за 45 минут, полная зарядка за 75 минут';
            if (model.includes('se 2')) 
              return '0-80% за 45 минут, полная зарядка за 90 минут';
            return '—';
          }
        }
      ]
    },
    {
      key: 'health',
      label: 'Здоровье',
      getIcon: () => SpecIcons.WatchHeart,
      subSpecs: [
        {
          key: 'heartRate',
          label: 'Датчик пульса',
          type: 'boolean',
          icon: SpecIcons.WatchHeart,
          getValue: (product) => {
            if (!product || !product.model) return false;
            return true;
          }
        },
        {
          key: 'vitals',
          label: 'Мониторинг показателей здоровья',
          type: 'text',
          icon: SpecIcons.WatchVitals,
          getValue: (product) => {
            if (!product || !product.model) return '—';
            const model = product.model.toLowerCase();
            if (model.includes('series 10'))
              return 'ЭКГ, SpO2, температура тела, давление, уровень стресса';
            if (model.includes('series 9') || model.includes('ultra 2'))
              return 'ЭКГ, SpO2, температура тела, давление';
            if (model.includes('series 8') || model.includes('ultra'))
              return 'ЭКГ, SpO2, температура тела';
            if (model.includes('series 7'))
              return 'ЭКГ, SpO2';
            return 'Базовый мониторинг';
          }
        },
        {
          key: 'sleep',
          label: 'Отслеживание сна',
          type: 'text',
          icon: SpecIcons.WatchSleep,
          getValue: (product) => {
            if (!product || !product.model) return '—';
            const model = product.model.toLowerCase();
            if (model.includes('series 10'))
              return 'Расширенный анализ фаз сна и качества отдыха';
            return 'Базовое отслеживание сна';
          }
        }
      ]
    },
    {
      key: 'connectivity',
      label: 'Подключение',
      getIcon: () => SpecIcons.WatchConnectivity,
      subSpecs: [
        {
          key: 'cellular',
          label: 'Cellular',
          type: 'boolean',
          icon: SpecIcons.WatchConnectivity,
          getValue: (product) => {
            if (!product || !product.model) return false;
            const model = product.model.toLowerCase();
            return model.includes('cellular');
          }
        },
        {
          key: 'bluetooth',
          label: 'Bluetooth версия',
          type: 'text',
          icon: SpecIcons.WatchConnectivity,
          getValue: (product) => {
            if (!product || !product.model) return '—';
            const model = product.model.toLowerCase();
            if (model.includes('series 10')) return '5.3 с поддержкой LE Audio';
            if (model.includes('series 9') || model.includes('ultra 2')) return '5.3';
            if (model.includes('series 8') || model.includes('ultra') || 
                model.includes('series 7') || model.includes('se 2')) return '5.0';
            return '—';
          }
        },
        {
          key: 'wifi',
          label: 'Wi-Fi',
          type: 'text',
          icon: SpecIcons.WatchConnectivity,
          getValue: (product) => {
            if (!product || !product.model) return '—';
            const model = product.model.toLowerCase();
            if (model.includes('series 10'))
              return '802.11ax (Wi-Fi 6) 2.4GHz и 5GHz';
            return '802.11b/g/n 2.4GHz и 5GHz';
          }
        }
      ]
    }
  ];

  // Функция для отображения характеристик в зависимости от типа продукта
  const renderSpecifications = () => {
    if (activeTab === 'iphone') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      );
    } else if (activeTab === 'airpods') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {airpodsComparisonSpecs.map((spec) => (
            <div key={spec.key} className="border-t border-gray-200 pt-8">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img
                    src={spec.getIcon()}
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
                      <div className="w-6 h-6 flex items-center justify-center">
                        <img
                          src={subSpec.icon}
                          alt={subSpec.label}
                          className="w-5 h-5 object-contain"
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-900 min-w-[200px]">
                        {subSpec.label}
                      </span>
                    </div>
                    {subSpec.type === 'boolean' ? (
                      <div className="flex items-center justify-center w-8 h-8">
                        {subSpec.getValue(selectedProduct) ? <CheckIcon /> : <MinusIcon />}
                      </div>
                    ) : (
                      <span className="text-sm text-gray-600 font-medium">
                        {subSpec.getValue(selectedProduct)}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    } else if (activeTab === 'watch') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {watchComparisonSpecs.map((spec) => (
            <div key={spec.key} className="border-t border-gray-200 pt-8">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img
                    src={spec.getIcon()}
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
                      <div className="w-6 h-6 flex items-center justify-center">
                        <img
                          src={subSpec.icon}
                          alt={subSpec.label}
                          className="w-5 h-5 object-contain"
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-900 min-w-[200px]">
                        {subSpec.label}
                      </span>
                    </div>
                    {subSpec.type === 'boolean' ? (
                      <div className="flex items-center justify-center w-8 h-8">
                        {subSpec.getValue(selectedProduct) ? <CheckIcon /> : <MinusIcon />}
                      </div>
                    ) : (
                      <span className="text-sm text-gray-600 font-medium">
                        {subSpec.getValue(selectedProduct)}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    }
  };

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
        <h1 className="text-center text-2xl font-medium text-gray-900 mb-4">
          Сравнить
        </h1>

        {/* Comparison Type Buttons */}
        <div className="flex justify-center gap-2 mb-4">
          <button
            onClick={() => handleTabChange('iphone')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'iphone'
                ? 'bg-[#0071e3] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            iPhone
          </button>
          <button
            onClick={() => handleTabChange('airpods')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'airpods'
                ? 'bg-[#0071e3] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            AirPods
          </button>
          <button
            onClick={() => handleTabChange('watch')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'watch'
                ? 'bg-[#0071e3] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Apple Watch
          </button>
        </div>

        {/* Product Selection */}
        <div className="mb-8 text-center">
          <div className="dropdown-container relative">
            <button
              className="w-full p-4 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:border-[#0071e3] text-center text-lg hover:border-[#0071e3] transition-colors"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              {selectedProduct?.model || `Выберите ${
                activeTab === 'iphone' ? 'iPhone' : 
                activeTab === 'airpods' ? 'AirPods' : 'Apple Watch'
              }`}
            </button>

            {/* Debug info */}
            {error && (
              <div className="text-red-500 mt-2">
                Error: {error}
              </div>
            )}

            {/* Loading indicator */}
            {loading && (
              <div className="text-center py-4">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#0071e3] mx-auto"></div>
              </div>
            )}

            {/* Dropdown Menu */}
            {openDropdown && !loading && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-[300px] overflow-y-auto">
                {products.length > 0 ? (
                  products.map((product) => (
                    <button
                      key={product._id}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors text-gray-900"
                      onClick={() => handleModelSelect(product)}
                    >
                      <div className="flex flex-col">
                        <span className="font-medium">{product.model}</span>
                        <span className="text-sm text-gray-500">
                          {activeTab === 'iphone' ? product.processor : 
                           activeTab === 'watch' ? product.size : ''}
                        </span>
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="p-4 text-center text-gray-500">
                    Нет доступных моделей
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Selected Product Display */}
          {selectedProduct && (
            <div className="mt-6">
              <div className="w-[240px] h-[240px] mx-auto flex items-center justify-center mb-4">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.model}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              {selectedProduct.colors && (
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
              )}
            </div>
          )}
        </div>

        {/* Specifications */}
        {!loading && selectedProduct && (
          <>
            {activeTab === 'iphone' && renderSpecifications()}
            {activeTab === 'airpods' && renderSpecifications()}
            {activeTab === 'watch' && renderSpecifications()}
          </>
        )}

        {/* Empty State */}
        {!selectedProduct && !loading && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-4">
              Выберите {
                activeTab === 'iphone' ? 'iPhone' : 
                activeTab === 'airpods' ? 'AirPods' : 'Apple Watch'
              } для просмотра характеристик
            </p>
            <Link
              to={`/${activeTab}`}
              className="text-[#0071e3] hover:text-[#0077ed] transition-colors duration-300"
            >
              Вернуться к каталогу
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