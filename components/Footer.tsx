export default function Footer() {
  return (
    <footer className='mt-20 flex h-60 flex-col items-center justify-center gap-5 border-t bg-[#00bcd4]'>
      <p className='w-[600px] text-center'>
        If you wait for motivation, you’re doing it wrong. The formula to induce
        motivation starts with action, which sparks inspiration, which sparks
        motivation, which leads to action, and the loop continues.
      </p>
      <p>All rights reserved © {new Date().getFullYear()}</p>
    </footer>
  );
}
