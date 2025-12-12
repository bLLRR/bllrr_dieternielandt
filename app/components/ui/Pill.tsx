import clsx from 'clsx';

export default function Pill({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={clsx(
        `flex gap-3 rounded-3xl border border-gray-200 bg-gray-100 px-2 py-1 text-sm dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300`,
        className,
      )}
    >
      {children}
    </span>
  );
}
