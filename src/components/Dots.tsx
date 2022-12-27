import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

export default function Dots() {
  const step = 0.01;
  const speed = 0.001;
  const intensity = 10;
  const scale = 30;
  const unit = 4;

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
    p5.noStroke();
    p5.frameRate(30);

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

        const angle = r * Math.PI * 2;
        const radius = p5.map(r, 0, intensity, 0, unit);
        const rgb = p5.map(r, 0, intensity, 0, 255);

        const xpos = scale * Math.cos(angle);
        const ypos = scale * Math.sin(angle);

        p5.push();
        p5.fill(rgb, 100);
        p5.translate((x - 1) * scale, (y - 1) * scale);
        p5.circle(xpos, ypos, radius * 2);
        p5.pop();
      }
    }

    toff += speed;

    // TODO: if the frame rate is too low, stop the animation
  };

  return <Sketch setup={setup} draw={draw} />;
}
