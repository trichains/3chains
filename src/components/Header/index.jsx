'use client';
import Link from 'next/link';
import Logo from './Logo';
import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  PortfolioIcon,
  SunIcon
} from './Icons';
import siteMetadata from '@/src/utils/siteMetaData';
import { useThemeSwitch } from '../Hooks/useThemeSwitch';
import { useState } from 'react';
import { cx } from '@/src/utils';

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };

  return (
    <header className="fixed w-full top-0 py-2 px-5 sm:px-10 flex flex-row-reverse sm:flex-row items-center justify-between text-blackBlue dark:text-lightText bg-light dark:bg-dark border-b border-lightGray dark:border-darkGray z-50">
      <button
        onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
        className={cx(
          'w-6 h-6 ease sm:hidden z-50 flex items-center justify-center rounded-full p-1',
          mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
        )}>
        {mode === 'light' ? (
          <MoonIcon className={'fill-dark'} />
        ) : (
          <SunIcon className={'fill-dark'} />
        )}
      </button>

      <Logo />
      {/* icone menu */}
      <button className="inline-block sm:hidden z-50 w-6 h-6" onClick={toggle}>
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className={`absolute top-0 left-0 inline-block w-full h-0.5 rounded transition-all ease duration-200 ${
                click ? 'bg-light dark:bg-dark' : 'bg-dark dark:bg-light'
              }`}
              style={{
                transform: click
                  ? 'rotate(-45deg) translateY(0)'
                  : 'rotate(0deg) translateY(6px)'
              }}>
              &nbsp;
            </span>
            <span
              className="absolute top-0 left-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1
              }}>
              &nbsp;
            </span>
            <span
              className={`absolute top-0 left-0 inline-block w-full h-0.5 rounded transition-all ease duration-200 ${
                click ? 'bg-light dark:bg-dark' : 'bg-dark dark:bg-light'
              }`}
              style={{
                transform: click
                  ? 'rotate(45deg) translateY(0)'
                  : 'rotate(0deg) translateY(-6px)'
              }}>
              &nbsp;
            </span>
          </div>
        </div>
      </button>
      {/* navbar no celular */}
      <nav
        className={`absolute left-0 w-[35%] top-0 pt-14 pb-4 bg-dark/90 dark:bg-light/90 text-lightText dark:text-dark backdrop-blur-sm z-0 gap-1 font-medium capitalize sm:hidden flex flex-col items-start justify-center transition-all duration-300 ${
          click ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}>
        <Link
          href="/"
          className="w-full pl-6 py-2 hover:bg-darkSurface hover:text-lightText  transition-all ease duration-200">
          Início
        </Link>
        <hr className="border-b border-solid border-darkGray" />
        <Link
          href="/sobre"
          className="w-full pl-6 py-2 hover:bg-darkSurface hover:text-lightText transition-all ease duration-200">
          Sobre
        </Link>
        <hr className="border-b border-solid border-darkGray" />
        <Link
          href="/contato"
          className="w-full pl-6 py-2 hover:bg-darkSurface hover:text-lightText transition-all ease duration-200">
          Contato
        </Link>
      </nav>
      <nav className="w-max py-3 px-8 text-dark dark:text-lightText font-medium capitalize hidden sm:flex items-center">
        <Link href="/" className="mr-2">
          Início
        </Link>
        <Link href="/sobre" className="mx-2">
          Sobre
        </Link>
        <Link href="/contato" className="mx-2">
          Contato
        </Link>
        <button
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          className={cx(
            'w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1',
            mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
          )}>
          {mode === 'light' ? (
            <MoonIcon className={'fill-dark'} />
          ) : (
            <SunIcon className={'fill-dark'} />
          )}
        </button>
      </nav>
      <div className="hidden sm:flex items-center">
        <a
          href={siteMetadata.facebook}
          target="_blank"
          rel="noreferrer"
          className="inline-block w-6 h-6 mr-4">
          <FacebookIcon
            className={
              'hover:scale-125 transition-all ease duration-200 rounded-full'
            }
          />
        </a>
        <a
          href={siteMetadata.github}
          target="_blank"
          rel="noreferrer"
          className="inline-block w-6 h-6 mr-4">
          <GithubIcon
            className={
              'hover:scale-125 transition-all ease duration-200 dark:fill-light'
            }
          />
        </a>
        <a
          href={siteMetadata.portfolio}
          target="_blank"
          rel="noreferrer"
          className="inline-block w-6 h-6 mr-4">
          <PortfolioIcon
            className={'hover:scale-125 transition-all ease duration-200'}
          />
        </a>
        <a
          href={siteMetadata.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-block w-6 h-6">
          <LinkedinIcon
            className={'hover:scale-125 transition-all ease duration-200'}
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
