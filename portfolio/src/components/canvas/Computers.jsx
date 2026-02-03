import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/theone.glb");

  return (
    <mesh>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <spotLight
        position={isMobile ? [-1.5, 2, 1] : [-3, 5, 1]}
        angle={0.9}
        penumbra={1}
        intensity={isMobile ? 2 : 6}
      />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.4 : 0.75}
        position={isMobile ? [0, -1.6, 0] : [0, -3, -1.5]}
      />
    </mesh>
  );
};

useGLTF.preload("/theone.glb");

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <div className="absolute inset-0 z-5 w-full h-full">
    <Canvas
      dpr={[1, 1.5]}
      camera={{
        position: isMobile ? [6, 2, 5] : [20, 3, 5],
        fov: isMobile ? 35 : 25,
      }}
      gl={{
        antialias: false,
        powerPreference: "low-power",
        preserveDrawingBuffer: true,
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