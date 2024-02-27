import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <div className="flex items-center text-3xl font-light">
        <span className="text-accent font-bold">3</span>
        chains
      </div>
    </Link>
  );
};

export default Logo;
