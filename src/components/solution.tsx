'use client';

import * as React from 'react';
import { useTranslations } from 'next-intl';

interface SolutionProps {
  children: React.ReactNode;
}

export function Solution({ children }: SolutionProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const t = useTranslations('Components');

  return (
    <div className="mt-4 border border-gray-200 dark:border-gray-800 rounded-md overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 text-left font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex justify-between items-center"
      >
        <span>{t('solution')}</span>
        <span className="text-xl leading-none">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 prose dark:prose-invert max-w-none">
          {children}
        </div>
      )}
    </div>
  );
}