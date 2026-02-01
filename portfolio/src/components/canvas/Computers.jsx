import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={isMobile ? 0 : 2} />

      <spotLight
        position={isMobile ? [-1.5, 2, 1] : [-3, 5, 1]}
        angle={0.9}
        penumbra={1}
        intensity={isMobile ? 2 : 8}              // ← CHANGE: lower intensity mobile
        castShadow={!isMobile}                    // ← CHANGE: disable shadows mobile
        shadow-mapSize={isMobile ? [512, 512] : [1024, 1024]}  // ← CHANGE: smaller shadows
        shadow-bias={-0.0001}
        shadow-normalBias={0.01}
        decay={false}
      />


      {/* <spotLight
        position={isMobile ? [-1.5, 2, 1] : [-3, 5, 1]}
        angle={0.9}
        penumbra={1}
        intensity={8}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0001}
        shadow-normalBias={0.01}
        decay={false}
      /> */}

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.45 : 0.75}
        position={isMobile ? [0, -2.2, -0.6] : [0, -3, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

    return (
    <div className="absolute inset-0 z-0">
      <Canvas
        frameloop={isMobile ? "demand" : "always"}  // ← CHANGE: demand on mobile
        shadows={!isMobile}                        // ← CHANGE: disable shadows mobile
        dpr={isMobile ? [1, 1.5] : [1, 2]}        // ← CHANGE: lower DPR mobile
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ 
          preserveDrawingBuffer: true,
          powerPreference: "low-power"             // ← ADD: mobile GPU optimization
        }}
        eventPrefix="client"
      >
        <Suspense fallback={<Html center><CanvasLoader /></Html>}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
          {/* Remove <Preload all /> - already fixed */}
        </Suspense>
      </Canvas>
    </div>
  );


  // return (
  //   <div className="absolute inset-0 z-0">
  //     <Canvas
  //       frameloop="always"
  //       shadows
  //       dpr={[1, 2]}
  //       camera={{ position: [20, 3, 5], fov: 25 }}
  //       gl={{ preserveDrawingBuffer: true }}
  //       eventPrefix="client"
  //     >
  //       <Suspense
  //         fallback={
  //           <Html center>
  //             <CanvasLoader />
  //           </Html>
  //         }
  //       >
  //         <OrbitControls
  //           enableZoom={false}
  //           enablePan={false}
  //           maxPolarAngle={Math.PI / 2}
  //           minPolarAngle={Math.PI / 2}
  //         />
  //         <Computers isMobile={isMobile} />
  //         <Preload all />
  //       </Suspense>
  //     </Canvas>
  //   </div>
  // );
};

export default ComputersCanvas;
