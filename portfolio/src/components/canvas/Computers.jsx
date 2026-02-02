import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./compp.glb");

  return (
    <mesh>
      <hemisphereLight intensity={isMobile ? 0.35 : 0.6} groundColor="#000000" />
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={isMobile ? 0.8 : 2} 
      />
      <spotLight
        position={isMobile ? [-1.5, 2, 1] : [-3, 5, 1]}
        angle={0.9}
        penumbra={1}
        intensity={isMobile ? 2 : 8}
        castShadow={!isMobile} 
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.4 : 0.75}
        position={isMobile ? [0, -1.8, 0] : [0, -3, -1.5]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Robust mobile detection using media query
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <div className="absolute inset-0 z-0 w-full h-full">
      <Canvas
        frameloop={isMobile ? "demand" : "always"}
        shadows={!isMobile}
        dpr={isMobile ? 1 : [1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ 
          preserveDrawingBuffer: true,
          powerPreference: "high-performance",
          antialias: !isMobile 
        }}
      >
        <Suspense fallback={<Html center><CanvasLoader /></Html>}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;