import { cx } from '@/src/utils';
import Link from 'next/link';

const Category = ({ link = '#', name, active, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        'inline-block py-1.5 md:py-2 px-6 md:px-10 rounded-full shadow hover:shadow-black/40 hover:shadow-lg hover:bg-black dark:hover:bg-black hover:text-light dark:hover:text-light hover:scale-105 transition-all ease duration-200 m-2',
        props.className,
        active
          ? 'bg-accentText dark:bg-accentDark dark:text-dark'
          : 'bg-darkGray dark:bg-darkSurface text-dark dark:text-lightText'
      )}>
      #{name}
    </Link>
  );
};

export default Category;
