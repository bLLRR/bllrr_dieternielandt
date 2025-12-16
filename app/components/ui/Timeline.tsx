interface ItemProps {
  time: string;
  title: string | React.ReactNode;
  subtitle?: string;
  text: string | React.ReactNode;
}

function Item({ time, title, subtitle, text }: ItemProps) {
  return (
    <li className="ms-4 mb-10">
      <div className="border-buffer absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border bg-slate-300 dark:border-slate-700 dark:bg-slate-800"></div>
      <time className="text-body text-sm leading-none font-normal">{time}</time>
      <h2 className="text-heading my-2 text-xl font-semibold">{title}</h2>
      {subtitle && (
        <h5 className="text-heading text-md my-1 font-medium">{subtitle}</h5>
      )}
      <div className="text-body mb-4 text-base font-normal">{text}</div>
    </li>
  );
}

export default function Timeline({ children }: { children?: React.ReactNode }) {
  return (
    <ol className="border-default relative border-s border-slate-300 dark:border-slate-700">
      {children}
    </ol>
  );
}

Timeline.Item = Item;
