// import { useProgress , Html } from '@react-three/drei';

// const Loader = () => {
//   const { progress } = useProgress
//   return (
//     <Html>
//       <span className="canvas-load"></span>
//       <p
//       style={{
//         fontSize : 14,
//         color : '#f1f11f1',
//         fontWeight : 800,
//         margintop : 40
//       }
//       }>
//         {progress.toFixed(2)}%
//       </p>
//     </Html>
//   )
// }

// export default Loader

import { useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <div className="w-[75px] h-[75px] rounded-full border-4 border-[#915eff] border-t-transparent animate-spin flex justify-center items-center">
      <span className="absolute text-[#915eff] font-bold text-sm">
        {progress.toFixed(0)}%
      </span>
    </div>
  );
};

export default CanvasLoader;
