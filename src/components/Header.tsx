import Logo from '@/components/icon/Logo';
import IconSun from './icon/IconSun';

const Header = () => {
  return (
    <header className='flex items-center justify-between py-2 px-3 md:p-4 mb-10 md:mb-16 rounded-(--radius-lg) bg-(--background)'>
      <h1>
        <Logo />
      </h1>
      {/* <button type='button'>
        <IconMoon />
      </button> */}
      <button type='button' className='grid place-items-center w-[50px] h-[50px] bg-(--background-button) rounded-(--radius-md) cursor-pointer'>
        <IconSun />
      </button>
    </header>
  );
};

export default Header;
