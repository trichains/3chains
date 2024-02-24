import { allBlogs } from 'contentlayer/generated';
import HomeCoverSection from '../components/Home/HomeCoverSection';
import FeaturedPosts from '../components/Home/FeaturePosts';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
    </main>
  );
}
