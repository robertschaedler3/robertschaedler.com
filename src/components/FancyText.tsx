import { useState } from "react";

export type Content = string | string[];

type Coordinate = [number, number] | undefined;

const EFFECTS = [
  "text-sky-600 font-medium",
  "text-sky-700 font-semibold",
  "text-sky-800 font-bold",
];

export default function FancyText(props: {
  content: Content;
  className?: string;
}) {
  const [hovered, setHovered] = useState<Coordinate>(undefined);

  const content = Array.isArray(props.content)
    ? props.content
    : [props.content];

  const letters = content.map((line, x) => {
    return line.split("").map((letter, y) => {
      let effect = "";

      if (hovered) {
        const delta = Math.abs(hovered[0] - x) + Math.abs(hovered[1] - y);

        if (delta < EFFECTS.length) {
          effect = EFFECTS[delta];
        }
      }

      return (
        <span
          key={`${x}-${y}`}
          className={`${effect} transition-all duration-300 ease-in-out cursor-default`}
          onMouseEnter={() => setHovered([x, y])}
          onMouseLeave={() => setHovered(undefined)}
        >
          {letter.replace(" ", "\u00A0")}
        </span>
      );
    });
  });

  return (
    <span className={props.className}>
      {letters.map((word, index) => {
        return (
          <span key={index} className="flex flex-row">
            {word}
          </span>
        );
      })}
    </span>
  );
}
