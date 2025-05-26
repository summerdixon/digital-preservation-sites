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
          style={{ fontFamily: "'Lora', sans-serif" }}
        >
          <p className="text-gray-700 text-base md:text-lg">
            Explore LA's historic homes, their architecture, and the lives of their German émigré inhabitants via this interactive virtual exhibit.
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
