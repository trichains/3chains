'use client';

import { useForm } from 'react-hook-form';
import Link from 'next/link';
import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  PortfolioIcon
} from '../Header/Icons';

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {};

  return (
    <footer className="mt-16 bg-dark flex flex-col items-center text-light">
      <h3 className="mt-16 font-medium text-center capitalize text-4xl px-4">
        Histórias Interessantes | Atualizações | Notícias
      </h3>

      <p className="mt-5 px-4 text-center w-3/5 font-light text-base">
        Inscreva-se para saber mais sobre novas tecnologias e atualizações.
        Junte-se a mais de 5000+ membros da comunidade para se manter atualizado
        com as últimas notícias.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 min-w-[384px] flex items-stretch bg-blueGray p-2 rounded mx-4">
        <input
          type="email"
          name="email"
          placeholder="Seu melhor e-mail"
          ref={register}
          {...register('email', { required: true, maxLength: 80 })}
          className="w-full bg-transparent pl-0 text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1"
        />
        <input
          type="submit"
          className="bg-dark text-light cursor-pointer font-medium rounded px-5 py-1"
        />
      </form>

      <div className="flex items-center mt-8">
        <a
          href="https://www.facebook.com/trichains"
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
          href="https://github.com/trichains"
          target="_blank"
          rel="noreferrer"
          className="inline-block w-6 h-6 mr-4 fill-light">
          <GithubIcon
            className={'hover:scale-125 transition-all ease duration-200'}
          />
        </a>
        <a
          href="https://www.trichains.dev"
          target="_blank"
          rel="noreferrer"
          className="inline-block w-6 h-6 mr-4">
          <PortfolioIcon
            className={'hover:scale-125 transition-all ease duration-200'}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/trichains/"
          target="_blank"
          rel="noreferrer"
          className="inline-block w-6 h-6">
          <LinkedinIcon
            className={'hover:scale-125 transition-all ease duration-200'}
          />
        </a>
      </div>

      <div className="mt-24 w-full relative font-medium border-t border-solid border-light py-6 px-8 flex flex-row items-center justify-between">
        <span className="text-center">
          &copy; 2024 trichains. Todos os direitos reservados.
        </span>
        <Link href="/sitemap.xml" className="text-center underline">
          sitemap
        </Link>
        <div className="text-center">
          Feito com <span className="text-accent">&hearts;</span> por{' '}
          <a href="https://trichains.dev" className="underline">
            trichains
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
