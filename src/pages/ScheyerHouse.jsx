import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

export default function ScheyerHouse() {
    const navigate = useNavigate();

    return (
      <div>
        <div className="max-w-7xl mx-auto mt-10 space-y-10 px-4">
          <h1 className="text-2xl md:text-5xl font-semibold text-gray-700 mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>
            Galka Scheyer House
          </h1>

          <section>
            <h2 
              className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Historic Overview
            </h2>

            <p className="text-gray-700 mb-4" style={{ fontFamily: "'Lora', serif" }}>
              Galka Scheyer was a famous German artist, collector, and dealer. She played a large role in popularizing the group of artists known as the “Blue Four,” consisting of Lyonel Feininger, Alexei Jawlensky, Vassily Kandinsky, and Paul Klee, in the United States.
            </p>

            <p className="text-gray-700 mb-4" style={{ fontFamily: "'Lora', serif" }}>
            She first met Jawlensky while traveling in Switzerland and subsequently visited the Bauhaus in Weimar where she was introduced to Feininger, Kandinksy, and Klee.
            </p>

            <p className="text-gray-700 mb-4" style={{ fontFamily: "'Lora', serif" }}>
            Giving them their signature nickname, she took up her role as the group’s legal representative and went about promoting their work in the states at various galleries and exhibitions. She moved out west and settled in Los Angeles after forming a vast professional network, and in 1933, she commisioned Neutra to design her home in which she could display her art and host gatherings. 
            </p>

            <p className="text-gray-700 mb-4" style={{ fontFamily: "'Lora', serif" }}>
            In 1953 after her death, Scheyer’s collection was sent to the Norton Simon Museum in Pasadena, where it resides today.
            </p>

          </section>


          {/* DRAWING */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>
              Perspective Study by Richard Neutra, 1933
            </h2>

            <p className="text-gray-700 mb-4" style={{ fontFamily: "'Lora', serif" }}>
              In 1925, Scheyer met Neutra and Schindler in Los Angeles and was impressed by their work. After the Neutras left the Schindler House, located on King’s Road, Scheyer temporarily stayed there until her affair with Schindler dissolved. In 1933, she hired Neutra instead of Schindler to be the architect of her home. 
            </p>

            <p className="text-gray-700 mb-4" style={{ fontFamily: "'Lora', serif" }}>
              As seen in the perspective drawing, this Neutra home embodies characteristics typical of the International Style, with clean lines, steel framing, and no shortage of windows. The house resides at the top of a ridge in the Hollywood Hills on Blue Heights Drive, which Scheyer named herself.
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
              Although Schindler was not involved in the construction of the Scheyer House, he created this blueprint illustrating the small but intentional footprint of the house. There was a designated gallery space for her to display the works she had collected, and several outdoor spaces to enable the mixing of indoor-outdoor living prized by proponents of modernism and residents of Southern California. Later, a second story was added by Gregory Ain as Scheyer was obsessed with the idea of inviting her Blue Four members to stay there. 
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
              Galka Scheyer was the representative of the Blue Four (Feininger, Kandinsky, Klee, and Jawlensky) and exhibited their work in a dedicated space in her home. Step into a digital interpretation of that room, containing works from the Blue Four.
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