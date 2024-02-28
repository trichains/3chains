'use client';
import Link from 'next/link';
import Logo from './Logo';
import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  PortfolioIcon,
  SunIcon
} from './Icons';
import siteMetadata from '@/src/utils/siteMetaData';
import { useThemeSwitch } from '../Hooks/useThemeSwitch';
import { useState } from 'react';

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };

  return (
    <header className="fixed w-full p-2 px-5 sm:px-10 flex items-center justify-between text-black dark:text-light bg-light dark:bg-darkBlue border-b border-blueGray dark:border-darkGray z-50">
      <button
        onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
        className="inline-block sm:hidden z-50">
        <SunIcon />
      </button>
      <Logo />

      {/* icone menu */}
      <button className="inline-block sm:hidden z-50" onClick={toggle}>
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 left-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
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
              className="absolute top-0 left-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
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
        className="absolute right-0 bg-light/80 dark:bg-darkBlue text-dark dark:text-light backdrop:-blur-sm z-50 gap-3 py-1 font-medium capitalize sm:hidden flex flex-col transition-all ease duration-300 rounded-xl"
        style={{
          top: click ? '2.6rem' : '-100vh'
        }}>
        <Link
          href="/"
          className="w-full flex justify-center items-center mb-2 p-2 border-b border-solid border-dark hover:bg-accentBg hover:text-dark dark:hover:text-light transition-all ease duration-200 hover:scale-105 rounded shadow hover:shadow-black/40 hover:shadow-lg">
          Início
        </Link>
        <Link
          href="/sobre"
          className="w-full flex justify-center items-center mb-2 p-2 border-b border-solid border-dark hover:bg-accentBg hover:text-dark dark:hover:text-light transition-all ease duration-200 hover:scale-105 rounded shadow hover:shadow-black/40 hover:shadow-lg">
          Sobre
        </Link>
        <Link
          href="/contato"
          className="w-full flex justify-center items-center mb-2 p-2 border-b border-solid border-dark hover:bg-accentBg hover:text-dark dark:hover:text-light transition-all ease duration-200 hover:scale-105 rounded shadow hover:shadow-black/40 hover:shadow-lg">
          Contato
        </Link>
      </nav>

      <nav className="w-max py-3 px-8 text-dark dark:text-light font-medium capitalize hidden sm:flex items-center">
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
          className="ml-2">
          <SunIcon />
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
