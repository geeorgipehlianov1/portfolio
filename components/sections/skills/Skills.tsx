import { skillsCard } from '@/data';
import Image from 'next/image';

export default function Skills() {
  return (
    <div id='skills' className='flex flex-col items-center'>
      <h4 className='mb-5 text-lg'>Skills</h4>
      <div className='flex w-full  max-w-5xl flex-col items-center gap-4 lg:flex-row'>
        {skillsCard.map((item) => {
          return (
            <Card key={item.title} title={item.title} subData={item.subData} />
          );
        })}
      </div>
    </div>
  );
}

interface CardProps {
  title: string;
  subData: [
    {
      name: string;
      icon: string;
    },
  ];
}

function Card({ title, subData }: CardProps) {
  return (
    <div className='flex h-[350px] w-full flex-col items-center rounded-xl border border-[#D1D5DB] bg-background p-5'>
      <p className='mb-4 text-center text-lg'>{title}</p>
      <div className='flex flex-col items-center gap-3'>
        {subData.map((item) => {
          return (
            <div
              key={item.name}
              className='flex flex-row items-center gap-4 text-base'
            >
              <Image width={30} height={30} src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
