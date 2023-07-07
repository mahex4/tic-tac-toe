import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';

interface AudioInterface {
    playAudio: boolean
}

const AudioPlayer: React.FC<AudioInterface> = ({ playAudio: handlePlay }) => {
    const [isPlaying, setPlaying] = useState(false);

    return (
        <div>
            {isPlaying && <ReactAudioPlayer src="./Click1.wav" autoPlay />}
        </div>
    );
};

export default AudioPlayer;
