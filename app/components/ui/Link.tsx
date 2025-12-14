import Link from 'next/link';
import clsx from 'clsx';

interface LinkProps {
  href: string;
  icon?: string;
  children: React.ReactNode;
  className?: string;
}

export default function LinkButton({
  href,
  icon,
  children,
  className = '',
}: LinkProps) {
  return (
    <Link
      href={href}
      className={clsx(
        `items-center rounded-2xl border border-gray-300 px-2.5 py-2 dark:border-gray-700 dark:bg-gray-800`,
        className,
      )}
    >
      {icon && (
        <span
          className={clsx(
            `mr-1 items-center rounded-sm border border-gray-300 bg-gray-100 px-1 dark:border-none dark:bg-gray-800`,
          )}
        >
          <i className={`${icon} text-gray-400 dark:text-gray-500`} />
        </span>
      )}
      {children}
    </Link>
  );
}
