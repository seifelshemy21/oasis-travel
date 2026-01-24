import React, { useState, useEffect, useRef } from 'react';
import videoSrc from '../assets/intro/introvid.mp4';
import { FaTimes } from 'react-icons/fa';

const IntroVideo = ({ onComplete }) => {
    const videoRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);

    const handleVideoEnd = () => {
        setIsVisible(false);
        setTimeout(onComplete, 500); // Allow fade out animation to finish
    };

    useEffect(() => {
        // Attempt to play automatically
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Autoplay prevented:", error);
                // If autoplay fails (e.g. checks for interaction), maybe show a "Play" button?
                // For now, let's assume muted autoplay works.
            });
        }
    }, []);

    return (
        <div
            className={`fixed inset-0 z-[1000] bg-black flex items-center justify-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
            <video
                ref={videoRef}
                src={videoSrc}
                className="w-full h-full object-cover"
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnd}
            />

            <button
                onClick={handleVideoEnd}
                className="absolute top-8 right-8 text-white/50 hover:text-white text-sm uppercase tracking-widest border border-white/20 px-6 py-2 rounded-full hover:bg-white/10 transition-all duration-300"
            >
                Skip Intro
            </button>
        </div>
    );
};

export default IntroVideo;
