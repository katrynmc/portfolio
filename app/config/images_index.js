import HUPPAH from 'Config/portfolio_data/huppah';
import SKETCHBOOK from 'Config/portfolio_data/sketchbook';
import PARADE from 'Config/portfolio_data/parade';
import EYES from 'Config/portfolio_data/eyes';
import KNIT_PARADE from 'Config/portfolio_data/knit_parade';
import PLEATS_STUDY from 'Config/portfolio_data/pleats_study';
import LANDSCAPE from 'Config/portfolio_data/landscape';
import KNIT_GRID from 'Config/portfolio_data/knit_grid';
import CIRCUITS from 'Config/portfolio_data/circuits';
import CATS from 'Config/portfolio_data/cats';

const PORTFOLIO = [
  EYES,
  KNIT_PARADE,
  PLEATS_STUDY,
  KNIT_GRID,
  CIRCUITS,
  CATS,
  LANDSCAPE,
  {
    title: 'Knit Paint',
    blurredIndex: require('Images/portfolio_index/knitpaint.png'),
    indexAltText: 'Detail of Knit Paint, Oil Painting',
    inFocusIndex: require('Images/portfolio_index/knitpaint_focus.png'),
    largeAsset: require('Images/show/knitpaint.png'),
    additionalImages: [],
    year: '2007',
    description: '',
    tags: [],
    medium: 'Oil paint on panel',
    categories: ['PAINTING', '2D'],
    size: '3ft x 5ft',
    slug: 'knit-paint'
  },
  {
    title: 'Drawer of Found Objects',
    blurredIndex: require('Images/portfolio_index/drawer1.png'),
    indexAltText: 'Detail of Found Object Still Life, Guoache',
    inFocusIndex: require('Images/portfolio_index/drawer1_focus.png'),
    largeAsset: require('Images/show/drawer1.png'),
    additionalImages: [],
    year: '2006',
    description: '',
    tags: [],
    medium: 'Guoache on paper',
    categories: ['PAINTING', '2D'],
    size: '8in x 10in',
    slug: 'drawer-1'
  },
  {
    title: 'Scene from the Woods',
    blurredIndex: require('Images/portfolio_index/screenprint.png'),
    indexAltText: 'Detail of Scene from The Woods, Screenprint',
    inFocusIndex: require('Images/portfolio_index/screenprint_focus.png'),
    largeAsset: require('Images/show/screenprint.png'),
    additionalImages: [],
    year: '2007',
    description: '',
    tags: [],
    medium: 'Screenprint, gold ink on paper',
    categories: ['SCREENPRINTING', '2D'],
    size: '22in x 30in',
    slug: 'screenprint'
  },
  {
    title: 'Brain Moth',
    blurredIndex: require('Images/portfolio_index/brainmoth.png'),
    indexAltText: 'Detail of Abstract Brain-like Pattern, Digital Repeat',
    inFocusIndex: require('Images/portfolio_index/brainmoth_focus.png'),
    largeAsset: require('Images/show/brainmoth.png'),
    additionalImages: [],
    year: '2009',
    description: '',
    tags: [],
    medium: '',
    categories: ['DIGITAL REPEAT', '2D'],
    size: '',
    slug: 'brain-moth'
  },
  // {
  //   title: 'Collected Stones',
  //   blurredIndex: require('Images/portfolio_index/stones.png'),
  //   indexAltText: 'Detail of Painting of Collected Stones, Guoache',
  //   inFocusIndex: require('Images/portfolio_index/stones_focus.png'),
  //   largeAsset: require('Images/show/stones.png'),
  //   additionalImages: [],
  //   year: '2006',
  //   description: '',
  //   tags: [],
  //   medium: 'Guoache on paper',
  //   categories: ['PAINTING', '2D'],
  //   size: '6in x 7in',
  //   slug: 'stones'
  // },
  {
    title: 'Balloon Skull Installation',
    blurredIndex: require('Images/portfolio_index/skull.png'),
    indexAltText: 'Detail of Balloon Skull Installation, Mixed Media Installation',
    inFocusIndex: require('Images/portfolio_index/skull_focus.png'),
    largeAsset: require('Images/show/skull.jpg'),
    additionalImages: [],
    year: '2015',
    description: '',
    tags: ['installation'],
    medium: 'Balloons, mixed media',
    categories: ['INSTALLATION', '3D'],
    size: '12ft x 12ft',
    slug: 'skull'
  },
  // {
  //   title: 'Lolita',
  //   blurredIndex: require('Images/portfolio_index/lolita.png'),
  //   indexAltText: 'Detail of Lolita, Oil painting',
  //   inFocusIndex: '',
  //   largeAsset: require('Images/show/lolita.png'),
  //   additionalImages: [],
  //   year: '2007',
  //   description: '',
  //   tags: ['oil', 'painting'],
  //   medium: 'Oil on linen',
  //   categories: ['PAINTING', '2D'],
  //   size: '11in x 14in',
  //   slug: 'lolita'
  // },
  PARADE,
  HUPPAH,
  SKETCHBOOK
];

export default PORTFOLIO;
