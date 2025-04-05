import FilterButtons from '@/components/ FilterButtons';
import ExtensionList from '@/components/ExtensionList';
export default function Home() {
  return (
    <main>
      <div className='flex flex-col gap-6 mb-8 sm:flex-row sm:justify-between sm:items-center'>
        <h1 className='text-lg text-center text-(--foreground-primary)'>Extensions List</h1>
        <FilterButtons />
      </div>

      {/* List */}
      <section>
        <ExtensionList />
      </section>
    </main>
  );
}
