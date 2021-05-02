import { createContext, ReactNode, useContext, useState } from 'react';

type Episode = {
    duration: number;
    members: string;
    title: string;
    thumbnail: string;
    url: string;
}

type PlayerContextData = {
    currentEpisodeindex: number;
    episodeList: Episode[];
    isPlaying: boolean;
    isLooping: boolean;
    isShuffling: boolean;
    hasNext: boolean;
    hasPrevious: boolean;
    clearPlayerState: () => void;
    play: (episode: Episode) => void;
    playList: (list: Episode[], index: number) => void;
    playNext: () => void;
    playPreviuos: () => void;
    setPlayingState: (state: Boolean) => void;
    toggleLoop: () => void;
    togglePlay: () => void;
    toggleShuffle: () => void;
}

type PlayerContextProviderProps = {
    children: ReactNode;
}


export const PlayerContext = createContext({} as PlayerContextData);

export function PlayerContextProvider({ children } : PlayerContextProviderProps) {
    const [episodeList, setEpisodeList] = useState([]);
    const [currentEpisodeindex, setCurrentEpisodeIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLooping, setIsLooping] = useState(false);
    const [isShuffling, setIsShuffling] = useState(false);
    
    function clearPlayerState() {
        setEpisodeList([]);
        setCurrentEpisodeIndex(0);
    }

    function play(episode: Episode){
      setEpisodeList([episode]);
      setCurrentEpisodeIndex(0);
      setIsPlaying(true);
    }

    function playList(List: Episode[], index: number){
        setEpisodeList(List);
        setCurrentEpisodeIndex(index);
        setIsPlaying(true);
    }

    function toggleLoop() {
        setIsLooping(!isLooping);
    }

    function toggleShuffle() {
        setIsShuffling(!isShuffling);
    }
  
    function togglePlay () {
      setIsPlaying(!isPlaying);
    }
  
    function setPlayingState(state: boolean) {
      setIsPlaying(state);
    }
    
    const hasPrevious = currentEpisodeindex > 0
    const hasNext = isShuffling || (currentEpisodeindex + 1) < episodeList.length

    function playPreviuos() {
        if(hasPrevious) {
            setCurrentEpisodeIndex(currentEpisodeindex - 1);
        }        
    }
    
    function playNext() {
        if (isShuffling) {
            const nextRandomEpisodeIndex = Math.floor(Math.random() * episodeList.length);
            setCurrentEpisodeIndex(nextRandomEpisodeIndex);
        }else if(hasNext) {
            setCurrentEpisodeIndex(currentEpisodeindex + 1);
        }
    }

    return (
        <PlayerContext.Provider 
            value={{ 
                episodeList, 
                currentEpisodeindex, 
                isPlaying,
                isLooping,
                isShuffling,
                hasNext,
                hasPrevious,
                clearPlayerState,
                play,
                playList, 
                playPreviuos,
                playNext,
                setPlayingState,
                toggleLoop,
                togglePlay,
                toggleShuffle,
            }}
        >
            {children}
        </PlayerContext.Provider>
    )
}

export const usePlayer = () => {
    return useContext(PlayerContext)
}