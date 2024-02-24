import Image from 'next/image';
import Link from 'next/link';
import Avatar from '@/public/avatar.png';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
      <div className="flex items-center text-3xl font-light">
        <span className="text-accent font-bold">3</span>
        chains
      </div>
    </Link>
  );
};

export default Logo;
