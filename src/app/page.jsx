import { allBlogs } from 'contentlayer/generated';
import HomeCoverSection from '../components/Home/HomeCoverSection';

export default function Home() {
  console.log(allBlogs);
  return (
    <main className="flex flex-col items-center justify-between">
      <HomeCoverSection blogs={allBlogs} />
    </main>
  );
}
