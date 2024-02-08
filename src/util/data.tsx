type NewsCard = {
  id: number;
  title: string;
  intro: string;
};

const newsCard: NewsCard[] = [
  {
    id: 1,
    title: 'Hydrogen VS Electric Cars',
    intro: 'Will hydrogen-fueled cars ever catch up to EVs?',
  },

  {
    id: 2,
    title: 'The Downsides of AI Artistry',
    intro:
      'What are the possible adverse effects of on-demand AI image generation?',
  },

  {
    id: 3,
    title: 'Is VC Funding Drying Up?',
    intro:
      'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
  },
];

type Topics = {
  id: number;
  seq: string;
  title: string;
  intro: string;
  image: string;
};

const topic: Topics[] = [
  {
    id: 1,
    seq: '01',
    title: 'Reviving Retro PCs',
    intro: 'What happens when old PCs are given modern upgrades?',
    image: '../../../assets/images/image-retro-pcs.jpg',
  },

  {
    id: 2,
    seq: '02',
    title: 'Top 10 Laptops of 2022',
    intro: 'Our best picks for various needs and budgets.',
    image: '../../../assets/images/image-top-laptops.jpg',
  },

  {
    id: 3,
    seq: '03',
    title: 'The Growth of Gaming',
    intro: 'How the pandemic has sparked fresh opportunities.',
    image: '../../../assets/images/image-gaming-growth.jpg',
  },
];

export { newsCard, topic };
