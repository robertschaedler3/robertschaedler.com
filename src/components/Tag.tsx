// A component that displays its children "wrapped" in an html tag.

export default function Tag(props: {
  children: React.ReactNode;
  className?: string;
  type: string;
}) {
  return (
    <div className={props.className}>
      <p className="font-mono text-neutral-700 dark:text-neutral-300">
        {"<" + props.type + ">"}
      </p>
      {props.children}
      <p className="font-mono text-neutral-700 dark:text-neutral-300">
        {"</" + props.type + ">"}
      </p>
    </div>
  );
}
