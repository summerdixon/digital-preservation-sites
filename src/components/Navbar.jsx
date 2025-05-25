import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-700 border-b border-gray-700 px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left side title */}
        <div className="text-white text-lg font-medium">
        <Link to="/" className="text-white hover:text-blue-200 transition" style={{ fontFamily: "'Lora', serif" }}> Digital Humanities 150 </Link>
        </div>
        
        {/* Right side nav links */}
        <div className="flex space-x-6 text-sm md:text-base font-medium">
          <Link to="/mann" className="text-white hover:text-blue-200 transition" style={{ fontFamily: "'Lora', serif" }}>Thomas Mann House</Link>
          <Link to="/scheyer" className="text-white hover:text-blue-200 transition" style={{ fontFamily: "'Lora', serif" }}>Galka Scheyer House</Link>
          <Link to="/about" className="text-white hover:text-blue-200 transition" style={{ fontFamily: "'Lora', serif" }}>About</Link>
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;