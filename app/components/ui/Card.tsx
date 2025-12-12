export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-gray-300 p-4 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
      {children}
    </div>
  );
}
