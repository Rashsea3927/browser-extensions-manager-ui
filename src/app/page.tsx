import IconTest from '@assets/logo-devlens.svg';
import Image from 'next/image';
export default function Home() {
  return (
    <main>
      <div className='flex flex-col gap-6 mb-8 sm:flex-row sm:justify-between sm:items-center'>
        <h1 className='text-lg text-center'>Extensions List</h1>
        <div className='flex gap-3 justify-center'>
          <button className='text-md text-(--text-filter-button) bg-(--background-accent) rounded-full px-5 pt-2 pb-[10px] cursor-pointer'>All</button>
          <button className='text-md bg-(--background-filter-button) border-[1px] border-solid border-(--border) rounded-full px-5 pt-2 pb-[10px] cursor-pointer'>Active</button>
          <button className='text-md bg-(--background-filter-button) border-[1px] border-solid border-(--border) rounded-full px-5 pt-2 pb-[10px] cursor-pointer'>Inactive</button>
        </div>
      </div>

      {/* List */}
      <section>
        <ul className='grid sm:grid-cols-2 gap-3'>
          <li className='p-5 grid grid-rows-subgrid row-span-2 border-[1px] border-solid border-(--border) rounded-(--radius-lg) bg-(--background)'>
            <div className='flex gap-4 items-start'>
              <Image src={IconTest} width={60} height={60} alt='' />
              <div>
                <h2>Devlens</h2>
                <p className='text-base'>Quickly inspect page layouts and visualize element boundaries.</p>
              </div>
            </div>
            <div className='flex justify-between items-center mt-4'>
              <button>Remove</button>
              <button>Toggle</button>
            </div>
          </li>
          {/* <li className='p-5 grid grid-rows-subgrid row-span-2'>
            <div className='flex gap-4 items-start'>
              <Image src={IconTest} width={60} height={60} alt='' />
              <div>
                <h2>Devlens</h2>
                <p className='text-base'>Instantly analyze and copy CSS from any webpage element.</p>
              </div>
            </div>
            <div className='flex justify-between items-center mt-4'>
              <button>Remove</button>
              <button>Toggle</button>
            </div>
          </li> */}
        </ul>
      </section>
    </main>
  );
}
