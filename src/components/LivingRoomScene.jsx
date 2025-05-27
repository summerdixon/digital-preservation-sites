import Footer from '../components/Footer';

export default function LivingRoomPage() {
    return (
    <div>
      <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden font-sans">
        {/* Background image with dark overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/mann_living_room.jpg"
            alt="Living Room Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gray-900/30" />
          <div className="absolute inset-0 pointer-events-none" />
        </div>
  
        {/* Main content */}
        <div className="relative z-10 px-6 py-10 max-w-4xl mx-auto space-y-10">
          <h1 className="text-3xl md:text-4xl font-semibold text-white" style={{ fontFamily: "'DM Mono', monospace" }}>
            Preservation and Legacy of the Thomas Mann House
          </h1>
  
          <p className="text-gray-200 text-lg leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
            The Thomas Mann House today stands not only as a preserved historical site but as a platform for transatlantic dialogue. Through cultural programs, residencies, and public events, the house continues to foster the intellectual exchange Mann himself championed during his years of exile in Los Angeles.
          </p>
  
          <p className="text-gray-200 text-lg leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
            Its restoration reflects a commitment to preserving both the material and philosophical legacy of exiled thinkers who sought refuge during the rise of fascism in Europe. By maintaining this space, the TMH Foundation ensures their voices remain a part of contemporary discourse.
          </p>
  
          <div className="bg-white/10 border-l-4 border-blue-400 pl-6 py-4 italic text-gray-200" style={{ fontFamily: "'Lora', serif" }}>
            "Where I am, there is Germany." – Thomas Mann
          </div>
  
          <h2 className="text-2xl font-semibold text-white mt-10" style={{ fontFamily: "'Lora', serif" }}>
            About the Thomas Mann House Foundation
          </h2>
  
          <p className="text-gray-300 leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
            The Thomas Mann House (Villa Aurora & Thomas Mann House e.V.) is a residence for gifted thinkers from Germany and the United States. It aims to strengthen democracy by facilitating debate around global challenges such as climate change, social justice, and exile.
          </p>
  
          <p className="text-gray-300" style={{ fontFamily: "'Lora', serif" }}>
            <a
              href="https://www.vatmh.org/en/thomas-mann-house.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-300 hover:text-blue-200"
            >
              Visit the Thomas Mann House Foundation website
            </a>
          </p>
  
          <div className="bg-white/10 border-l-4 border-blue-400 pl-6 py-4 italic text-gray-200" style={{ fontFamily: "'Lora', serif" }}>
            “Democracy must be our cause, not merely our form of government.” – TMH Resident
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
      </div>
    );
  }  