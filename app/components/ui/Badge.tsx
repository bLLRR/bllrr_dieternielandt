import clsx from 'clsx';

interface BadgeProps {
  color: string;
  text: string;
  className?: string;
}

export default function Badge({ color, text, className = '' }: BadgeProps) {
  const colorClasses = clsx(
    color === 'lime' && [
      'border-lime-200 dark:border-lime-600 bg-lime-50 dark:bg-lime-700 text-lime-700 dark:text-lime-200 ring-lime-200 dark:ring-lime-800',
    ],
    color === 'orange' && [
      'border-orange-200 dark:border-orange-600 bg-orange-50 dark:bg-orange-800 text-orange-600 dark:text-orange-200 ring-orange-200 dark:ring-orange-800',
    ],
  );

  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-lg border px-1.5 py-0.5 text-xs font-medium ring-inset',
        colorClasses,
        className,
      )}
    >
      {text}
    </span>
  );
}
