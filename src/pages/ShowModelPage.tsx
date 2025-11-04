import { VideoControls } from "@/components/video/CameraController";
import { Instructions } from "@/components/video/Instructions";
import { Scene3D } from "@/components/video/Scene3D";
import { useVideoPlayer } from "@/hooks/useVideoPlayer";
import videoFile from "@/assets/R0010639_202508131717_YN20102774.MP4";

export default function ShowModelPage() {
  const {
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
  } = useVideoPlayer();
  const videoUrl = videoFile;

  return (
    <div>
      <div className="w-full h-screen bg-black relative">
        <Scene3D
          videoUrl={videoUrl}
          onVideoElementReady={handleVideoElementReady}
          zoomLevel={zoomLevel}
        />

        <VideoControls
          isPlaying={isPlaying}
          isMuted={isMuted}
          currentTime={currentTime}
          duration={duration}
          onTogglePlay={togglePlay}
          onToggleMute={toggleMute}
          onSeek={handleSeek}
          onResetView={resetView}
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
        />

        <Instructions />
      </div>
    </div>
  );
}
