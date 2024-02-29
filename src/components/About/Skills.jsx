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
    <section
      className="w-full flex flex-col items-center justify-center
      p-5 xs:p-10 sm:p-12 md:p-16 lg:p-20
      border-b-2 border-solid border-lightGray dark:border-darkGray
      text-dark dark:text-lightText">
      <span
        className="font-semibold text-2xl sm:text-3xl md:text-4xl inline
        bg-gradient-to-r from-dark via-accent to-darkSurface/80
        bg-clip-text text-transparent
        dark:from-accentText dark:via-accent dark:to-light">
        Estou confortável com...
      </span>
      <ul className="mt-8 flex flex-wrap justify-center xs:justify-start">
        {SkillList.map((skill, index) => {
          return (
            <li
              key={index}
              className="font-semibold inline-block capitalize
              text-base xs:text-lg sm:text-xl md:text-2xl
              py-2 xs:py-3 sm:py-4 lg:py-5 px-4 xs:px-6 sm:px-8 lg:px-12
              mr-3 mb-3 xs:mr-4 xs:mb-4 md:mr-6 md:mb-6
              border-2 border-solid border-dark dark:border-gray
              hover:scale-105 transition-all ease duration-200
              rounded cursor-pointer dark:font-normal">
              {skill}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Skills;
