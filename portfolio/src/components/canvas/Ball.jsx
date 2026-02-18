import React, { Suspense , useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal , Float , OrbitControls , Preload , useTexture , Html} from '@react-three/drei';

import CanvasLoader from '../Loader';

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.5]} />

      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [isMobile] = useState(window.innerWidth <= 500);

  return (
    <div className="w-full h-full">
      {isMobile ? (
        <div className="w-24 h-24 bg-gradient-to-br from-[#B2AFA7] to-[#484540] rounded-2xl flex items-center justify-center mx-auto">
          <img src={icon} alt="icon" className="w-12 h-12 object-contain" />
        </div>
      ) : (
    <Canvas 
      frameloop="always"                      
      gl={{ 
        preserveDrawingBuffer: true,
        powerPreference: "low-power"       
      }}
    >

      <Suspense fallback={<Html center><CanvasLoader /></Html>}>
        <OrbitControls enableZoom={false} enablePan={false} />
        <Ball imgUrl={icon} />
         <Preload all />
      </Suspense>
    </Canvas>
      )}
    </div>
  );
};

export default BallCanvas;
