import Image from 'next/image';
import profileCharacter from '@/public/avatar.png';

const AboutCoverSection = () => {
  return (
    <section
      className="w-full md:h-[85vh] flex flex-col md:flex-row items-center justify-center
      border-b-2 border-solid border-lightGray dark:border-darkGray
      text-dark dark:text-lightText">
      <div
        className="w-full md:w-1/2 h-full flex justify-center items-center
        border-r-2 border-solid border-lightGray dark:border-darkGray">
        <Image
          src={profileCharacter}
          alt="trichains"
          className="w-4/5 xs:w-3/4 md:w-full h-full object-contain object-center"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </div>

      <div
        className="w-full md:w-1/2 flex flex-col text-left items-start
        justify-center px-5 xs:p-10 pb-10 lg:px-16">
        <h2
          className="font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl
          text-center lg:text-left">
          Sonhe grande, Trabalhe duro, Conquiste mais
          <span className="text-accent dark:text-accent">.</span>
        </h2>
        <p className="mt-4 text-base font-medium dark:font-normal italic text-center">
          Esse é o <span className="font-bold">mantra</span> que impulsiona meu
          trabalho como front-end, é a essência que guia o meu caminho.
          <br />
          Minha abordagem envolve uma mistura de tecnologia{' '}
          <span className="font-bold">inovadora</span> e design{' '}
          <span className="font-bold">atemporal</span>, resultando em
          experiências digitais que cativam.
          <br />
          Com inspiração oriunda da{' '}
          <span className="font-bold">natureza e da arte</span>, me vejo como um
          eterno aprendiz, sempre pronto para abraçar desafios.
          <br />A cada projeto, meu objetivo é criar um{' '}
          <span className="font-bold">impacto duradouro</span>, contribuindo com
          minhas ideias e habilidades, um pixel de cada vez.
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;
