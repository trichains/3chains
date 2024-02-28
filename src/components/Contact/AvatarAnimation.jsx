import Image from 'next/image';
import Animate from '@/public/meditate.svg';
import Shadow from '@/public/shadow.svg';

const AvatarAnimation = () => {
  return (
    <div className="pb-6 relative flex items-center flex-col">
      <Image
        src={Animate}
        alt="trichains"
        className="animate-levitate w-[350px] h-[350px] object-contain"
      />
      <div className="absolute bottom-0 right-10">
        <Image src={Shadow} alt="shadow" className="animate-shadowWidth" />
      </div>
    </div>
  );
};

export default AvatarAnimation;
