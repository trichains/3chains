import { cx } from '@/src/utils';
import Link from 'next/link';

const Category = ({ link = '#', name, active, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        'inline-block py-2 px-10 rounded-full shadow border-2 border-solid border-dark hover:shadow-black/40 hover:shadow-lg hover:bg-dark hover:text-light hover:scale-105 transition-all ease duration-200 m-2',
        props.className,
        active ? 'bg-accentBg text-accentText' : 'bg-light text-dark'
      )}>
      #{name}
    </Link>
  );
};

export default Category;
