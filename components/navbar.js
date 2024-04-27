import { useState } from 'react';

const Navbar = ({ onPlayPauseToggle, onPersonalityChange }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [selectedPersonality, setSelectedPersonality] = useState('Kara Swisher');

    const handlePlayPauseToggle = () => {
        setIsPlaying(!isPlaying);
        onPlayPauseToggle();
    };

    const handlePersonalityChange = (e) => {
        setSelectedPersonality(e.target.value);
        onPersonalityChange(e.target.value);
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
                <div>
                    <select
                        id="personality"
                        value={selectedPersonality}
                        onChange={handlePersonalityChange}
                        className="px-2 py-1 border border-gray-300 rounded"
                    >
                        <option value="Kara Swisher">Kara Swisher</option>
                        <option value="Joe Rogan">Joe Rogan</option>
                        <option value="Ezra Klein">Ezra Klein</option>
                    </select>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;