import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { slug } from 'github-slugger';
import Link from 'next/link';
import ViewCounter from './ViewCounter';

const BlogDetails = ({ blog, slug: blogSlug }) => {
  return (
    <div
      className="flex items-center px-2 md:px-10 bg-accentBg dark:bg-accentDark text-accentText
      dark:text-dark py-2 justify-around flex-wrap text-lg sm:text-xl font-medium mx-5 md:mx-10 rounded-lg">
      <time className="m-3">
        {format(parseISO(blog.publishedAt), "d 'de' MMMM - yyyy ", {
          locale: ptBR
        })}
      </time>

      <span className="m-3">
        <ViewCounter slug={blogSlug} />
      </span>
      <div className="m-3">{blog.readingTime.text}</div>
      <Link href={`/categorias/${slug(blog.tags[0])}`} className="m-3">
        # {blog.tags[0]}
      </Link>
    </div>
  );
};

export default BlogDetails;
