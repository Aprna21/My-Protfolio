import React from 'react';

const VideoBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: 'brightness(0.3) contrast(1.2)',
        }}
      >
        <source src="/protvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay for better text readability */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-purple-900/30"
        style={{
          background: `
            linear-gradient(135deg, 
              rgba(0, 0, 0, 0.7) 0%, 
              rgba(26, 26, 46, 0.5) 50%, 
              rgba(22, 33, 62, 0.6) 100%
            )
          `
        }}
      ></div>
    </div>
  );
};

export default VideoBackground;
