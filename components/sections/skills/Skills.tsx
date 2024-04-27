export default function Skills() {
  return (
    <div id='skills' className='flex flex-col items-center'>
      <h4 className='mb-5 text-lg'>Skills</h4>
      <div className='flex w-full  max-w-4xl flex-col items-center gap-4 lg:flex-row'>
        <Languages />
        <FrontEnd />
        <BackEnd />
        <VersionControl />
      </div>
    </div>
  );
}

function Languages() {
  return (
    <div className='flex h-[250px] w-full flex-col items-center rounded-xl border border-[#D1D5DB] bg-background p-5'>
      <p>Languages</p>
      <div className='flex flex-col items-center gap-2'>
        <p>JavaScript</p>
        <p>TypeScript</p>
      </div>
    </div>
  );
}

function FrontEnd() {
  return (
    <div className='flex h-[250px] w-full flex-col items-center rounded-xl border border-[#D1D5DB] bg-background p-5'>
      <p>Front End Tech Stack</p>
      <div className='flex flex-col items-center gap-2'>
        <p>React</p>
        <p>NextJs</p>
        <p>Tailwind CSS</p>
        <p>MaterialUI</p>
        <p>ShacdCn</p>
      </div>
    </div>
  );
}

function BackEnd() {
  return (
    <div className='flex h-[250px] w-full flex-col items-center rounded-xl border border-[#D1D5DB] bg-background p-5'>
      <p>Back End Tech Stack</p>
      <div className='flex flex-col items-center gap-2'>
        <p>NodeJS</p>
        <p>Express</p>
        <p>NestJS</p>
        <p>MongoDB</p>
        <p>Mongoose</p>
        <p>Prisma</p>
      </div>
    </div>
  );
}

function VersionControl() {
  return (
    <div className='flex h-[250px] w-full flex-col items-center rounded-xl border border-[#D1D5DB] bg-background p-5'>
      <p>Versions Control</p>
      <div className='flex flex-col items-center gap-2'>
        <p>Git</p>
      </div>
    </div>
  );
}
