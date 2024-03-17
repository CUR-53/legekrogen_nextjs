import Header from '@/components/common/header/header';

const logoPath = '/logo/legekrogen_logo.png';
const logoAlt = 'Legekrogen logo';

export default function siteLayout({ children }) {
  return (
    <div>
      <Header logoPath={logoPath} logoAlt={logoAlt} />
      {children}
    </div>
  );
}
