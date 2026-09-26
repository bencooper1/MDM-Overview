import { useLocale } from 'next-intl';
import Chapter2En from './content-en.mdx';
import Chapter2Vi from './content-vi.mdx';
import { Solution } from '@/components/solution';

export default function Chapter2Page() {
  const locale = useLocale();

  return (
    <div className="prose dark:prose-invert max-w-none pb-20">
      {locale === 'vi' ? (
        <Chapter2Vi components={{ Solution }} />
      ) : (
        <Chapter2En components={{ Solution }} />
      )}
    </div>
  );
}