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
