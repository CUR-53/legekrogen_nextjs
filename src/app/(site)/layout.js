import Footer from '@/components/site/common/footer/footer';
import Header from '@/components/site/common/header/header';

const menuData = [
  {
    id: 1,
    title: 'Forside',
    url: '/',
  },
  {
    id: 2,
    title: 'Produkter',
    url: '/produkter',
  },
  {
    id: 3,
    title: 'FAQ',
    url: '/faq',
  },
  {
    id: 4,
    title: 'kundeklubben',
    url: '/kundeklubben',
  },
];

const logoPath = '/logo/legekrogen_logo.png';
const logoAlt = 'Legekrogen logo';

export default function siteLayout({ children }) {
  return (
    <div>
      <Header logoPath={logoPath} logoAlt={logoAlt} menu={menuData} />
      {children}
      <Footer />
    </div>
  );
}
