import { useLocale } from 'next-intl';
import Chapter1En from './content-en.mdx';
import Chapter1Vi from './content-vi.mdx';
import { Solution } from '@/components/solution';

export default function Chapter1Page() {
  const locale = useLocale();

  return (
    <div className="prose dark:prose-invert max-w-none pb-20">
      {locale === 'vi' ? (
        <Chapter1Vi components={{ Solution }} />
      ) : (
        <Chapter1En components={{ Solution }} />
      )}
    </div>
  );
}