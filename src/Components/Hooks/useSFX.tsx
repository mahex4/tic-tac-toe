import { FC, useEffect } from 'react';
import click1 from '../Click1.wav'

interface SoundHook {
    soundUrl: string
}

const useSoundEffect: FC<SoundHook> = ({ soundUrl }) => {
    useEffect(() => {
        const audio = new Audio(soundUrl);

        const playSound = () => {
            audio.play();
        };

        playSound();

        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, [soundUrl]);

    return null;
};

export default useSoundEffect;
