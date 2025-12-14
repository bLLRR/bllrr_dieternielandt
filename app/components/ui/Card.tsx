import clsx from 'clsx';

export default function Card({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        'rounded-lg border border-gray-300 p-5 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300',
        className,
      )}
    >
      {children}
    </div>
  );
}
