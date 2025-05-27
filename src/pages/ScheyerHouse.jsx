import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

export default function ScheyerHouse() {
    const navigate = useNavigate();
    
    return (

      <div>

      <div className="max-w-7xl mx-auto mt-10 space-y-20 px-4">

            <h1 className="text-2xl md:text-5xl font-semibold text-gray-700 mb-2" style={{ fontFamily: "'DM Mono', monospace" }}> Galka Scheyer House </h1>
  
        {/*  IMAGE */}
        <section>
          <h2
            className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Perspective Study by Richard Neutra
          </h2>
          <p className="text-gray-700 mb-4" style={{ fontFamily: "'Lora', serif" }}>
           text describing this
          </p>
  
          <div className="w-1/2 mx-auto">
            <img
              src="/assets/images/scheyer_drawing.jpg"
              alt="Galka Scheyer House, Los Angeles, California, Perspective Study by Richard Neutra"
              className="w-full h-auto border rounded shadow-lg"
            />
          </div>
        </section>
  
      </div>

      <div className="p-6"></div>

      {/* Footer */}
      <Footer />

      </div>
    );
  }