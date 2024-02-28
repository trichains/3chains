import './globals.css';
import { cx } from '@/src/utils';
import { Montserrat, Inter } from 'next/font/google';
import Header from '@/src/components/Header';
import Footer from '../components/Footer';
import siteMetadata from '../utils/siteMetaData';
import Script from 'next/script';

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
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: siteMetadata.locale,
    type: siteMetadata.type
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={cx(
          montserrat.variable,
          inter.variable,
          'font-ms bg-light dark:bg-darkBlue'
        )}>
        <Script id="theme-switcher">
          {`if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
            }`}
        </Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
