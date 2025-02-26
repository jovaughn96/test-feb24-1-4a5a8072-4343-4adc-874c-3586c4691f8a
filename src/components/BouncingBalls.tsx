import React from 'react';
// Import matter.js and setup Matter.js world and runner here
import { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const BouncingBalls = () => {
  const CanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const Engine = Matter.Engine.create();
    const Render = Matter.Render.create({
      element: CanvasRef.current!,
      Engine: Engine,
    });

    const Ball = Matter.Bodies.circle(400, 200, 20);
    Matter.World.add(Engine.world, [Ball]);

    Matter.Engine.run(Engine);
    Matter.Render.run(Render);

    return () => {
      Matter.Render.stop(Render);
    };
  }, []);

  return <canvas ref={CanvasRef} width={800} height={600}></canvas>;
};

export default BouncingBalls;
