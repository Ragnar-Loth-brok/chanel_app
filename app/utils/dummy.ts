import {hp} from './config';
import {ImageStructure} from './types';

export const IMAGE_HEIGHT = hp(70);
export const INIT_IMAGE_HEIGHT = hp(15);
export const MIN_IMAGE_HEIGHT = hp(40);

export const IMAGE_URLS: Readonly<ImageStructure[]> = [
  {
    id: 1,
    url: 'https://puls-img.chanel.com/c_limit,w_3200/q_auto:good,dpr_auto,f_auto/1706103945422-homepagecorpoonedesktopnoparallaxe5jpg.jpg',
    title: 'SPRING-SUMMER 2024',
    subTitle: 'HAUTE COUTURE SHOW',
  },
  {
    id: 2,
    url: 'https://puls-img.chanel.com/c_limit,w_3200/q_auto:good,dpr_auto,f_auto/1705337605766-homepagecorpoonedesktop26jpg.jpg',
    title: 'SPRING SUMMER 2024 PRE-COLLECTION',
    subTitle: 'IN BOUTIQUES',
  },
  {
    id: 3,
    url: 'https://puls-img.chanel.com/c_limit,w_3200/q_auto:good,dpr_auto,f_auto/1702311840315-jenniedjpg.jpg',
    title: 'THE CRUISE 2023/24 COLLECTION',
    subTitle: 'IN BOUTIQUES',
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/3011499/pexels-photo-3011499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'CRUISE 2023/24 COLLECTION',
    subTitle: `SHOW \nIN SHENZHEN`,
  },
  {
    id: 5,
    url: 'https://images.pexels.com/photos/9509656/pexels-photo-9509656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'COCO NEIGE 2023/24 COLLECTION',
    subTitle: 'IN BOUTIQUES',
  },
  {
    id: 6,
    url: 'https://puls-img.chanel.com/c_limit,w_3200/q_auto:good,dpr_auto,f_auto/1691050806675-hpcorpoone2880x1260v21jpg_1260x2880.jpg',
    title: 'FINE JEWELRY',
    subTitle: 'COCO CRUSH',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1543728069-a3f97c5a2f32?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'SPRING-SUMMER 2024',
    subTitle: 'READY-TO-WEAR SHOW',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'THE CHANEL PODCAST',
    subTitle: 'CONVERSATIONS ON CREATION',
  },
];

export const MAX_LENGTH = IMAGE_URLS.length + 1;
