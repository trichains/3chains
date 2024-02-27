import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { slug } from 'github-slugger';
import Link from 'next/link';

const BlogDetails = ({ blog, slug: blogSlug }) => {
  return (
    <div className="flex items-center px-10 bg-accentBg text-accentText py-2 justify-around flex-wrap text-xl font-medium mx-10 rounded-lg">
      <time className="m-3">
        {format(parseISO(blog.publishedAt), "d 'de' MMMM - yyyy ", {
          locale: ptBR
        })}
      </time>

      <span>10 visualizações</span>
      <div>{blog.readingTime.text}</div>
      <Link href={`/categorias/${slug(blog.tags[0])}`} className="m-3">
        # {blog.tags[0]}
      </Link>
    </div>
  );
};

export default BlogDetails;
