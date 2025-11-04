export type TLoading = "idle" | "pending" | "succeeded" | "failed";
export interface VideoPlayerProps {
  videoUrl: string;
}

export interface VideoControlsProps {
  isPlaying: boolean;
  isMuted: boolean;
  currentTime: number;
  duration: number;
  onTogglePlay: () => void;
  onToggleMute: () => void;
  onSeek: (time: number) => void;
  onResetView: () => void;
  onZoomIn?: () => void;
  onZoomOut?: () => void;
}
