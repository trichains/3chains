import { slug } from 'github-slugger';
import Category from './Category';

const Categories = ({ categories, currentSlug }) => {
  return (
    <div
      className="flex flex-wrap items-start font-medium
      px-0 pt-4 md:px-10 sxl:px-20 mt-10 mx-5 md:mx-10
      border-t-2 border-b-2 border-solid border-lightGray dark:border-darkGray
      text-dark dark:text-lightText">
      {categories.map((cat) => (
        <Category
          key={cat}
          link={`/categorias/${cat}`}
          name={cat}
          active={currentSlug === slug(cat)}
        />
      ))}
    </div>
  );
};

export default Categories;
