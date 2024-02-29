'use client';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-6 sm:mt-12 text-base xs:text-lg sm:text-xl font-medium
      leading-relaxed font-in flex flex-col items-center text-center sm:block">
      Olá! Meu nome é{' '}
      <input
        type="text"
        placeholder="seu nome"
        {...register('name', { required: true, maxLength: 80 })}
        className="outline-none border-0 p-0 mx-2 text-center focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray/50 focus:border-accentDark bg-transparent"
      />{' '}
      quero conversar sobre um projetinho.
      <br />
      Você pode enviar um e-mail para{' '}
      <input
        type="email"
        placeholder="seu@email"
        {...register('email', {})}
        className="outline-none border-0 p-0 mx-2 text-center focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray/50 focus:border-accentDark bg-transparent"
      />{' '}
      ou entrar em contato comigo em:{' '}
      <input
        type="tel"
        placeholder="seu celular"
        {...register('phone number', {})}
        className="outline-none border-0 p-0 mx-2 text-center focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray/50 focus:border-accentDark bg-transparent"
      />{' '}
      Aqui estão alguns detalhes sobre o meu projeto: <br />
      <textarea
        {...register('project details', {})}
        placeholder="Meu projeto é sobre..."
        rows={2}
        className="w-full pt-2 outline-none border-0 p-0 mx-2 text-center focus:ring-0
        placeholder:text-lg border-b border-gray/50 focus:border-accentDark
        bg-transparent resize-none placeholder:text-center"
      />
      <input
        type="submit"
        value="Enviar"
        className="mt-8 text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8
        border-2 border-solid border-dark/70 dark:border-light/70
        rounded cursor-pointer font-medium inline-block capitalize
        hover:bg-dark hover:text-lightText dark:hover:bg-light dark:hover:text-dark
        hover:scale-105 transition-all ease duration-200"
      />
    </form>
  );
}
