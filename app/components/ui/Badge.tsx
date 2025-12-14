import clsx from 'clsx';

interface BadgeProps {
  color: string;
  text: string;
  className?: string;
}

export default function Badge({ color, text, className = '' }: BadgeProps) {
  const colorClasses = clsx(
    color === 'lime' && [
      'border-lime-200 bg-lime-50 text-lime-700 ring-lime-200',
    ],
    color === 'orange' && [
      'border-orange-200 bg-orange-50 text-orange-700 ring-orange-200',
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
