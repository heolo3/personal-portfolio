import { Moon, Sun } from 'lucide-react';
import meImage from '../assets/me.jpg';

export default function Header({ isDark, toggleDarkMode }) {
  return (
    <header className={`${isDark ? 'bg-linear-to-r from-indigo-700 to-purple-700' : 'bg-linear-to-r from-indigo-600 to-purple-600'} text-white py-20 px-8 shadow-lg`}>
      <div className="max-w-4xl mx-auto flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center gap-8 mb-8">
            <img
              src={meImage}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
            />
            <div>
              <h1 className="text-5xl font-bold mb-2">Graeme Nelson</h1>
              <p className="text-xl opacity-90">Full Stack Developer & Designer</p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-8 justify-start">
            <a href="#about" className="font-semibold text-lg hover:opacity-80 border-b-2 border-transparent hover:border-white transition pb-1">About Me</a>
            <a href="#portfolio" className="font-semibold text-lg hover:opacity-80 border-b-2 border-transparent hover:border-white transition pb-1">Portfolio</a>
            <a href="#links" className="font-semibold text-lg hover:opacity-80 border-b-2 border-transparent hover:border-white transition pb-1">Links</a>
            <a href="#other" className="font-semibold text-lg hover:opacity-80 border-b-2 border-transparent hover:border-white transition pb-1">Other</a>
          </nav>
        </div>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition"
          aria-label="Toggle dark mode"
        >
          {isDark ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>
    </header>
  );
}
