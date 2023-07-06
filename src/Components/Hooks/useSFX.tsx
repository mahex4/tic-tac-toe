import { FC, useEffect } from 'react';


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
