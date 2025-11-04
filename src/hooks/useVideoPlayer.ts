import { useState, useEffect, useCallback, useRef } from "react";

export const useVideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const videoElementRef = useRef<HTMLVideoElement | null>(null);
  const cameraRef = useRef<unknown>(null);

  const handleVideoElementReady = useCallback((video: HTMLVideoElement) => {
    videoElementRef.current = video;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (videoElementRef.current) {
        setCurrentTime(videoElementRef.current.currentTime);
        setDuration(videoElementRef.current.duration || 0);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const togglePlay = useCallback(() => {
    if (videoElementRef.current) {
      if (isPlaying) {
        videoElementRef.current.pause();
      } else {
        videoElementRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    if (videoElementRef.current) {
      videoElementRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  }, [isMuted]);

  const handleSeek = useCallback((time: number) => {
    if (videoElementRef.current) {
      videoElementRef.current.currentTime = time;
      setCurrentTime(time);
    }
  }, []);

  const resetView = useCallback(() => {
    window.location.reload();
  }, []);

  const handleZoomIn = useCallback(() => {
    setZoomLevel((prev) => Math.max(0.5, prev - 0.5));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoomLevel((prev) => Math.min(3, prev + 0.5));
  }, []);

  const handleCameraReady = useCallback((camera: unknown) => {
    cameraRef.current = camera;
  }, []);

  return {
    isPlaying,
    isMuted,
    currentTime,
    duration,
    zoomLevel,
    togglePlay,
    toggleMute,
    handleSeek,
    resetView,
    handleVideoElementReady,
    handleZoomIn,
    handleZoomOut,
    handleCameraReady,
  };
};
