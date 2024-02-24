import { cx } from '@/src/utils';
import './globals.css';
import { Montserrat, Inter } from 'next/font/google';
import Header from '@/src/components/Header';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ms'
});
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-in'
});

export const metadata = {
  title: '3Chains',
  description: 'Blog pessoal com Next.js, TailwindCSS e Contentlayer'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={cx(
          montserrat.variable,
          inter.variable,
          'font-ms bg-light '
        )}>
        <Header />
        {children}
      </body>
    </html>
  );
}
