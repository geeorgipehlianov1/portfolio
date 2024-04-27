import Education from '@/components/sections/education/Education';
import Experience from '@/components/sections/experience/Experience';
import Skills from '@/components/sections/skills/Skills';
import Viewport from '@/components/sections/viewport/Viewport';

export default function Home() {
  return (
    <div className='flex flex-col gap-20'>
      <Viewport />
      <Skills />
      <Experience />
      <Education />
    </div>
  );
}
