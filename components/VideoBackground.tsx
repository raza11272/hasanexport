'use client';

import React, { useEffect, useRef, useState } from 'react';

interface VideoBackgroundProps {
  videoUrl: string;
  posterUrl?: string;
  className?: string;
}

function getYoutubeId(url: string): string {
  if (!url) return '';
  if (url.includes('youtu.be/')) return url.split('youtu.be/')[1]?.split(/[?#]/)[0] || '';
  if (url.includes('youtube.com/watch')) return url.split('v=')[1]?.split('&')[0] || '';
  if (url.includes('youtube.com/embed/')) return url.split('embed/')[1]?.split(/[?#]/)[0] || '';
  if (url.includes('youtube.com/shorts/')) return url.split('shorts/')[1]?.split(/[?#]/)[0] || '';
  return '';
}

export default function VideoBackground({ videoUrl, posterUrl, className = '' }: VideoBackgroundProps) {
  const ytId = getYoutubeId(videoUrl);

  if (!ytId) {
    return <DirectVideoBackground videoUrl={videoUrl} posterUrl={posterUrl} className={className} />;
  }

  return <YouTubeBackground ytId={ytId} posterUrl={posterUrl} className={className} />;
}

function DirectVideoBackground({ videoUrl, posterUrl, className = '' }: {
  videoUrl: string;
  posterUrl?: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showCover, setShowCover] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.readyState >= 3) {
      setShowCover(false);
    }

    const handlePlaying = () => setShowCover(false);
    video.addEventListener('playing', handlePlaying);
    video.addEventListener('canplaythrough', handlePlaying);
    video.addEventListener('play', handlePlaying);

    // Fallback: hide cover after 4 seconds
    const fallback = setTimeout(() => setShowCover(false), 4000);

    return () => {
      clearTimeout(fallback);
      video.removeEventListener('playing', handlePlaying);
      video.removeEventListener('canplaythrough', handlePlaying);
      video.removeEventListener('play', handlePlaying);
    };
  }, [videoUrl]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        src={videoUrl}
        poster={posterUrl}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      {posterUrl && (
        <img
          src={posterUrl}
          alt="Video loading cover"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10 transition-opacity duration-700"
          style={{
            opacity: showCover ? 1 : 0,
            transition: 'opacity 0.7s ease-in-out'
          }}
        />
      )}
    </div>
  );
}

function YouTubeBackground({ ytId, posterUrl, className = '' }: {
  ytId: string;
  posterUrl?: string;
  className?: string;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  // Start with cover ON — hides YouTube spinner during initial load
  const [showCover, setShowCover] = useState(true);

  // loop=1&playlist=ID → YouTube loops natively & seamlessly
  // enablejsapi=1 → we can receive postMessage state events
  const embedSrc = `https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&loop=1&playlist=${ytId}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&playsinline=1&enablejsapi=1`;

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    // Fallback: if postMessage API never responds (e.g. blocked), reveal after 6s
    const fallback = setTimeout(() => setShowCover(false), 6000);

    const sendListening = () => {
      iframe.contentWindow?.postMessage(JSON.stringify({ event: 'listening' }), '*');
    };

    // Send 'listening' handshake after iframe loads + retry
    iframe.addEventListener('load', sendListening);
    const t1 = setTimeout(sendListening, 700);
    const t2 = setTimeout(sendListening, 2000);

    const onMessage = (e: MessageEvent) => {
      let d: any;
      try { d = typeof e.data === 'string' ? JSON.parse(e.data) : e.data; } catch { return; }
      if (!d || d.event !== 'onStateChange') return;

      switch (d.info) {
        case 1:  // PLAYING → video running, hide cover
          setShowCover(false);
          clearTimeout(fallback);
          break;
        case 3:  // BUFFERING → show image to hide YouTube spinner
        case -1: // UNSTARTED → show image
          setShowCover(true);
          break;
        // state 0 (ENDED) won't fire with loop=1 — YouTube loops internally
        // state 2 (PAUSED) — no action needed for background video
      }
    };

    window.addEventListener('message', onMessage);
    return () => {
      clearTimeout(fallback);
      clearTimeout(t1);
      clearTimeout(t2);
      iframe.removeEventListener('load', sendListening);
      window.removeEventListener('message', onMessage);
    };
  }, []);

  return (
    <div className={`relative w-full h-full overflow-hidden   ${className}`}>
      {/* YouTube iframe — always present, full bleed, no controls */}
      <iframe
        ref={iframeRef}
        src={embedSrc}
        allow="autoplay; encrypted-media"
        allowFullScreen
        loading='eager'
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78%] h-[177.78%] min-w-full min-h-full"
        style={{ pointerEvents: 'none', border: 'none' }}
      />
      {posterUrl && (
        <img
          src={posterUrl}
          alt="Video loading cover"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10 transition-opacity duration-700"
          style={{
            opacity: showCover ? 1 : 0,
            transition: 'opacity 0.7s ease-in-out'
          }}
        />
      )}
    </div>
  );
}
