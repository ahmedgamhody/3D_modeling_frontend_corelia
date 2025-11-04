import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { VideoSphere } from "./VideoSphere";
import { CameraController } from "./CameraController";
import { useRef, useState } from "react";

interface Scene3DProps {
  videoUrl: string;
  onVideoElementReady?: (video: HTMLVideoElement) => void;
  zoomLevel?: number;
}

export const Scene3D: React.FC<Scene3DProps> = ({
  videoUrl,
  onVideoElementReady,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleDoubleClick = () => {
    setIsZoomed((prev) => !prev);
  };

  return (
    <div
      onDoubleClick={handleDoubleClick}
      className="viewer-container w-full h-full"
    >
      <Canvas ref={canvasRef}>
        <CameraController />
        <VideoSphere
          videoUrl={videoUrl}
          onVideoElementReady={onVideoElementReady}
        />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          rotateSpeed={-0.5}
          minDistance={isZoomed ? 0.1 : 0.5}
          maxDistance={isZoomed ? 5 : 10}
        />
        <PerspectiveCamera
          makeDefault
          fov={isZoomed ? 50 : 75}
          position={[0, 0, isZoomed ? 0.1 : 0.5]}
        />
      </Canvas>
    </div>
  );
};
