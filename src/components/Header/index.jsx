import Link from 'next/link';
import Logo from './Logo';

const Header = () => {
  return (
    <div className="w-full p-4 px-10 flex items-center justify-between">
      <Logo />
      <nav>
        <Link href="/posts">Posts</Link>
      </nav>
    </div>
  );
};

export default Header;
