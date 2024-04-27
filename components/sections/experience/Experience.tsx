export default function Experience() {
  return (
    <section className='flex w-full flex-col  items-center justify-center'>
      <h4 className='mb-5 text-center text-lg'>Work Experience</h4>
      <div
        id='experience'
        className='flex flex-col items-start justify-center rounded-lg border border-[#D1D5DB] p-10'
      >
        <div className='mb-4 flex flex-row items-start justify-between gap-2'>
          <h4>Front-end developer | WeiChain</h4>
          <p>| May 2022 - Present</p>
        </div>
        <div className='flex flex-col items-start'>
          <h1>Responsibilities</h1>
          <u>
            <li>Estimation and implementation of tasks</li>
            <li>Breaking requirements into codable tasks</li>
            <li>
              Participation in daily meetings, as well as review meetings with
              clients
            </li>
            <li>
              Communication with other developers, designers, project managers
              and clients
            </li>
            <li>Ownership of code, bug fixing</li>
          </u>
        </div>
      </div>
    </section>
  );
}
