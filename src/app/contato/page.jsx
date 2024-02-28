import AvatarAnimation from '@/src/components/Contact/AvatarAnimation';
import ContactForm from '@/src/components/Contact/ContactForm';

export default function Contact() {
  return (
    <section className="w-full h-[85vh] border-b-2 border-solid border-dark flex flex-row items-center justify-center text-dark">
      <div className="w-2/5 h-full border-r-2 border-solid border-dark flex justify-center items-center">
        <AvatarAnimation />
      </div>
      <div className="w-3/5 h-full flex flex-col items-start justify-center px-16 pb-8">
        <h2 className="font-bold capitalize text-4xl">Fale comigo!</h2>
        <ContactForm />
      </div>
    </section>
  );
}
