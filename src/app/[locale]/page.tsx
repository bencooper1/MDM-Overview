import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <main className="flex flex-col items-center justify-center w-full max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          {t('title')}
        </h1>
        <p className="mt-6 text-xl text-gray-600 dark:text-gray-400">
          {t('description')}
        </p>
        <div className="mt-10">
          <Link
            href="/chapters/1"
            className="px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
          >
            {t('start_learning')}
          </Link>
        </div>
      </main>
    </div>
  );
}