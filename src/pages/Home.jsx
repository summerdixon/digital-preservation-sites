import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      
      {/* Main Content */}
      <main className="relative flex-grow flex justify-center items-center">
        {/* Background Image */}
        <img
          src="/assets/images/home.jpg"
          alt="Thomas Mann House"
          className="w-full h-auto rounded shadow-lg"
        />

        {/* Title */}
        <h1
            className="absolute top-10 w-full text-center text-4xl md:text-6xl text-gray-700 p-4"
            style={{ fontFamily: "'DM Mono', monospace" }}
        >
            Digital Preservation Sites
        </h1>

        {/* Text box */}
        <div
          className="absolute top-[12%] bg-white/40 rounded-lg shadow-md px-8 py-6 max-w-2xl text-center"
          style={{ fontFamily: "'Lora', serif" }}
        >
          <p className="text-gray-700 text-base md:text-lg">
            Explore LA's historic homes, their architecture, and the lives of their German émigré inhabitants via this interactive virtual exhibit.
          </p>
        </div>

        <div
          className="absolute top-[65%] bg-gray-700/60 rounded-lg shadow-md px-8 py-6 max-w-5xl text-center"
          style={{ fontFamily: "'Lora', serif" }}
        >
          <p className="text-white text-base md:text-m">
          Preservation sites serve as immersive archives to physically memorialize the history of a space and its inhabitants. Serving as the heart of the entertainment industry and boasting a diverse, multicultural heritage, it is not surprising that Los Angeles contains many historically significant residences. These sites honor the contributions of famous writers, architects, Hollywood figures, political leaders, and wealthy industrialists. In particular, German exiles such as Thomas Mann, Lion Feuchtwanger, Arnold Schoenberg, Galka Scheyer, and many more immigrated to Los Angeles upon the outbreak of World War II as it offered the opportunity to establish a new creative culture and connect with fellow refugees in the area. This project explores how digital storytelling and interactivity can be used to illuminate exile narratives, specifically through the recreation and interpretation of the domestic spaces of Thomas Mann and Galka Scheyer.
          </p>
        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
