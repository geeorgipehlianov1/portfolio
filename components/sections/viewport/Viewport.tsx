import Image from 'next/image';

export default function Viewport() {
  return (
    <div className='flex flex-col items-center justify-center gap-10'>
      <p className='text-center text-xl'>
        ['FE Developer', 'Tech Enthusiast', 'Communacation Enthusiast']
      </p>
      <Image
        className='rounded-full'
        src='/me.png'
        alt='viewport'
        width={200}
        height={200}
      />
      <p className='w-full max-w-4xl text-center text-base'>
        Front-End Developer with a passion for building intuitive user
        interfaces and a drive to lead end-to-end application development,
        encompassing both front-end and back-end technologies. Eager to leverage
        expertise in front-end development and leadership skills to excel in an
        engineering manager role.
      </p>
    </div>
  );
}
