import Image from 'next/image';
import profileCharacter from '@/public/avatar.png';

const AboutCoverSection = () => {
  return (
    <section className="w-full h-[85vh] border-b-2 border-solid border-dark flex flex-row items-center justify-center text-dark">
      <div className="w-1/2 h-full border-r-2 border-solid border-dark flex justify-center">
        <Image
          src={profileCharacter}
          alt="trichains"
          className="w-full h-full object-contain object-center"
        />
      </div>

      <div className="w-1/2 flex flex-col text-left items-start justify-center px-16">
        <h2 className="font-bold capitalize text-6xl">
          Sonhe grande, Trabalhe duro, Conquiste mais
          <span className="text-accent">!</span>
        </h2>
        <p className="font-medium capitalize mt-4 text-base">
          Esse é o mantra que impulsiona meu trabalho como front-end, é a
          essência que guia o meu caminho. Minha abordagem envolve uma mistura
          de tecnologia inovadora e design atemporal, resultando em experiências
          digitais que cativam. Com inspiração oriunda da natureza e da arte, me
          vejo como um eterno aprendiz, sempre pronto para abraçar desafios. A
          cada projeto, meu objetivo é criar um impacto duradouro, contribuindo
          com minhas ideias e habilidades, um pixel de cada vez.
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;
