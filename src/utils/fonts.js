import { Quicksand } from 'next/font/google';
import { Square_Peg } from 'next/font/google';

export const quicksandFont = Quicksand({
  weight: ['300', '400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const square_PegFont = Square_Peg({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});
