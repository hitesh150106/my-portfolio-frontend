import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { mobile_pc } from "../../assets/index"

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <spotLight
        position={isMobile ? [-1.5, 2, 1] : [-3, 5, 1]}
        angle={0.9}
        penumbra={1}
        intensity={isMobile ? 2 : 10}/>

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.4 : 0.75}
        position={isMobile ? [0, -1.6, 0] : [0, -3, -1.5]}/>
    </mesh>
  );
};

useGLTF.preload("/compp.glb");

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 750px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <div className="absolute inset-0 z-5 w-full h-full">
      {isMobile ? (
        // <div className="w-full h-full flex items-center justify-center">
        //   <img 
        //     src={mobile_pc}
        //     alt="d" 
        //     className="max-w-[80%] max-h-[80%] object-contain"
        //   />
        // </div>

        <div className="w-full h-full flex items-center justify-center">
          <img 
            src={mobile_pc}
            alt="developer-setup" 
            className="w-[80%] h-[80%] mt-40 object-contain scale-195 md:scale-170" // Increases size by 25-50%
          />
        </div>
      ) : (

        <Canvas
          dpr={[1, 1.5]}
          camera={{
            position: isMobile ? [6, 2, 5] : [20, 3, 5],
            fov: isMobile ? 35 : 25,
          }}
          gl={{
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
      )}
    </div>
  );
};

export default ComputersCanvas;
