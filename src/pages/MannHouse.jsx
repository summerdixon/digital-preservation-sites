import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

export default function MannHouse() {
    const navigate = useNavigate();
    
    return (

      <div>

      <div className="max-w-7xl mx-auto mt-10 space-y-20 px-4">

            <h1 className="text-2xl md:text-5xl font-semibold text-gray-700 mb-2" style={{ fontFamily: "'DM Mono', monospace" }}> Thomas Mann House </h1>
  
        {/* FIRST FLOOR SECTION */}
        <section>
          <h2
            className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            First Floor — Interactive Map
          </h2>
          <p className="text-gray-700 mb-4" style={{ fontFamily: "'Lora', serif" }}>
            Click on highlighted rooms to explore their function and history.
          </p>
  
          <div className="relative">
            <img
              src="/assets/images/tmh_first_floor.jpg"
              alt="Thomas Mann House First Floor Floorplan"
              className="w-full h-auto border rounded shadow-lg"
            />
  
            {/* Hotspot: Study */}
            <button
              className="absolute left-[80%] top-[64%] w-24 h-16 bg-gray-500/30 rounded-md hover:bg-gray-600/50 transition"
              title="Enter the Study"
              onClick={() => navigate('/study')}
            > 
              <span className="sr-only">Enter the Study</span>
            </button>
  
            {/* Hotspot: Living Room */}
            <button
              className="absolute left-[66%] top-[36%] w-36 h-20 bg-gray-500/30 rounded-md hover:bg-gray-600/50 transition"
              title="Enter the Living Room"
              onClick={() => navigate('/livingroom')}
            >
              <span className="sr-only">Enter the Living Room</span>
            </button>
          </div>
        </section>
  
        {/* SECOND FLOOR SECTION */}
        <section>
          <h2
            className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Second Floor — Interactive Map
          </h2>
          <p className="text-gray-700 mb-4" style={{ fontFamily: "'Lora', serif" }}>
            Click on marked areas to view specific perspectives or details.
          </p>
  
          {/* Make this relative too so hotspot works */}
          <div className="relative">
            <img
              src="/assets/images/tmh_second_floor.jpg"
              alt="Thomas Mann House Second Floor Floorplan"
              className="w-full h-auto border rounded shadow-lg"
            />
  
            {/* Hotspot: Balcony */}
            <button
              className="absolute left-[42.25%] top-[56.5%] w-36 h-12 bg-gray-500/30 rounded-md hover:bg-gray-600/50 transition"
              title="See the view off the balcony"
              onClick={() => navigate('/balcony')}
            >
              <span className="sr-only">See the view off the balcony</span>
            </button>
          </div>
        </section>
      </div>

      <div className="p-6"></div>

      {/* Footer */}
      <Footer />

      </div>
    );
  }  