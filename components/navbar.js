import { useState } from 'react';

const Navbar = ({ onPlayPauseToggle }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPauseToggle = () => {
        setIsPlaying(!isPlaying);
        onPlayPauseToggle();
    };


    return (
        <nav className="flex items-center justify-between px-[200px] py-5 bg-white shadow-md">
            <div className="flex items-center">
                <img src="/logo-wrapped.png" alt="Conversation logo" className="w-8 h-8 mr-2" />
                <span className="text-2xl font-semibold">Podcast Builder</span>
            </div>
            <div className="flex items-center">
                <button
                    onClick={handlePlayPauseToggle}
                    className="px-4 py-2 text-white bg-primary rounded hover:bg-green-600 mr-4"
                >
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;