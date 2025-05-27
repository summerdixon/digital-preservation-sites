import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

export default function ScheyerHouse() {
    const navigate = useNavigate();

    return (
      <div>
        <div className="max-w-7xl mx-auto mt-10 space-y-20 px-4">
          <h1 className="text-2xl md:text-5xl font-semibold text-gray-700 mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>
            Galka Scheyer House
          </h1>

          {/* DRAWING */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>
              Perspective Study by Richard Neutra, 1933
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

          {/* BLUEPRINT */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>
              Blueprint of the Scheyer House by Rudolph Schindler, 1928
            </h2>
            <p className="text-gray-700 mb-4" style={{ fontFamily: "'Lora', serif" }}>
              text describing this
            </p>

            <div className="w-1/2 mx-auto">
              <img
                src="/assets/images/scheyer_blueprint.png"
                alt="Schindler Blueprint of the Scheyer House"
                className="w-full h-auto border rounded shadow-lg"
              />
            </div>
          </section>

          {/* BLUE FOUR ROOM EXPERIENCE */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>
              Experience the Blue Four Room
            </h2>
            <p className="text-gray-700 mb-4" style={{ fontFamily: "'Lora', serif" }}>
              Galka Scheyer was the representative of the Blue Four — Feininger, Kandinsky, Klee, and Jawlensky — and exhibited their work in a dedicated space in her home. Step into a digital interpretation of that room, surrounded by works from the Blue Four.
            </p>

            <div className="text-center">
              <button
                onClick={() => navigate('/bluefour')}
                className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Enter the Blue Four Room
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