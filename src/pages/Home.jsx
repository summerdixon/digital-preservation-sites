export default function Home() {
    return (
      <div className="relative min-h-screen bg-gray-100 flex mx-auto justify-center">
        <img
          src="/assets/images/home.jpg"
          alt="Thomas Mann House"
          className="w-full h-auto rounded shadow-lg"
        />
        <h1 className="absolute text-6xl md:text-6xl text-gray-700 mx-auto p-16" style={{ fontFamily: "'DM Mono', monospace" }}>
          Digital Preservation Sites
        </h1>

        {/* Text box halfway down */}
        <div className="absolute top-[12%] bg-white/40 rounded-lg shadow-md px-8 py-6 max-w-2xl text-center" style={{ fontFamily: "'Lora', sans-serif" }}>
            <p className="text-gray-700 text-base md:text-lg">
                Explore LA's historic homes, their architecture, and the lives of their German émigré inhabitants via this interactive virtual exhibit.
            </p>
        </div>

      </div>
    );
  }  