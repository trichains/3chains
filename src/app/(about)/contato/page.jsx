import AvatarAnimation from '@/src/components/Contact/AvatarAnimation';
import ContactForm from '@/src/components/Contact/ContactForm';
import siteMetadata from '@/src/utils/siteMetaData';

export const metadata = {
  title: 'Entre em Contato Comigo',
  description: `Entre em contato comigo através do formulário disponível nesta página ou envie um email para ${siteMetadata.email}`
};

export default function Contact() {
  return (
    <section
      className="w-full h-auto md:h-[85vh] flex flex-col md:flex-row items-center justify-center
      border-b-2 border-solid border-lightGray dark:border-darkGray
      text-dark dark:text-lightText">
      <div
        className="w-3/5 sm:4/5 md:w-2/5 h-full flex justify-center items-center
        md:border-r-2 border-solid border-lightGray dark:border-darkGray">
        <AvatarAnimation />
      </div>
      <div
        className="w-full md:w-3/5 h-full flex flex-col items-center justify-center
        px-5 xs:px-10 md:px-16 pb-8">
        <h2 className="font-bold capitalize text-2xl xs:text-3xl sm:text-4xl">
          Fale comigo!
        </h2>
        <ContactForm />
      </div>
    </section>
  );
}
