import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";

interface VideoSphereProps {
  videoUrl: string;
  onVideoElementReady?: (video: HTMLVideoElement) => void;
}

export const VideoSphere: React.FC<VideoSphereProps> = ({
  videoUrl,
  onVideoElementReady,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoTexture, setVideoTexture] = useState<THREE.VideoTexture | null>(
    null
  );

  useEffect(() => {
    const video = document.createElement("video");
    video.src = videoUrl;
    // لا حاجة لـ crossOrigin للفيديو المحلي
    // video.crossOrigin = "anonymous";
    video.loop = true;
    video.muted = false;
    video.playsInline = true;
    video.preload = "auto";

    // إضافة event listeners للتأكد من تحميل الفيديو
    video.addEventListener("loadeddata", () => {
      console.log("Video loaded successfully");
    });

    video.addEventListener("error", (e) => {
      console.error("Video loading error:", e);
      console.error("Video URL:", videoUrl);
    });

    videoRef.current = video;

    const texture = new THREE.VideoTexture(video);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBFormat;

    setVideoTexture(texture);

    if (onVideoElementReady) {
      onVideoElementReady(video);
    }

    // محاولة تحميل الفيديو
    video.load();

    return () => {
      texture.dispose();
      video.pause();
      video.src = "";
    };
  }, [videoUrl, onVideoElementReady]);

  return (
    <mesh ref={meshRef} scale={[-1, 1, 1]}>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial
        map={videoTexture}
        side={THREE.BackSide}
        toneMapped={false}
      />
    </mesh>
  );
};
