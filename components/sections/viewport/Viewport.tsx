import Image from 'next/image';
import Knowledge from './Knowledge';
import Summary from './Summary';

export default function Viewport() {
  return (
    <div className='flex h-screen flex-col items-center gap-10 lg:mt-12'>
      <Knowledge />
      <Image
        className='rounded-full'
        src='/me.png'
        alt='viewport'
        width={200}
        height={200}
      />
      <Summary />
    </div>
  );
}
