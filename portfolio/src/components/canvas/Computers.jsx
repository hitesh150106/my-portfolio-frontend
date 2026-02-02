 import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/computer.glb");

  return (
    <mesh>
      <hemisphereLight intensity={0.6} groundColor="#000000" />
      <directionalLight 
      position={[5, 5, 5]}
      intensity={isMobile ? 0.8 : 2}
      />


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

        <primitive
          object={computer.scene}
          scale={isMobile ? 0.35 : 0.75}
          position={isMobile ? [0, -1.8, 0] : [0, -3, -1.5]}
        />

    </mesh>
  );
};

useGLTF.preload("/desktop_pc/computer.glb");


const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
  const isTouch = 
    'ontouchstart' in window || navigator.maxTouchPoints > 0;
  setIsMobile(isTouch);
}, []);


  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("(max-width: 500px)");
  //   setIsMobile(mediaQuery.matches);

  //   const handleChange = (e) => setIsMobile(e.matches);
  //   mediaQuery.addEventListener("change", handleChange);

  //   return () => mediaQuery.removeEventListener("change", handleChange);
  // }, []);

    return (
      <div className="absolute inset-0 z-0 w-full h-full">
      <Canvas
        frameloop="always"  // ← CHANGE: demand on mobile
        shadows={!isMobile}                        // ← CHANGE: disable shadows mobile
        dpr={isMobile ? 1 : [1, 2]}        // ← CHANGE: lower DPR mobile
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
};

export default ComputersCanvas;

// import React, { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";

// const Computers = ({ isMobile }) => {
//   const computer = useGLTF("/desktop_pc/computer.glb");

//   return (
//     <group>
//       <ambientLight intensity={isMobile ? 1 : 0.4} />
//       {!isMobile && (
//         <>
//           <hemisphereLight intensity={0.15} groundColor="#000" />
//           <directionalLight position={[5, 5, 5]} intensity={0.8} />
//         </>
//       )}

//       <primitive
//         object={computer.scene}
//         scale={isMobile ? 0.4 : 0.75}        // ✅ Perfect mobile size
//         position={isMobile ? [0, -1, -1] : [0, -3, -1.5]}  // Closer
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </group>
//   );
// };

// useGLTF.preload("/desktop_pc/computer.glb");

// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 768px)");
//     setIsMobile(mediaQuery.matches);
//     const handleChange = (e) => setIsMobile(e.matches);
//     mediaQuery.addEventListener("change", handleChange);
//     return () => mediaQuery.removeEventListener("change", handleChange);
//   }, []);

//   return (
//     <div className="absolute inset-0 z-0">
// <Canvas
//   frameloop="demand"
//   shadows={false}
//   dpr={1}
//   camera={{ position: [15, 2, 8], fov: isMobile ? 45 : 25 }}
//   gl={{ 
//     preserveDrawingBuffer: false,
//     alpha: true,                    // ✅ Transparent
//     powerPreference: "low-power",
//     antialias: false
//   }}
// >
//   {/* 🔥 FIX WHITE BACKGROUND */}
// <color attach="background" args={[
//   isMobile ? '#0a0a0a' : 'transparent'  // Dark mobile, transparent desktop
// ]} />
  
//   <Suspense fallback={null}>
//     {/* ... rest */}
//   </Suspense>
// </Canvas>

//     </div>
//   );
// };

// export default ComputersCanvas;
