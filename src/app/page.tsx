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
    </main>
  );
}
