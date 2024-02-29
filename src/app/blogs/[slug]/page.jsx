import { allBlogs } from '@/.contentlayer/generated';
import { slug } from 'github-slugger';
import BlogDetails from '@/src/components/Blog/BlogDetails';
import RenderMdx from '@/src/components/Blog/RenderMdx';
import Tag from '@/src/components/Elements/Tag';
import Image from 'next/image';
import siteMetadata from '@/src/utils/siteMetaData';

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({
    slug: blog._raw.flattenedPath
  }));
}

export async function generateMetadata({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) {
    return;
  }

  const publishedAt = new Date(blog.publishedAt).toISOString();
  const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();

  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === 'string'
        ? [siteMetadata.siteUrl + blog.image.filePath.replace('../public', '')]
        : blog.image;
  }

  const ogImages = imageList.map((img) => {
    return {
      url: img.includes('http') ? img : siteMetadata.siteUrl + img
    };
  });

  const authors = blog?.author ? [blog.author] : siteMetadata.author;

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: siteMetadata.siteUrl + blog.url,
      siteName: siteMetadata.title,
      locale: 'pt-BR',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author]
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.description,
      images: ogImages
    }
  };
}

export default function BlogPage({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === 'string'
        ? [siteMetadata.siteUrl + blog.image.filePath.replace('../public', '')]
        : blog.image;
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: blog.title,
    description: blog.description,
    image: imageList,
    datePublished: new Date(blog.publishedAt).toISOString(),
    dateModified: new Date(blog.updatedAt || blog.publishedAt).toISOString(),
    author: [
      {
        '@type': 'Person',
        name: blog?.author ? [blog.author] : siteMetadata.author,
        url: siteMetadata.portfolio
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <div className="mb-8 text-center relative w-full h-[85vh] bg-dark">
          <div
            className="w-full z-10 flex flex-col items-center justify-center
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Tag
              name={blog.tags[0]}
              link={`/categorias/${slug(blog.tags[0])}`}
              className="px-6 text-sm py-2"
            />
            <h1
              className="inline-block mt-6 font-semibold capitalize text-lightText
              text-2xl md:text-3xl lg:text-5xl leading-normal relative w-5/6">
              {blog.title}
            </h1>
          </div>
          <div
            className="absolute top-0 left-0 bottom-0 right-0 h-full
            bg-dark/60 dark:bg-dark/40"
          />
          <Image
            src={blog.image.filePath.replace('../public', '')}
            placeholder="blur"
            blurDataURL={blog.image.blurhashDataUrl}
            alt={blog.title}
            width={blog.image.width}
            height={blog.image.height}
            className="aspect-square w-full h-full object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>
        <BlogDetails blog={blog} slug={params.slug} />

        {/* Mobile */}
        <div
          className="grid grid-cols-12 gap-y-8 sm:hidden lg:gap-8 sxl:gap-16
          mt-8 px-5 md:px-10">
          <div className="col-span-12 lg:col-span-4">
            <details
              className="rounded-lg p-4 sticky top-20 max-h-[80vh]
              overflow-hidden overflow-y-auto
              text-dark dark:text-lightText
              bg-light dark:bg-darkSurface
              shadow shadow-dark/40
              transition-all ease duration-300
              hover:shadow-lg hover:shadow-dark/40
              dark:shadow-black/15
              dark:hover:shadow-black/20
              "
              close>
              <summary className="relative cursor-pointer text-center">
                {' '}
                <span
                  className="text-lg font-semibold capitalize
                  bg-gradient-to-r from-dark/90 via-accent to-80% to-darkSurface/90
                  bg-clip-text text-transparent dark:from-accentText dark:via-accent
                dark:to-light">
                  Sumário do Artigo
                </span>{' '}
                <span
                  className="block ml-2 text-sm font-normal text-center
                  text-dark dark:text-light hover:underline hover:underline-offset-2 hover:decoration-accent hover:text-black dark:hover:text-white transition-all ease duration-300 hover:font-semibold ">
                  [clique para expandir]
                </span>
              </summary>
              <ul className="mt-4 font-in text-base">
                {blog.toc.map((heading) => {
                  return (
                    <li key={`#${heading.slug}`} className="py-1">
                      <a
                        href={`#${heading.slug}`}
                        data-level={heading.level}
                        className="data-[level=two]:pl-0
                        data-[level=two]:pt-2
                        data-[level=two]:border-t
                        border-solid border-dark/40
                        data-[level=three]:pl-4
                        sm:data-[level=three]:pl-6
                        flex items-center justify-start">
                        {heading.level === 'three' ? (
                          <span
                            className="flex w-1 h-1 rounded-full
                        bg-dark dark:bg-accentDark mr-2">
                            &nbsp;
                          </span>
                        ) : null}

                        <span
                          className="hover:underline hover:underline-offset-2
                          hover:decoration-accent
                          hover:text-black dark:hover:text-white
                          hover:font-semibold
                          transition-all ease duration-300">
                          {heading.text}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </details>
          </div>
          <RenderMdx blog={blog} />
        </div>

        {/* Desktop */}
        <div
          className="hidden sm:grid grid-cols-12 gap-y-8 lg:gap-8 sxl:gap-16
          mt-8 px-5 md:px-10">
          <div className="col-span-12 lg:col-span-4">
            <details
              className="rounded-lg p-4 sticky top-20 max-h-[80vh]
              overflow-hidden overflow-y-auto
              text-dark dark:text-lightText
              bg-light dark:bg-darkSurface
              shadow shadow-dark/40
              transition-all ease duration-300
              hover:shadow-lg hover:shadow-dark/40
              dark:shadow-black/15
              dark:hover:shadow-black/20
            "
              open>
              <summary className="relative cursor-pointer text-center">
                {' '}
                <span
                  className="text-lg font-semibold capitalize
                  bg-gradient-to-r from-dark/90 via-accent to-80% to-darkSurface/90
                  bg-clip-text text-transparent dark:from-accentText dark:via-accent
                dark:to-light">
                  Sumário do Artigo
                </span>{' '}
              </summary>
              <ul className="mt-4 font-in text-base">
                {blog.toc.map((heading) => {
                  return (
                    <li key={`#${heading.slug}`} className="py-1">
                      <a
                        href={`#${heading.slug}`}
                        data-level={heading.level}
                        className="data-[level=two]:pl-0
                        data-[level=two]:pt-2
                        data-[level=two]:border-t
                        border-solid border-dark/40
                        data-[level=three]:pl-4
                        sm:data-[level=three]:pl-6
                        flex items-center justify-start">
                        {heading.level === 'three' ? (
                          <span
                            className="flex w-1 h-1 rounded-full
                        bg-dark dark:bg-accentDark mr-2">
                            &nbsp;
                          </span>
                        ) : null}

                        <span
                          className="hover:underline hover:underline-offset-2
                          hover:decoration-accent
                          hover:text-black dark:hover:text-white
                          hover:font-semibold
                          transition-all ease duration-300">
                          {heading.text}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </details>
          </div>
          <RenderMdx blog={blog} />
        </div>
      </article>
    </>
  );
}
