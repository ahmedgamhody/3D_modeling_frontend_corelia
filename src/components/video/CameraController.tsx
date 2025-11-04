import { useEffect } from "react";
import { useThree } from "@react-three/fiber";

export const CameraController: React.FC = () => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 0, 0.1);
  }, [camera]);

  return null;
};

// components/VideoControls.tsx
import React from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  RotateCcw,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import type { VideoControlsProps } from "@/types";

export const VideoControls: React.FC<VideoControlsProps> = ({
  isPlaying,
  isMuted,
  currentTime,
  duration,
  onTogglePlay,
  onToggleMute,
  onSeek,
  onResetView,
  onZoomIn,
  onZoomOut,
}) => {
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    onSeek(value);
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
      <div className="max-w-4xl mx-auto space-y-4">
        {/* Progress Bar */}
        <div className="flex items-center gap-3 text-white text-sm">
          <span className="min-w-[45px]">{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeekChange}
            className="flex-1 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${progressPercentage}%, #4b5563 ${progressPercentage}%, #4b5563 100%)`,
            }}
          />
          <span className="min-w-[45px]">{formatTime(duration)}</span>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onTogglePlay}
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause size={24} />
              ) : (
                <Play size={24} className="ml-0.5" />
              )}
            </button>

            <button
              onClick={onToggleMute}
              className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>

            <button
              onClick={onResetView}
              className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-colors"
              title="Reset View"
              aria-label="Reset View"
            >
              <RotateCcw size={24} />
            </button>

            {onZoomIn && (
              <button
                onClick={onZoomIn}
                className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-colors"
                title="Zoom In"
                aria-label="Zoom In"
              >
                <ZoomIn size={24} />
              </button>
            )}

            {onZoomOut && (
              <button
                onClick={onZoomOut}
                className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-colors"
                title="Zoom Out"
                aria-label="Zoom Out"
              >
                <ZoomOut size={24} />
              </button>
            )}
          </div>

          <div className="text-white text-sm bg-gray-800/50 px-4 py-2 rounded-lg">
            <span className="opacity-75">
              Drag to rotate • Scroll to zoom • Double click to zoom in
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
