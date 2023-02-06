import Sketch from "react-p5";
import p5Types from "p5";

const colors = [
  [240, 249, 255],
  [224, 242, 254],
  [186, 230, 253],
  [125, 211, 252],
  [56, 189, 248],
  [14, 165, 233],
  [167, 139, 250],
  [139, 92, 246],
  [124, 58, 237],
  [2, 132, 199],
  [3, 105, 161],
  [7, 89, 133],
  [12, 74, 110],
];

export default function Dots(props: { className?: string }) {
  const step = 0.02;
  const speed = 0.01;
  const intensity = 10;
  const scale = 50;

  let width = 0;
  let height = 0;
  let rows = 0;
  let cols = 0;
  let toff = 0;

  const setScale = () => {
    // TODO: set a max number of rows and cols
    width = window.innerWidth;
    height = window.innerHeight;
    rows = Math.floor(height / scale) + 2;
    cols = Math.floor(width / scale) + 2;
  };

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    setScale();
    p5.createCanvas(width, height).parent(canvasParentRef);
    p5.frameRate(18);

    window.addEventListener("resize", () => {
      setScale();
      p5.resizeCanvas(width, height);
    });
  };

  const draw = (p5: p5Types) => {
    p5.clear();

    for (let y = 0; y <= rows; y++) {
      for (let x = 0; x <= cols; x++) {
        const xoff = x * step;
        const yoff = y * step;
        const r = p5.noise(xoff, yoff, toff) * intensity;
        const color = colors[Math.floor(p5.map(r, 0, intensity, 0, colors.length))];

        // const angle = r * Math.PI * 2;
        // const radius = p5.map(r, 0, intensity, 0, 5);
        // const weight = p5.map(r, 0, intensity, 0, 3);

        // const xpos = (scale / 2) * Math.cos(angle);
        // const ypos = (scale / 2) * Math.sin(angle);

        p5.push();
        p5.noStroke();
        p5.translate((x - 1) * scale, (y - 1) * scale);
        p5.fill(color[0], color[1], color[2], 100);
        p5.stroke(color[0], color[1], color[2], 50);
        p5.strokeWeight(2);

        // p5.circle(xpos, ypos, radius * 2);
        // p5.line(-xpos, -ypos, xpos, ypos);

        p5.rect(0, 0, scale, scale);
        p5.pop();
      }
    }

    toff += speed;

    // TODO: if the frame rate is too low, stop the animation
  };

  return <Sketch className={props.className} setup={setup} draw={draw} />;
}
