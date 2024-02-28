import AboutCoverSection from '@/src/components/About/AboutCoverSection';
import Skills from '@/src/components/About/Skills';
import Link from 'next/link';

export const metadata = {
  title: 'Sobre mim',
  description: 'Aqui estão alguns detalhes sobre mim.'
};

export default function About() {
  return (
    <>
      <AboutCoverSection />
      <Skills />
      <h2 className="mt-8 font-semibold text-2xl self-start mx-20 text-dark">
        Tem um projeto em mente? Entre em contato comigo{' '}
        <Link
          href="/contato"
          className="!underline underline-offset-2 hover:text-accent">
          aqui
        </Link>{' '}
        e vamos fazer acontecer. 🤝
      </h2>
    </>
  );
}
