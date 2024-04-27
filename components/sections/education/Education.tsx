export default function Education() {
  return (
    <section className='flex flex-col items-center' id='education'>
      <h4 className='mb-5 text-center text-lg'>Education</h4>
      <div className='flex flex-col items-center gap-4 lg:flex-row'>
        <SoftwareEducation />
        <OtherEducation />
      </div>
    </section>
  );
}

function SoftwareEducation() {
  return (
    <div className='flex flex-col items-center rounded-lg border border-[#D1D5DB] p-5'>
      <p>Software University (SoftUni) | 2021 - 2022</p>
    </div>
  );
}

function OtherEducation() {
  return (
    <div className='flex flex-col items-center rounded-lg border border-[#D1D5DB] p-5'>
      <p>Plovdiv University 'Paisii Hilendarski" | 2017 - 2021</p>
    </div>
  );
}
