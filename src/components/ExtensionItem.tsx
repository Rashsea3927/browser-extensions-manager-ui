'use client';

import { useExtensionContext } from '@/context/ExtensionContext';
import { ExtensionItemType } from '@/types/extensionItem';
import { Switch } from '@components/ui/switch';
import Image from 'next/image';

type Props = {
  extension: ExtensionItemType;
};
const ExtensionItem = ({ extension }: Props) => {
  const { dispatch } = useExtensionContext();

  const handleCheckedChange = () => {
    dispatch({ type: 'TOGGLE_ACTIVE', id: extension.id });
  };

  return (
    <li className='p-5 grid grid-rows-subgrid row-span-2 border-[1px] border-solid border-(--border) rounded-(--radius-lg) bg-(--background)'>
      <div className='flex gap-4 items-start'>
        <Image src={extension.logo} width={60} height={60} alt='' />
        <div className='flex flex-col gap-2'>
          <h2 className='text-(--foreground-primary) text-md--bold'>Devlens</h2>
          <p className='text-base text-(--foreground-secondary)'>Quickly inspect page layouts and visualize element boundaries.</p>
        </div>
      </div>
      <div className='flex justify-between items-center mt-4'>
        <button type='button' className='text-(--foreground-primary) px-4 py-2 rounded-full border-[1px] border-solid border-(--border)'>
          Remove
        </button>
        <Switch checked={extension.isActive} onCheckedChange={handleCheckedChange} />
      </div>
    </li>
  );
};

export default ExtensionItem;
