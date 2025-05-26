import { Link } from 'react-router-dom';

function Footer() {
  return (
    <nav className="bg-gray-700 border-b border-gray-700 px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <div className="flex space-x-6 text-sm md:text-base font-medium text-white" style={{ fontFamily: "'Lora', sans-serif" }}>
          Created by Summer Dixon, Spring 2025
        </div>

        <div className="flex space-x-6 text-sm md:text-base font-medium text-white" style={{ fontFamily: "'Lora', sans-serif" }}>
            DH 150: German Émigré Culture, Art, and Media in Los Angeles, taught by Prof. Benno Herz
        </div>
        
      </div>
    </nav>
  );
}

export default Footer;