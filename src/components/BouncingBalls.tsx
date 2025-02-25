import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const BouncingBalls = () => {
  const SceneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Mouse = Matter.Mouse;
    const MouseConstraint = Matter.MouseConstraint;

    // create an Engine
    const Engine = Engine.create();

    // create a Renderer
    const Render = Render.create({
      element: SceneRef.current!,
      Engine: Engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false // For solid shapes
      }
    });

    // Create Ground
    const Ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 20, { isStatic: true });

    // Add Balls
    const Balls = Array.from({ length: 10 }, (_, i) =>
      Bodies.circle(50 + i * 50, 50, 20, {
        restitution: 0.9, // Bounciness
      })
    );

    // add all bodies to the world
    World.add(Engine.world, [Ground, ...Balls]);

    // add Mouse control
    const Mouse = Mouse.create(Render.canvas);
    const MouseConstraint = MouseConstraint.create(Engine, {
      Mouse: Mouse,
      constraint: {
        stiffness: 0.2,
        Render: {
          visible: false
        }
      }
    });

    World.add(Engine.world, MouseConstraint);

    // keep the Mouse in sync with Rendering
    Render.Mouse = Mouse;

    // run the Engine
    Engine.run(Engine);

    // run the Renderer
    Render.run(Render);

    // Cleanup on component unmount
    return () => {
      Render.stop(Render);
      World.clear(Engine.world);
      Engine.clear(Engine);
      Render.canvas.remove();
      Render.textures = {};
    };
  }, []);

  return <div ref={SceneRef} style={{ position: 'absolute', top: 0, left: 0 }} ></div>;
};

export default BouncingBalls;
