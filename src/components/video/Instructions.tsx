export const Instructions: React.FC = () => {
  return (
    <div className="absolute top-6 left-6 bg-black/60 text-white p-4 rounded-lg max-w-xs">
      <h3 className="font-bold mb-2 text-lg">🎥 360° Video Viewer</h3>
      <ul className="text-sm space-y-1 opacity-90">
        <li>• Drag with mouse to look around</li>
        <li>• Use mouse wheel to zoom in/out</li>
        <li>• Press Play to start the video</li>
      </ul>
    </div>
  );
};
