interface ItemProps {
  time: string;
  title: string;
  subtitle?: string;
  text: string;
}

function Item({ time, title, subtitle, text }: ItemProps) {
  return (
    <li className="ms-4 mb-10">
      <div className="border-buffer absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border bg-slate-300"></div>
      <time className="text-body text-sm leading-none font-normal">{time}</time>
      <h3 className="text-heading my-2 text-lg font-semibold">{title}</h3>
      {subtitle && (
        <h5 className="text-heading text-md my-1 font-medium">{subtitle}</h5>
      )}
      <p className="text-body mb-4 text-base font-normal">{text}</p>
    </li>
  );
}

export default function Timeline({ children }: { children?: React.ReactNode }) {
  return <ol className="border-default relative border-s">{children}</ol>;
}

Timeline.Item = Item;
