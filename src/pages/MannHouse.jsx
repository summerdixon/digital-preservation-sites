import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

export default function MannHouse() {
    const navigate = useNavigate();

    const timelineData = [
      { year: 1875, label: 'Thomas Mann Born' },
      { year: 1929, label: 'Nobel Prize in Literature' },
      { year: 1942, label: 'Moves to the Mann House' },
      { year: 1952, label: 'Returns to Europe' },
      { year: 1955, label: 'Thomas Mann Dies' },
      { year: 2016, label: 'House Purchased by Germany' },
      { year: 2018, label: 'Thomas Mann House Opens' },
    ];
    
    return (

      <div>

      <div className="max-w-7xl mx-auto mt-10 space-y-10 px-4">

            <h1 className="text-2xl md:text-5xl font-semibold text-gray-700 mb-2" style={{ fontFamily: "'DM Mono', monospace" }}> Thomas Mann House </h1>

            <section>

            <h2 
              className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Historic Overview
            </h2>

            <p className="text-gray-700 mb-4" style={{ fontFamily: "'Lora', serif" }}>
            Thomas Mann was the most famous German novelist of the 20th century. He notably earned a Nobel Prize for Literature in 1929 and contributed many essays and speeches to the anti-Nazi movement from his new home in Los Angeles. His writings focus on a wide variety of topics such as classism, capitalism, artistry, and ordinary life. During World War I, his work embodied more political themes as he supported the German war effort, unlike his brother Heinrich. When the Weimar Republic was established in 1919, Mann began to realize the shortcomings of authoritarianism and he shifted his writing accordingly. 
            </p>

            <p className="text-gray-700 mb-4" style={{ fontFamily: "'Lora', serif" }}>
            At the time of the Nazi takeover, he was immersed in writing novels and essays that would subtly or overtly encourage citizens to oppose the Nazi cause. On his many tours throughout Europe, Mann expressed his opposition to Nazism and support of Socialist ideologies. When Hitler was elected Chancellor in 1933, Thomas and Katia Mann decided not to return to Germany for some time and lived temporarily in Switzerland, until a trip to the United States persuaded them to settle down there with their six children. The works Mann produced while living in LA reflect the tensions of the war and his political opinions. The most famous of these, Doctor Faustus, relates music, tragedy, and loss of hope. As World War II came to a close, anti-leftist attitudes in the United States spurred the Manns to return to Switzerland, where Thomas Mann later died in 1955.
            </p>

            </section>

            <section className="my-12">
  {/* Full-Width Timeline Stripe */}
  <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gray-700 py-10 overflow-x-auto">
    
    {/* Unified Container for Title and Timeline */}
    <div className="flex flex-col items-center justify-center w-full">
      
      {/* Title */}
      <h2
        className="text-2xl md:text-2xl font-bold text-white tracking-wide mb-2"
        style={{ fontFamily: "'DM Mono', monospace" }}
      >
        Timeline
      </h2>

      {/* Scrollable Timeline */}
      <div
        className="flex gap-8 px-10 py-2 whitespace-nowrap"
        style={{ fontFamily: "'Lora', serif" }}
      >
        {timelineData.map((event, i) => (
          <div
          key={i}
          className="flex-shrink-0 min-w-[180px] max-w-[240px]
                     flex flex-col items-center justify-center text-center"
        >        
            <div className="text-l font-semibold text-white">{event.year}</div>
            <div className="text-sm text-gray-300 mt-1">{event.label}</div>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>



  
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
            Click on the marked area to view a perspective from the balcony.
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