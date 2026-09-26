'use client';

import { Link, usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

const CHAPTERS = [
  { id: '1', href: '/chapters/1' },
  { id: '2', href: '/chapters/2' },
  { id: '3', href: '/chapters/3' },
  { id: '4', href: '/chapters/4' },
];

export function Sidebar() {
  const t = useTranslations('Sidebar');
  const pathname = usePathname();

  return (
    <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block md:w-64 border-r border-gray-200 dark:border-gray-800">
      <div className="h-full overflow-auto py-6 pr-6 pl-4">
        <div className="flex flex-col gap-4">
          <div className="px-2 font-semibold">{t('chapters')}</div>
          <nav className="flex flex-col gap-1">
            {CHAPTERS.map((chapter) => (
              <Link
                key={chapter.id}
                href={chapter.href}
                className={`px-2 py-1.5 text-sm rounded-md transition-colors ${
                  pathname.startsWith(chapter.href)
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
              >
                {t(`chapter_${chapter.id}`)}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}