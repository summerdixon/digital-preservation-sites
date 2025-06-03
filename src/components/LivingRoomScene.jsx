import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

export default function LivingRoomPage() {
    const navigate = useNavigate();

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
          <div className="absolute inset-0 bg-gray-900/50" />
          <div className="absolute inset-0 pointer-events-none" />
        </div>
  
        {/* Main content */}
        <div className="relative z-10 px-6 py-10 max-w-4xl mx-auto space-y-10">
          <h1 className="text-3xl md:text-4xl font-semibold text-white" style={{ fontFamily: "'DM Mono', monospace" }}>
            Preservation of the Thomas Mann House
          </h1>
  
          <p className="text-gray-200 text-m leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
            We have explored the past history of the Thomas Mann house in other aspects of this site, but it is also important to discuss how the present ownership and usage of this space came to be. 
          </p>
  
          <p className="text-gray-200 text-m leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
            The Mann residence, located at 1550 San Remo Drive, was placed on the market in 1953 following the Manns’ departure from the United States, and a lawyer named Chester Lappen bought it from Mann for $50,000. In 2016, the house was placed on the market again, this time advertised as a tear-down.
          </p>

          <p className="text-gray-200 text-m leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
            Recognizing the historical importance of the house as a symbol of refuge during World War II and the home of a Nobel laureate, the German government purchased the house and funds a residency program to allow intellectuals to stay at the house and facilitate a cross-cultural exchange of ideas.
          </p>

          <p className="text-gray-300 leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
          Currently, the Thomas Mann House hosts various events such as lectures, concerts, and residency presentations. Commemorative events like “100 Years of The Magic Mountain” and “Faustus Revisited” took place in this living room, enabling the house to continue serving its purpose as a place for thinkers to confront social challenges and blending the personal with the political. blending the personal with the political.
It also offers educational programs such as “The Art of Living Together – Democracy & Solidarity,” and creates a podcast called “55 Voices for Democracy.” You can learn more about these programs at the link below.

          </p>
  
          <div className="bg-white/10 border-l-4 border-blue-400 pl-6 py-4 italic text-gray-200" style={{ fontFamily: "'Lora', serif" }}>
            <a
              href="https://www.vatmh.org/en/thomas-mann-house.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-300 hover:text-blue-200"
            >
              Visit the Thomas Mann House Foundation Website
            </a>
          </div>

            <div className="flex flex-col items-center">
                <button
                    className="w-72 h-16 bg-white rounded-2xl hover:bg-gray-200 transition text-gray-700" style={{ fontFamily: "'DM Mono', monospace" }}
                    title="Return to the floor plan"
                    onClick={() => navigate('/mann')}
                >
                    Return to the Floor Plan
                </button>
            </div>
  
        </div>
      </div>
      {/* Footer */}
      <Footer />
      </div>
    );
  }  