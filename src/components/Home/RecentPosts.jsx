import { sortBlogs } from '@/src/utils';
import Link from 'next/link';
import BlogLayoutThree from '../Blog/BlogLayoutThree';

const RecentPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center">
      <div className="flex w-full justify-between">
        <h2 className="inline-block capitalize text-4xl">
          <span className="text-accent font-bold">Últimas</span> postagens
        </h2>
        <Link
          href="/categorias/all"
          className="inline-block font-medium text-accent underline underline-offset-2 text-lg">
          Ver mais
        </Link>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-16 mt-16">
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
