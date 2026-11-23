import { useRef, useState, useEffect, useCallback } from 'react';

/**
 * Управление HTML5 <audio> с fallback-таймером,
 * если MP3 не загрузится (демо не «умирает»).
 */
export function useAudio(src) {
  const audioRef = useRef(null);
  const fallbackTimer = useRef(null);

  const [isPlaying, setIsPlaying]   = useState(false);
  const [progress, setProgress]     = useState(0);   // 0..1
  const [currentTime, setCurrentTime] = useState(0); // сек
  const [duration, setDuration]     = useState(0);   // сек
  const [isFallback, setIsFallback] = useState(false);

  /* ------- при смене src: сбрасываем состояние ------- */
  useEffect(() => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    setDuration(0);
    setIsFallback(false);
    stopFallback();
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, [src]);

  /* ------- Fallback: имитация прогресса, если файл не грузится ------- */
  const startFallback = () => {
    stopFallback();
    setIsFallback(true);
    setDuration(50);
    let t = 0;
    fallbackTimer.current = setInterval(() => {
      t += 0.25;
      if (t >= 50) t = 0;
      setCurrentTime(t);
      setProgress(t / 50);
    }, 250);
  };

  const stopFallback = () => {
    if (fallbackTimer.current) {
      clearInterval(fallbackTimer.current);
      fallbackTimer.current = null;
    }
  };

  /* ------- Привязка событий <audio> ------- */
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    const onTime = () => {
      if (!isFallback) {
        setCurrentTime(el.currentTime);
        setProgress(el.duration ? el.currentTime / el.duration : 0);
      }
    };
    const onMeta = () => { if (!isFallback) setDuration(el.duration || 0); };
    const onEnd  = () => { setIsPlaying(false); setProgress(0); setCurrentTime(0); };
    const onErr  = () => {
      console.warn('[useAudio] ошибка загрузки, включаю fallback-таймер');
      if (isPlaying) startFallback();
    };

    el.addEventListener('timeupdate', onTime);
    el.addEventListener('loadedmetadata', onMeta);
    el.addEventListener('ended', onEnd);
    el.addEventListener('error', onErr);

    return () => {
      el.removeEventListener('timeupdate', onTime);
      el.removeEventListener('loadedmetadata', onMeta);
      el.removeEventListener('ended', onEnd);
      el.removeEventListener('error', onErr);
      stopFallback();
    };
  }, [isPlaying, isFallback]);

  /* ------- Управление ------- */
  const play = useCallback(async () => {
    const el = audioRef.current;
    if (!el) return;
    try {
      await el.play();
      setIsPlaying(true);
      if (isFallback) startFallback();
    } catch (e) {
      console.warn('[useAudio] play() не удался → fallback');
      setIsPlaying(true);
      startFallback();
    }
  }, [isFallback]);

  const pause = useCallback(() => {
    const el = audioRef.current;
    if (el) el.pause();
    setIsPlaying(false);
    stopFallback();
  }, []);

  const toggle = useCallback(() => {
    if (isPlaying) pause();
    else play();
  }, [isPlaying, play, pause]);

  const seek = useCallback((ratio) => {
    const el = audioRef.current;
    if (isFallback) {
      setProgress(ratio);
      setCurrentTime(ratio * 50);
      return;
    }
    if (!el || !el.duration) return;
    const t = ratio * el.duration;
    el.currentTime = t;
    setProgress(ratio);
    setCurrentTime(t);
  }, [isFallback]);

  return {
    audioRef,
    isPlaying,
    progress,
    currentTime,
    duration,
    isFallback,
    play,
    pause,
    toggle,
    seek,
  };
}
