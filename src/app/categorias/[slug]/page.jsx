import { allBlogs } from '@/.contentlayer/generated';
import BlogLayoutThree from '@/src/components/Blog/BlogLayoutThree';
import Categories from '@/src/components/Blog/Categories';
import GithubSlugger, { slug } from 'github-slugger';

const slugger = new GithubSlugger();

export async function generateStaticParams() {
  const categories = [];
  const paths = [{ slug: 'tudo' }];

  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags.map((tag) => {
        let slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });

  return paths;
}

export async function generateMetadata({ params }) {
  return {
    title:
      params.slug === 'tudo'
        ? 'Todos os Artigos'
        : `Artigos sobre ${params.slug.replaceAll('-', ' ')}`,
    description: `Saiba mais sobre ${
      params.slug === 'tudo' ? 'programação' : params.slug
    } através de nossa coleção de artigos e tutoriais`
  };
}

const CategoryPage = ({ params }) => {
  const allCategories = ['tudo'];

  const blogs = allBlogs.filter((blog) => {
    return blog.tags.some((tag) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
      if (params.slug === 'tudo') {
        return true;
      }
      return slugified === params.slug;
    });
  });

  return (
    <article
      className="flex flex-col pt-20 mt-4 sm:mt-12
      text-dark dark:text-lightText">
      <div className="px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">
          #{params.slug}
        </h1>
        <span className="mt-2 inline-block">
          Descubra mais artigos e expanda seu conhecimento!
        </span>
      </div>
      <Categories categories={allCategories} currentSlug={params.slug} />

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2
        gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32
        px-5 sm:px-10 md:px-24 sxl:px-32">
        {blogs.map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </article>
  );
};

export default CategoryPage;
