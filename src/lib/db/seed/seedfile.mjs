export const products = [
  {
    title: 'Brio',
    description: 'Togbane i 50 dele',
    image: '/products/64203e1b33cbb10b94cc0081.jpg',
    price: 749,
    discountInPercent: 0,
    recommended: true,
  },
  {
    title: 'Tiny Republic Play 3',
    description: 'Tandlægesæt i træ',
    image: '/products/64203f5833cbb10b94cc009c.jpg',
    price: 169,
    discountInPercent: 0,
    recommended: false,
  },
  {
    title: 'Kids Concept',
    description: 'Edwind gåvogn',
    image: '/products/64203f6633cbb10b94cc009e.jpg',
    price: 499,
    discountInPercent: 45,
    recommended: true,
  },
  {
    title: 'Vilac',
    description: 'Fire på stribe spil',
    image: '/products/64203f7133cbb10b94cc00a0.jpg',
    price: 69.3,
    discountInPercent: 30,
    recommended: false,
  },
  {
    title: 'Kids Concept',
    description: 'Neo gyngedinosaur',
    image: '/products/64203f9833cbb10b94cc00a4.jpg',
    price: 749,
    discountInPercent: 0,
    recommended: true,
  },
  {
    title: 'Facial oil',
    image: '/products/product_2332233444.jpg',
    price: 324,
    discountInPercent: 10,
    recommended: false,
  },
  {
    title: 'Tiny Republic Play',
    description: 'Isbod i træ',
    image: '/products/64203fd433cbb10b94cc00a9.jpg',
    price: 259,
    discountInPercent: 0,
    recommended: false,
  },
];

export const subscribers = [
  {
    name: 'Anders Christensen',
    email: 'anders@mediacollege.dk',
    message: 'Jeg er en subscriber',
  },
];

export const reviews = [
  {
    name: '- Heidi, mor til Hugo på 3 år',
    description:
      'Pakken kom dagen efter jeg bestilte. Der blev jeg positivt overrasket, da der står på deres hjemmeside at leveringstiden er 2-4 hverdage. Og min lille Hugo elsker sin nye træhest.',
  },
  {
    name: '- Omar, onkel til Anton på 11 år',
    description:
      'Jeg fik varen tilsendt i den forkerte farve, men da jeg kontaktede Legekrogens kundeservice, var de meget hurtige til at sende mig den rigtige farve. Jeg fik endda en gratis slikpose med. Det var meget lækkert',
  },
  {
    name: '- Karsten Hansen, Morfar',
    description:
      'Når jeg skal bestille julegaver til alle mine 14 børnebørn, er det næsten en umulig opgave. Mine døtre har meget høje krav, når det kommer til legetøj til deres børn. Jeg tør næsten ikke købe noget. Men efter min gode ven Lars tippede mig om Legekrogen.dk, har jeg ikke længere problemer med at købe de perfekte julegaver. Tak til Legekrogen. Og Lars',
  },
];

export const questions = [
  {
    question: 'Hvor lang tid er leveringstiden?',
    answer: '2-4 hverdage. Det kan tage længere tid op til højtider og helligdage.',
  },
  {
    question: 'Hvad kan jeg gøre, hvis jeg finder varen billigere et andet sted?',
    answer:
      'Vi prismatcher på følgende parametre:<ol><li>Prisen skal gælde på handelstidspunktet.</li><li>Varen skal være i samme model, farve og evt. størrelse</li><li>Varen skal være på lager hos konkurrenten på tidspunktet for prismatch</li></ol>',
  },
  {
    question: 'Hvor lang tid har jeg til at returnere?',
    answer: 'Vi tilbyder 30 dages retur/bytteret fra den dag, hvor du modtager varerne.',
  },
];

export const orders = (id) => [
  {
    products: [
      {
        id: id.toString(),
        amount: 1,
      },
    ],
    email: 'anders@mediacollege.dk',
  },
];
