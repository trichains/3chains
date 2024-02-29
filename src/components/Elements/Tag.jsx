import { cx } from '@/src/utils';
import Link from 'next/link';

const Tag = ({ link = '#', name, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        'inline-block py-2 sm:py-3 px-6 bg-darkSurface text-light rounded-full capitalize font-semibold shadow hover:shadow-black/40 hover:shadow-lg hover:bg-accent hover:scale-105 transition-all ease duration-200 text-sm sm:text-base',
        props.className
      )}>
      {name}
    </Link>
  );
};

export default Tag;
