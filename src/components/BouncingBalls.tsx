import React, { useEffect, useRef, useState } from 'react';

const BouncingBalls = () => {
  const CanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [color, setColor] = useState<string>('blue');

  useEffect(() => {
    const Canvas = CanvasRef.current;
    const Context = Canvas?.getContext('2d');
    const BallRadius = 10;
    let x = Canvas.width / 2;
    let y = Canvas.height - 30;
    let dx = 2;
    let dy = -2;

    const DrawBall = () => {
      Context?.clearRect(0, 0, Canvas.width, Canvas.height);
      Context?.beginPath();
      Context?.arc(x, y, BallRadius, 0, Math.PI * 2);
      Context!.fillStyle = color;
      Context?.fill();
      Context?.closePath();
    };

    const UpdateBallPosition = () => {
      DrawBall();
      if (x + dx > Canvas.width - BallRadius || x + dx < BallRadius) {
        dx = -dx;
        setColor(`hsl(${Math.random() * 360}, 100%, 50%)`); // Change color on wall hit
      }
      if (y + dy > Canvas.height - BallRadius || y + dy < BallRadius) {
        dy = -dy;
        setColor(`hsl(${Math.random() * 360}, 100%, 50%)`); // Change color on wall hit
      }
      x += dx;
      y += dy;
      requestAnimationFrame(UpdateBallPosition);
    };

    UpdateBallPosition();
  }, [color]);

  return <Canvas ref={CanvasRef} width={800} height={600} ></Canvas>;
};

export default BouncingBalls;
