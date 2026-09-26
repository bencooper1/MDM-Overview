import { useLocale } from 'next-intl';
import Chapter4En from './content-en.mdx';
import Chapter4Vi from './content-vi.mdx';
import { Solution } from '@/components/solution';

export default function Chapter4Page() {
  const locale = useLocale();

  return (
    <div className="prose dark:prose-invert max-w-none pb-20">
      {locale === 'vi' ? (
        <Chapter4Vi components={{ Solution }} />
      ) : (
        <Chapter4En components={{ Solution }} />
      )}
    </div>
  );
}