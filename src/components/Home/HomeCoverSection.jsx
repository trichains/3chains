import { sortBlogs } from '@/src/utils';
import { slug } from 'github-slugger';
import Image from 'next/image';
import Link from 'next/link';
import Tag from '../Elements/Tag';

const HomeCoverSection = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];

  return (
    <div className="w-full inline-block mt-16">
      <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
        <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b  from-transparent from-[-50%] to-dark rounded-3xl z-0" />
        <Image
          src={blog.image.filePath.replace('../public', '')}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          fill
          className="w-full h-full object-center object-cover rounded-3xl -z-10"
        />

        <div className="w-full lg:w-3/4 p-16 flex flex-col items-start justify-center z-0 text-light">
          <Tag link={`/categorias/${slug(blog.tags[0])}`} name={blog.tags[0]} />
          <Link href={blog.url} className="mt-6">
            <h1 className="font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl">
              <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_6px]">
                {blog.title}
              </span>
            </h1>
          </Link>
          <p className="inline-block mt-4 text-xl font-in">
            {blog.description}
          </p>
        </div>
      </article>
    </div>
  );
};

export default HomeCoverSection;
