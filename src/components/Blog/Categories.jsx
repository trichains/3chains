import { slug } from 'github-slugger';
import Category from './Category';

const Categories = ({ categories, currentSlug }) => {
  return (
    <div className="flex flex-wrap items-start px-20 mt-10 border-t-2 text-dark border-b-2 border-solid border-blueGray py-4 font-medium mx-10">
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
