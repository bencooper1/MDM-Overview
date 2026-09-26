import { ThemeToggle } from './theme-toggle';
import { LanguageSwitcher } from './language-switcher';
import { Link } from '@/i18n/routing';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link href="/" className="font-bold text-lg tracking-tight">
          MDM Plasmonics
        </Link>

        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}