import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import Slider from 'rc-slider';

import { usePlayer } from '../../contexts/PlayerContext';

import 'rc-slider/assets/index.css';
import styles from './styles.module.scss';
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';

export function Player(){
    const audioRef = useRef<HTMLAudioElement>(null);
    const [progress,setProgress] = useState(0);

    const { 
        episodeList , 
        currentEpisodeindex, 
        isPlaying,
        isLooping,
        isShuffling,
        hasNext,
        hasPrevious,
        clearPlayerState,
        playNext,
        playPreviuos,
        toggleLoop,
        togglePlay,
        toggleShuffle,
        setPlayingState
    } = usePlayer()

    const episode = episodeList[currentEpisodeindex]

    useEffect(() => {
        if(!audioRef.current) {
            return;
        }

        if(isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying])

    function handleSeeK (amount: number) {
        audioRef.current.currentTime = amount;
        setProgress(amount);
    }

    function handleEpisodeEnded () {
        if(hasNext) {
            playNext();
        } else {
            clearPlayerState();
        }
    }

    function setupProgressListener () {
        audioRef.current.currentTime = 0;

        audioRef.current.addEventListener( 'timeupdate', () => {
            setProgress(Math.floor(audioRef.current.currentTime));
        });
    }

    return(
        <div className={styles.playerContainer}>
            <header>
                <img src="/playing.svg" alt="Tocando agora"/>
                <strong>Tocando agora </strong>
            </header>


            { episode ? (
                <div className={styles.currentEpisode}>
                    <Image 
                        width={592}
                        height={592}
                        src={episode.thumbnail}
                        objectFit="cover"
                    />
                    <strong>{episode.title}</strong>
                    <span>{episode.members}</span>
                </div>
            ) : (
                <div className={styles.emptyPlayer}>
                    <strong> Selecione um podcast para ouvir</strong>
                </div>
            ) }


            <footer className={!episode ? styles.empty : ''}>
                <div className={styles.progress}>
                <span>{convertDurationToTimeString(progress)}</span>
                    <div className={styles.slider}>
                        { episode ? (
                            <Slider
                                max={episode.duration}
                                value={progress}
                                trackStyle={{ backgroundColor: '#04d361' }}
                                railStyle={{ backgroundColor: '#9f75ff' }}
                                handleStyle={{ borderColor: '#04d361'}}
                                onChange={handleSeeK}
                            />
                        ) : (
                            <div className={styles.emptySlider} />
                        ) }
                    </div>
                    <span>{convertDurationToTimeString(episode?.duration ?? 0)}</span>
                </div>

                { episode && (
                    <audio 
                        src={episode.url}
                        ref={audioRef}
                        autoPlay
                        loop={isLooping}
                        onEnded={handleEpisodeEnded}
                        onLoadedMetadata={ setupProgressListener }
                        onPlay={ () => setPlayingState(true) }
                        onPause={ () => setPlayingState(false)}
                    />
                )}

                <div className={styles.buttons}>
                    <button 
                        type="button" 
                        onClick={toggleShuffle} 
                        disabled={!episode || episodeList.length === 1}
                        className={isShuffling ? styles.isActive : ''}
                    >                    
                        <img src="/shuffle.svg" alt="Embaralhar"/>
                    </button>
                    <button type="button" onClick={playPreviuos} disabled={!episode || !hasPrevious}>
                        <img src="/play-previous.svg" alt="Tocar anterior"/>
                    </button>
                    <button 
                        type="button" 
                        className={styles.playButton} 
                        disabled={!episode}
                        onClick={togglePlay}
                    >
                        { isPlaying
                            ? <img src="/pause.svg" alt="Pause"/>
                            : <img src="/play.svg" alt="Tocar"/>
                        }
                    </button>
                    <button type="button" onClick={playNext} disabled={!episode || !hasNext}>
                        <img src="/play-next.svg" alt="Tocar próxima"/>
                    </button>
                    <button 
                        type="button" 
                        onClick={toggleLoop} 
                        disabled={!episode}
                        className={isLooping ? styles.isActive : ''}
                    >
                        <img src="/repeat.svg" alt="Repeti"/>
                    </button>                    
                </div>
            </footer>
        </div>
    );
}