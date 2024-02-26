import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: '**/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      require: true
    },
    publishedAt: {
      type: 'date',
      required: true
    },
    updatedAt: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
      required: true
    },
    image: {
      type: 'image'
    },
    isPublished: {
      type: 'boolean',
      default: true
    },
    author: {
      type: 'string',
      required: true
    },
    tags: {
      type: 'list',
      of: { type: 'string' }
    }
  },

  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`
    },
    readingTime: {
      type: 'json',
      resolve: (doc) => {
        const time = readingTime(doc.body.raw);
        return {
          text: `${Math.round(time.minutes)} min de leitura`,
          minutes: time.minutes,
          time: time.time,
          words: time.words
        };
      }
    }
  }
}));

const themeFilePath = './themes/bearded-theme-void.json';
console.log(`Reading theme file from: ${themeFilePath}`);

const codeOptions = {
  theme: 'rose-pine'
};

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'append' }],
      [rehypePrettyCode, codeOptions]
    ]
  }
});
