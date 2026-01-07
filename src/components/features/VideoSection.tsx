import React, { useEffect, useRef } from 'react';

interface VideoSectionProps {
  videoUrl: string;
  posterUrl?: string;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ videoUrl, posterUrl }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const setInitialFrame = () => {
        video.currentTime = 0.2;
      };

      video.addEventListener('loadedmetadata', setInitialFrame);

      return () => {
        video.removeEventListener('loadedmetadata', setInitialFrame);
      };
    }
  }, []);

  return (
    <section className="w-full flex justify-center py-8 bg-sand">
      <div className="w-full max-w-3xl px-4 group animate-fade-in">
        <video
          ref={videoRef}
          className="w-full h-auto max-h-[500px] rounded-2xl shadow-card video-controls-on-hover"
          controls
          poster={posterUrl}
          preload="metadata"
        >
          <source src={videoUrl} type="video/mp4" />
          Ihr Browser unterstuetzt das Video-Tag nicht.
        </video>
      </div>
    </section>
  );
};
