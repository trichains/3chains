'use client';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';

const mdxComponents = {
  Image
};

const RenderMdx = ({ blog }) => {
  const MDXContent = useMDXComponent(blog.body.code);

  return (
    <div className="col-span-8 font-in prose prose-lg prose-headings:scroll-mt-20 max-w-max prose-blockquote:bg-accent/20 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-accentBg prose-blockquote:not-italic prose-blockquote:rounded-r-lg prose-li:marker:text-accent">
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default RenderMdx;
