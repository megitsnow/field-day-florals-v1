import image1 from './images/IMG_6776.jpg';
import image2 from './images/IMG_6906.jpg';
import image3 from './images/IMG_6940.jpg';
import image4 from './images/413A5816-1.jpg';
import image5 from './images/413A5971.jpg';
import image6 from './images/IMG_6744.jpg';
import image7 from './images/IMG_6682.jpg';
import image8 from './images/IMG_6687.jpg';
import image9 from './images/IMG_8110.jpg';
import image10 from './images/IMG_6998.jpg';

export const photos = [
  { src: `${image3}`, width: 3000, height: 5500 },
  { src: `${image1}`, width: 5000, height: 3400 },
  { src:  `${image4}`, width: 2400, height: 3600 },
  { src: `${image2}`, width: 3400, height: 5100 },
  { src: `${image5}`, width: 950, height: 1400 },
  { src: `${image10}`, width: 3400, height: 5100 },
  { src: `${image6}`, width: 3500, height: 3300 },
  // { src: `${image9}`, width: 3400, height: 5100 },
  { src: `${image7}`, width: 5000, height: 3400 },
  { src: `${image8}`, width: 5200, height: 3400 },
];

export const setting = {
  width: '600px',
  height: ['600px', '300px'],
  layout: [1, 2],
  photos: [
    { source: `${image5}` },
    { source: `${image5}` },
    { source:  `${image8}`},
  ],
  showNumOfRemainingPhotos: false
};

