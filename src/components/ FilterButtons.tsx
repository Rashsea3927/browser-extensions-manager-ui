'use client';

import { useExtensionContext } from '@/context/ExtensionContext';

const FilterButtons = () => {
  const { dispatch } = useExtensionContext();
  return (
    <div className='flex gap-3 justify-center'>
      <button
        type='button'
        onClick={() => dispatch({ type: 'SET_FILTER', filter: 'All' })}
        className='text-md text-(--text-filter-button) bg-(--background-accent) rounded-full px-5 pt-2 pb-[10px] cursor-pointer'
      >
        All
      </button>
      <button
        type='button'
        onClick={() => dispatch({ type: 'SET_FILTER', filter: 'Active' })}
        className='text-md text-(--foreground-primary) bg-(--background-filter-button) border-[1px] border-solid border-(--border) rounded-full px-5 pt-2 pb-[10px] cursor-pointer'
      >
        Active
      </button>
      <button
        type='button'
        onClick={() => dispatch({ type: 'SET_FILTER', filter: 'Inactive' })}
        className='text-md text-(--foreground-primary) bg-(--background-filter-button) border-[1px] border-solid border-(--border) rounded-full px-5 pt-2 pb-[10px] cursor-pointer'
      >
        Inactive
      </button>
    </div>
  );
};

export default FilterButtons;
