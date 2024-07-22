import React, { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { IconMuted, IconUnMuted } from '../../assets/icons';
import Loader from './Loader';

const Video = ({
  url,
  customClass,
  displayMuteButton = false,
  videoControls = false,
  autoPlay = false,
  loader = false,
}) => {
  const videoRef = useRef(null);
  const isInView = useInView(videoRef, { amount: 0.6 });
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const handleMutedChange = () => {
    setIsMuted(!isMuted);
  };

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (videoRef.current) {
      if (videoRef.current.readyState >= 3) {
        setIsLoading(false);
      } else {
        setIsLoading(true);
      }
    }
  }, [url]);

  useEffect(() => {
    if (videoRef.current && autoPlay && isInView) {
      videoRef.current.play();
    }
  }, [isInView, autoPlay]);

  const containerClass = `h-full w-full ${loader ? 'relative' : ''}`;
  const videoClass = `object-cover object-center w-full ${customClass || ''}`;

  return (
    <div className={containerClass}>
      <video
        ref={videoRef}
        loop
        playsInline
        muted={!isInView || isMuted}
        autoPlay={autoPlay}
        className={videoClass}
        src={url}
        onLoadedData={handleLoadedData}
        onError={handleLoadedData}
      >
        <track kind="captions" />
      </video>
      {displayMuteButton && (
        <div
          className="absolute top-12 mt-8 text-white left-4 pe-4 z-10"
          onClick={handleMutedChange}
        >
          {isMuted ? (
            <IconMuted stroke="white" />
          ) : (
            <IconUnMuted stroke="white" />
          )}
        </div>
      )}
      {loader && isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Video;
