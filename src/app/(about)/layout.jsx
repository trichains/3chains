import InsightRoll from '@/src/components/About/InsightRoll';

const insights = [
  '20+ Projetos Concluídos 🚀',
  '2+ Anos de Estudo 📚',
  '7+ Certificados Garantidos 🏆',
  '10+ Clientes Satisfeitos 😊',
  'Participação ativa em projetos de front-end 💻',
  'Adaptação rápida a novas tecnologias e metodologias 🌐',
  'Comprometido com práticas de codificação limpa 💡'
];

export default function AboutLayout({ children }) {
  return (
    <main className="flex flex-col items-center justify-between w-full">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
