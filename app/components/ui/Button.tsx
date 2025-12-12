import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <>
      <button type="button" className={clsx('border border-gray-300')}>
        {children}
      </button>
    </>
  );
}
