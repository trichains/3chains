import { sortBlogs } from '@/src/utils';
import Link from 'next/link';
import BlogLayoutThree from '../Blog/BlogLayoutThree';

const RecentPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <div className="flex w-full justify-between">
        <h2 className="w-fit inline-block capitalize text-2xl md:text-4xl text-dark dark:text-lightText">
          <span className="text-accent dark:text-accentDark font-bold">
            Últimas
          </span>{' '}
          Postagens
        </h2>
        <Link
          href="/categorias/tudo"
          className="inline-block font-medium text-accent dark:text-accentDark underline underline-offset-2 text-base md:text-lg">
          Ver mais
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
        {sortedBlogs.slice(4, 10).map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
