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
      className="mt-12 text-xl font-medium leading-relaxed font-in">
      Olá! Meu nome é{' '}
      <input
        type="text"
        placeholder="seu nome"
        {...register('name', { required: true, maxLength: 80 })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />{' '}
      quero conversar sobre um projetinho. Você pode enviar um e-mail para{' '}
      <input
        type="email"
        placeholder="seu@email"
        {...register('email', {})}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />{' '}
      ou entrar em contato comigo em:{' '}
      <input
        type="tel"
        placeholder="seu celular"
        {...register('phone number', {})}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />{' '}
      Aqui estão alguns detalhes sobre o meu projeto: <br />
      <textarea
        {...register('project details', {})}
        placeholder="Meu projeto é sobre..."
        rows={3}
        className="w-full outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />
      <input
        type="submit"
        value="Enviar"
        className="mt-8 font-medium inline-block capitalize text-xl py-3 px-8 border-2 border-solid border-dark rounded cursor-pointer hover:bg-dark hover:text-light hover:scale-105 transition-all ease duration-200"
      />
    </form>
  );
}
