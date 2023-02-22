export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    rating: string;
    image: string;
    link: string;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Смартфон Samsung Galaxy A13 4 ГБ/128 ГБ черный',
      price: 90130,
      description:
      'технология NFC:Да;цвет: черный;тип экрана: PLS TFT LCD сенсорный, мультитач;диагональ: 6.6 дюйм;размер оперативной памяти: 4 ГБ;процессор: 8-ядерный Exynos 850;объем встроенной памяти: 128 ГБ;емкость аккумулятора: 5000 мАч',
      rating: '5 / 5',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf2/hbe/49613711933470/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-1.jpg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000#!/item',
    },
    {
      id: 2,
      name: 'Смартфон Apple iPhone 11 128Gb Slim Box черный',
      price: 292758,
      description:
        'Series Функциональный и стильный смартфон Apple iPhone 11 в металлическом корпусе способен обеспечить не только повседневное общение и развлечения, но и продуктивную работу. Изображение на экране смартфона диагональю 6.1 дюйма обладает поразительной детализацией и цветопередачей.',
      rating: '5 / 5',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0a/h2e/31489167622174/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg',
      link: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item',
    },
    {
      id: 3,
      name: 'Смартфон Xiaomi Redmi 10C 4 ГБ/128 ГБ серый',
      price: 71649,
      description:
       'Xiaomi Redmi 10C оснащен большим дисплеем с диагональю 6.71 дюйма с защитным стеклом Corning Gorilla Glass, которое защищает экран от царапин и повреждений при падениях. Redmi 10C позволяет создавать фотографии профессионального уровня в формате для развлечений. ',
      rating: '5 / 5',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hea/h96/49939925139486/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-1.jpg',
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=750000000#!/item',
    },
    {
      id: 4,
      name: 'Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый',
      price: 694990,
      description:
        'технология NFC: Дa;цвет: фиолетовый; тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы;диагональ: 6.7 дюйм; размер оперативной памяти: 6 ГБ; процессор: 6-ядерный Apple A16 Bionic; объем встроенной памяти: 256 ГБ; емкость аккумулятора: 3095 мАч',
      rating: '5 / 5',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h61/62948780736542/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item',
    },
    {
      id: 5,
      name: 'Смартфон Samsung Galaxy A33 5G 6 ГБ/128 ГБ черный',
      price: 129620,
      description:
       'Смартфон Galaxy A33 5G стал тоньше и элегантнее благодаря матовому покрытию, качественным рамкам и безупречному корпусу камеры с Ambient Edge. Благодаря 6.4-дюймовому экрану Infinity-U с частотой 90 Гц на смартфоне Galaxy A33 5G вы сможете увидеть все, что было скрыто от вашего взгляда. ',
      rating: '5 / 5',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7b/he7/49894748094494/samsung-galaxy-a33-5g-6-gb-128-gb-cernyj-104398547-1.jpg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a33-5g-6-gb-128-gb-chernyi-104398547/?c=750000000#!/item',
    },
    {
      id: 6,
      name: 'Смартфон Apple iPhone 13 128Gb синий',
      price: 375670,
      description:
       'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения. ',
      rating: '5 / 5',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h42/hed/46392661704734/apple-iphone-13-128gb-sinij-102298364-1-Container.jpg',
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000#!/item',
    },
    {
      id: 7,
      name: 'Телевизор Yasin LED-32E7000 81 см черный',
      price: 60215,
      description:
        'тип: LED-телевизор; диагональ: 32 дюйм; разрешение: 1366x768; поддержка HD: 720p HD; технология Smart TV: Нет; wi-Fi: Да;входы: AV, ,HDMI, ,USB, ,антенный, ,Bluetooth',
      rating: '4.5 / 5',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha2/h66/48926252433438/yasin-led-32e7000-cernyj-103411518-1.jpg',
      link: 'https://kaspi.kz/shop/p/yasin-led-32e7000-81-sm-chernyi-103411518/?c=750000000#!/item',
    },
    {
      id: 8,
      name: 'Телевизор Xiaomi TV P1 32 L32M6-6ARG 81 см черный',
      price: 119990,
      description:
       'Новаторский дизайн Xiaomi TV P1 32 без рамки с трех сторон обеспечивает более высокое соотношение экрана к корпусу, четкое изображение, захватывающий и приятный просмотр. Светодиодный дисплей Xiaomi TV P1 32 высокой четкости, с реалистичной картинкой и яркими цветами, обеспечивает комфортный и захватывающий просмотр.',
      rating: '4.2 / 5',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he1/h02/49320433975326/xiaomi-l32m6-6arg-81-sm-cernyj-103039169-1.jpg',
      link: 'https://kaspi.kz/shop/p/xiaomi-tv-p1-32-l32m6-6arg-81-sm-chernyi-103039169/?c=750000000#!/item',
    },
    {
      id: 9,
      name: 'Телевизор LG 43LM5772PLA 109 см черный',
      price: 183699,
      description:
       'Телевизоры LG HD позволяют наслаждаться более качественным изображением благодаря высокому разрешению и ярким цветам. Телевизоры LG HD созданы для того, чтобы удивлять вас отличным качеством изображения — в несколько раз лучше, чем SD. Благодаря технологиям Dynamic Color и Active HDR весь ваш любимый контент будет более реалистичным и потрясающим. Передовой процессор обработки изображений корректирует цвета, делая изображение более богатым и естественным. ',
      rating: '4.7 / 5',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he4/h4c/49320430338078/lg-43lm5772pla-108-sm-cernyj-101293496-1-Container.jpg',
      link: 'https://kaspi.kz/shop/p/lg-43lm5772pla-109-sm-chernyi-101293496/?c=750000000#!/item',
    },
    {
      id: 10,
      name: 'Телевизор Samsung UE43T5300AUXCE 109 см черный',
      price: 198970,
      description:
       'Смотрите HDR контент с улучшенной четкостью и точнейшей цветопередачей. Телевизор Samsung UHD обеспечивает более точную передачу деталей в самых ярких и темных сценах. Технология Ultra Clean View анализирует исходный контент с помощью новейшего алгоритма и формирует более качественные изображения с минимальным искажением. Наслаждайтесь четкостью изображения. ',
      rating: '4.6 / 5',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf3/hf1/49319748435998/samsung-ue43t5300au-chernyi-100182013-1.jpg',
      link: 'https://kaspi.kz/shop/p/samsung-ue43t5300auxce-109-sm-chernyi-100182013/?c=750000000#!/item',
    },
  ];
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */