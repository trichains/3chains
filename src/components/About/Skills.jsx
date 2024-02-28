const SkillList = [
  'react.js',
  'javaScript',
  'UI/UX',
  'web design',
  'figma',
  'wireframing',
  'responsive design',
  'tailwind css',
  'firebase',
  'copywriting',
  'SEO'
];
const Skills = () => {
  return (
    <section className="w-full p-20 flex flex-col items-center justify-center border-b-2 border-solid border-dark text-dark">
      <span className="font-semibold text-4xl text-accent">
        Estou confortável com...
      </span>
      <ul className="mt-8 flex flex-wrap justify-start">
        {SkillList.map((skill, index) => {
          return (
            <li
              key={index}
              className="font-semibold inline-block capitalize text-2xl py-5 px-12 border-2 border-solid border-dark rounded mr-6 mb-6 hover:scale-105 transition-all ease duration-200 cursor-pointer">
              {skill}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Skills;
