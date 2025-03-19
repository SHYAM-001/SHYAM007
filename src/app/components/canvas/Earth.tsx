"use client";

import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Earth = () => {
  const earthModel = useGLTF("./planet/scene.gltf");

  // Memoize the model to prevent unnecessary re-renders
  const memoizedEarth = useMemo(() => earthModel.scene, [earthModel]);

  return (
    <primitive
      object={memoizedEarth}
      scale={3}
      position-y={0}
      rotation={[0, 0, 0]}
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 50, near: 0.1, far: 200, position: [-5, 3, 7] }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
