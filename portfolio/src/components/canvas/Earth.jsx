import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF , Html } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  earth.scene.traverse((child) => {
    if (child.isMesh && child.material) {
      child.material.color.set("#ffffff");
    }
  });

  return (
    <primitive
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
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
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-6, 3, 4],
      }}
    >
      <Suspense
      fallback={
      <Html center>
        <CanvasLoader />
        </Html>
      }>

      <OrbitControls
        autoRotate
        enableZoom={false}
        enablePan={false}
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
