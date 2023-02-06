export default function Footer(props: { className: string }) {
  const year = new Date().getFullYear();

  return (
    <footer className={`flex flex-col font-mono ${props.className}`}>
      <p className="text-sm">
        © {year}
        {" | "}
        <a
          className="text-sky-500 hover:text-sky-400 transition-all duration-300"
          href="https://github.com/robertschaedler3/robertschaedler.com"
          target="_blank"
          rel="noreferrer"
        >
          robertschaedler.com
        </a>
      </p>
    </footer>
  );
}
