import image1 from './images/undraw-img-1.svg';
import image2 from './images/undraw-img-2.svg';
import image3 from './images/undraw-img-3.svg';
import Icon1 from './images/undraw-img-7.svg';
import Icon2 from './images/undraw-img-6.svg';
import Icon3 from './images/undraw-img-5.svg';

export const homeObjOne = {
  id: 'about',
  menuName: 'About',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Premium Processes',
  headline: 'Refine your system operations with optimized traction',
  description:
    'Get access to our exclusive app that allows you to send unlimited packets across our utility network.',
  buttonLabel: 'Get Started',
  imgStart: false,
  img: image1,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: 'discover',
  menuName: 'Discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: 'Graphite Nano-Crystals',
  headline: 'Advanced Quantum Technology at your Fingertips',
  description:
    'Handheld bulkhead scrubbing is a thing of the past with our new micro-fiber automated drone bots.',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: image2,
  alt: 'Car',
  dark: false,
  primary: false,
  darkText: true,
};

export const servicesData = [
  {
    id: 'service',
    name: 'Widgets',
    description: 'Widgets are useful for tasks',
    icon: Icon1,
  },
  {
    id: 'service',
    name: 'Trinkets',
    description: 'Trinkets increase production value',
    icon: Icon2,
  },
  {
    id: 'service',
    name: 'Relics',
    description: 'Relics will boost absorption rates',
    icon: Icon3,
  },
];

export const homeObjThree = {
  id: 'discover-continued',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Monetary Stability',
  headline: 'I need your clothes, boots and your motorcycle',
  description:
    'In a time of tremendous uncertainty and strife, you should not have to worry about the loyalty of your laundry detergent.',
  buttonLabel: 'Activate Now',
  imgStart: false,
  img: image3,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false,
};

export const mainMenuData = [
  {
    id: 'about',
    name: 'About',
    toScroll: 'about',
    toRoute: '/#about',
    linkStyle: 'home-scroll',
  },
  {
    id: 'discover',
    name: 'Discover',
    toScroll: 'discover',
    toRoute: '/#discover',
    linkStyle: 'home-scroll',
  },
  {
    id: 'services',
    name: 'Services',
    toScroll: 'services',
    toRoute: '/#services',
    linkStyle: 'home-scroll',
  },
  {
    id: 'signup',
    name: 'Sign Up',
    toScroll: 'signup',
    toRoute: '/signup',
    linkStyle: 'green-router',
  },
  {
    id: 'login',
    name: 'Log In',
    toScroll: 'login',
    toRoute: '/login',
    linkStyle: 'btn-green-router',
  },
];

export const appMenuData = [
  {
    id: 'appGallery',
    name: 'Apps',
    toScroll: '',
    toRoute: '/app-gallery',
    linkStyle: 'app-link-green',
  },
  {
    id: 'form',
    name: 'Form',
    toScroll: '',
    toRoute: '/form-template',
    linkStyle: 'app-link-green',
  },
];
