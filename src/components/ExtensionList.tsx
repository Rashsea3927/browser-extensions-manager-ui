'use client';
import { useExtensionContext } from '@/context/ExtensionContext';
import ExtensionItem from './ExtensionItem';

const ExtensionList = () => {
  const { state } = useExtensionContext();
  const { filteredExtensions } = state;

  return (
    <ul className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3'>
      {filteredExtensions.map((extension) => (
        <ExtensionItem key={extension.id} extension={extension} />
      ))}
    </ul>
  );
};

export default ExtensionList;
