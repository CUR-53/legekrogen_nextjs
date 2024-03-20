import './globals.css';
import { quicksandFont } from '@/utils/fonts';
import { BasketContextProvider } from '@/context/basket';

export const metadata = {
  title: 'Legekrogen',
  description: 'Legekrogen - legetøj til børn i alle aldre',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksandFont.className}>
        <BasketContextProvider>{children}</BasketContextProvider>
      </body>
    </html>
  );
}
