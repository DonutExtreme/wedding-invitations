import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import { wedding } from "@/config/wedding";

const MusicToggle = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!wedding.musicUrl) return;
    const audio = new Audio(wedding.musicUrl);
    audio.loop = true;
    audio.volume = wedding.musicVolume;
    audio.preload = "auto";
    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  if (!wedding.musicUrl) return null;

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }
    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  return (
    <motion.button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full border border-primary bg-background/80 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 shadow-lg"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2.5, duration: 0.3 }}
      aria-label={playing ? "Mute music" : "Play music"}
    >
      {playing ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
    </motion.button>
  );
};

export default MusicToggle;
