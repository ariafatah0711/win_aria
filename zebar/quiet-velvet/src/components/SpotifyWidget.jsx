import * as spotifyUtils from '../utils.js'
import React, { useEffect, useState } from 'react';

const SpotifyWidget = () => {
    const [song, setSong] = useState('fetching...');
    const [showSettings, setShowSettings] = useState(false);

    const maxSongLength = window.innerWidth > 1600 ? 30 : 10;

    async function updateSong() {
        const tempSong = await spotifyUtils.getCurrentSong()
        setSong(tempSong)
    }

    let intervalId = [];
    useEffect(() => {
        const updateAndSetInterval = async () => {
            await updateSong();
            const tempId = setInterval(async () => {
                await updateSong();
            }, 1000 * 10);
            intervalId.push(tempId);
        };

        updateAndSetInterval();

        return () => {
            for (const id of intervalId) {
                clearInterval(id);
            }
        };
    }, []);

    const style = {
        textDecoration: 'none', color: 'var(--font-color)',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
    }
    const settingsStyle = {
        display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px',
        paddingRight: '10px',
    }
    const iconStyle = {
        cursor: 'pointer',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        color: 'var(--font-color)', borderRadius: '50%',
    }
    return (
        <button className="clean-button" onMouseEnter={() => setShowSettings(true)}
                onMouseLeave={() => setShowSettings(false)}
                style={style}>
            <a className="logo" href="spotify:home" target="_blank" style={style}>
                <i className="nf nf-fa-spotify"></i>
                {song.length > maxSongLength ? song.substring(0, maxSongLength) + '...' : song}
            </a>
            {showSettings && !['fetching...', 'Error', ''].includes(song) ?
                <div style={settingsStyle}>
                    <button className="nf nf-md-skip_previous clean-button" style={iconStyle} onClick={async () => {
                        await spotifyUtils.previousSong();
                        setTimeout(async () => await updateSong(), 1000);
                    }}></button>
                    <button className="nf nf-md-play_pause clean-button" style={iconStyle} onClick={async () => {
                        await spotifyUtils.playPause();
                        setTimeout(async () => await updateSong(), 1000);
                    }}></button>
                    <button className="nf nf-md-skip_next clean-button" style={iconStyle} onClick={async () => {
                        await spotifyUtils.skipSong();
                        setTimeout(async () => await updateSong(), 1000);
                    }}></button>
                </div>
                : null}
        </button>
    );
}

export default SpotifyWidget;