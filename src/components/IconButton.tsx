export default function IconButton(props: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}) {
  return (
    <button
      className={`group flex flex-row items-center px-3 py-2 drop-shadow-md ${props.className}`}
      onClick={
        props.onClick ? props.onClick : () => window.open(props.href, "_blank")
      }
    >
      {props.children}
    </button>
  );
}
