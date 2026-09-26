import { useLocale } from 'next-intl';
import Chapter3En from './content-en.mdx';
import Chapter3Vi from './content-vi.mdx';
import { Solution } from '@/components/solution';

export default function Chapter3Page() {
  const locale = useLocale();

  return (
    <div className="prose dark:prose-invert max-w-none pb-20">
      {locale === 'vi' ? (
        <Chapter3Vi components={{ Solution }} />
      ) : (
        <Chapter3En components={{ Solution }} />
      )}
    </div>
  );
}