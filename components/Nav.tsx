import ThemeToggle from './ThemeToggle';

const Nav = () => {
  return (
    <nav className='mb-5 flex flex-col items-center py-5'>
      <div className='flex w-full max-w-6xl justify-between'>
        <div className='flex items-center gap-5'>
          {/* <Link href='/'>Dashboard</Link>
          <Link href='/'>Users</Link>
          <Link href='/'>Tickets</Link> */}
        </div>
        <div className='flex items-center gap-5'>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
