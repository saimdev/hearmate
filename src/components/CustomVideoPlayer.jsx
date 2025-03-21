import { useRef, useState } from "react";
import { Play, Pause, Maximize, Minimize } from "lucide-react";

const CustomVideoPlayer = ({ src }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isHovered, setIsHovered] = useState(false); // Track hover state

    // Play / Pause Toggle
    const togglePlayPause = () => {
        if (!videoRef.current) return;
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    // Update Progress Bar
    const handleTimeUpdate = () => {
        const percentage =
            (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setProgress(percentage);
    };

    // Seek Video
    const handleSeek = (e) => {
        const newTime = (e.target.value / 100) * videoRef.current.duration;
        videoRef.current.currentTime = newTime;
        setProgress(e.target.value);
    };

    // Toggle Fullscreen
    const toggleFullscreen = () => {
        if (!videoRef.current) return;
        if (!document.fullscreenElement) {
            videoRef.current.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    return (
        <div
            className="max-w-full mx-auto relative bg-black rounded-lg overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Video Element */}
            <video
                ref={videoRef}
                src={src}
                className="w-full rounded-lg"
                onTimeUpdate={handleTimeUpdate}
            ></video>

            {/* Play/Pause Button - Show only on hover */}
            {isHovered && (
                <button
                    onClick={togglePlayPause}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full 
                    text-white bg-gradient-to-r from-color-1 to-color-3 hover:from-color-2 hover:to-color-4
                    transition shadow-lg"
                >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>
            )}

            {/* Controls */}
            <div className="absolute md:bottom-24 bottom-0 left-0 right-0 flex items-center justify-between md:p-3 p-1 bg-black/50 backdrop-blur-md rounded-b-lg">
                {/* Timeline */}
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={handleSeek}
                    className="w-full mx-3 h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                />

                {/* Fullscreen Button */}
                <button onClick={toggleFullscreen} className="text-white">
                    {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
                </button>
            </div>
        </div>
    );
};

export default CustomVideoPlayer;
