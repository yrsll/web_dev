export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
}

export const products = [
  {
    id: 1,
    name: 'Logitech G Pro X Superlight ',
    price: 76985,
    description: 'Connection type: Wireless\n' +
        'Sensor Type: Optical Laser\n' +
        'Interface: USB, ,Radio\n' +
        'channel Design: for right and left hand\n' +
        'Gaming: Yes\n' +
        'Optical sensor resolution: 25600 DPI',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h29/h3d/52239169749022/logitech-g-pro-x-superlight-rozovyj-105681243-1.jpg',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/logitech-g-pro-x-superlight-rozovyi-105681243/?c=750000000#!/item'
  },
  {
    id: 2,
    name: 'Apple iPhone 13 128Gb',
    price: 373090,
    description: 'NFC Technology: Yes\n' +
        'Color: Black\n' +
        'Screen Type: OLED, Super Retina XDR\n' +
        'Diagonal: 6.1 inches\n' +
        'RAM size: 4 GB\n' +
        'Processor: 6-core Apple A15 Bionic\n' +
        'Internal memory: 128 GB\n' +
        'Battery capacity: 3095 match',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item'

  },
  {
    id: 3,
    name: 'Apple iPhone 14 Pro 256Gb',
    price: 625300,
    description: 'NFC technology: Yes\n' +
        'Color: Purple\n' +
        'Screen type: OLED, Super Retina XDR display with the possibility of constant operation\n' +
        'diagonal: 6.1 inches\n' +
        'RAM size: 6 GB\n' +
        'Processor: 6-core Apple A16 Bionic\n' +
        'Internal memory: 256 GB\n' +
        'Battery capacity: 3125 match',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4d/h62/62948396728350/apple-iphone-14-pro-128gb-fioletovyj-106363319-1.jpg',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-fioletovyi-106363319/?c=750000000#!/item'

  },
  {
    id: 4,
    name: ' Apple MacBook Air 13 MGN63',
    price: 480550,
    description: 'screen diagonal: 13.3 inch\n' +
        'processor: Apple M1\n' +
        'Video card: Apple M1 7 core\n' +
        'RAM size: 8 GB\n' +
        'Hard disk type: SSD\n' +
        'total storage capacity: 256 GB',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item'
  },
  {
    id: 5,
    name: 'Samsung Galaxy A23 6 ГБ/128 ГБ',
    price: 104560,
    description: 'NFC Technology: Yes\n' +
        'Color: Black\n' +
        'Screen type: PLS TFT LCD Touch, multitouch\n' +
        'Diagonal: 6.6 inch\n' +
        'RAM size: 6 GB\n' +
        'Processor: 8-core Snapdragon 680\n' +
        'Internal Memory: 128 GB\n' +
        'Battery capacity: 5000mAh',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/ha6/49792685244446/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=750000000#!/item'
  },
  {
    id: 6,
    name: 'Apple iPhone 11 64Gb Slim Box',
    price: 156199,
    description: 'NFC Technology: Yes\n' +
        'Color: Black\n' +
        'Screen type: Multi-touch color IPS, Liquid Retina HD\n' +
        'Diagonal: 6.1 inches\n' +
        'RAM size: 4 GB\n' +
        'Processor: 6-core Apple A13 Bionic\n' +
        'Internal memory: 64 GB\n' +
        'Battery capacity: 3110 match',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h25/hfa/32690571706398/apple-iphone-11-64gb-slim-box-cernyj-100692387-1-Container.jpg',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/apple-iphone-11-64gb-slim-box-chernyi-100692387/?c=750000000#!/item'
  },
  {
    id: 7,
    name: 'Apple iPhone 12 64Gb',
    price:  321780 ,
    description: 'NFC Technology: Yes\n' +
        'Color: Black\n' +
        'Screen Type: Touch, Multi-touch OLED, Super Retina XBE\n' +
        'Diagonal: 6.1 inches\n' +
        'RAM size: 4 GB\n' +
        'Processor: 6-core Apple A14 Bionic\n' +
        'Internal memory: 64 GB\n' +
        'Battery capacity: 2775 match',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfa/h97/33279114575902/apple-iphone-12-64gb-cernyj-100656839-1-Container.jpg',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/apple-iphone-12-64gb-chernyi-100656839/?c=750000000#!/item'
  },
  {
    id: 8,
    name: 'Apple AirPods with Charging Case',
    price: 67840,
    description: 'Type: Headset\n' +
        'Type\n' +
        ': In-channel Connection: Wireless\n' +
        'Type of acoustic design: open\n' +
        'Mount type: without mount\n' +
        'Active noise Reduction system: No\n' +
        'Microphone: Yes',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb6/h3d/46637140508702/apple-airpods-2-with-charging-case-belyj-4804056-2-Container.jpg',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/apple-airpods-with-charging-case-belyi-4804056/?c=750000000#!/item'
  },
  {
    id: 9,
    name: 'Apple AirPods 3',
    price: 96260,
    description: 'Type: Headset\n' +
        'Type\n' +
        ': In-channel Connection: Wireless\n' +
        'Type of acoustic design: open\n' +
        'Mount type: without mount\n' +
        'Active noise Reduction system: No\n' +
        'Microphone: Yes',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h12/h12/46719106023454/apple-airpods-3-belyj-102667744-1.jpg',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/apple-airpods-3-belyi-102667744/?c=750000000#!/item'
  },
  {
    id: 10,
    name: 'Apple AirPods Pro 2nd generation',
    price: 119495,
    description: 'Type: headphones\n' +
        'Type\n' +
        ': in-channel connection: wireless\n' +
        'type of acoustic design: closed\n' +
        'Type of attachment: without attachment\n' +
        'active noise reduction system: Yes\n' +
        'microphone: Yes',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hba/hf8/62281477259294/apple-airpods-pro-2nd-generation-belyj-106362968-1.jpg',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362968/?c=750000000#!/item'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/