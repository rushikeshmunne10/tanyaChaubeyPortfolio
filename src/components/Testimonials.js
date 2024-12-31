const Testimonials = () => {
    const testimonialsList = [
      {
        name: "Sarah M.",
        text: "Before I met Tanya, I felt like I was drowning in self-doubt, toxic work culture, and a relationship that was eroding my spirit. Anxiety became my shadow, and medication felt like my only escape. But then I stumbled upon Tanya’s profile during one of my endless anxiety-filled scrolling sessions. Her calm presence and empowering words felt like a lifeline. Over three months, her guidance helped me untangle my chaotic thoughts and see a path forward. I finally left my toxic environment, pursued a career that aligns with my passion, stopped relying on anxiety medication, and found the courage to set boundaries in relationships. Tanya didn’t just coach me—she believed in me when I couldn’t believe in myself. For that, I will always be grateful.",
      },
      {
        name: "Priya K.",
        text: "When I look back at the version of me who first met Tanya, I see someone lost, exhausted, and burdened by anxiety. I was stuck in a cycle of a draining job, an unhealthy relationship, and constant self-doubt. Tanya became my light in that darkness. Her ability to listen without judgment and guide me with such clarity felt like magic. In just three months, I made changes I never thought possible—I left my toxic job, prioritized my mental health, stopped relying on medication, and, most importantly, found my inner strength. Tanya wasn’t just my coach; she was my anchor. I can’t thank her enough for helping me rewrite my story.",
      },
      {
        name: "Ananya R.",
        text: "Tanya’s guidance came into my life at a time when I was battling relentless anxiety, stuck in a job that drained me, and trapped in an emotionally exhausting relationship. From our very first conversation, Tanya’s warmth and honesty made me feel seen and heard. Her support over those three months gave me the strength to leave behind what no longer served me and build a life aligned with my values. Today, I stand medication-free, pursuing meaningful work, and surrounded by people who uplift me. Tanya isn’t just a life coach; she’s a mentor, a guide, and a true inspiration. I’m endlessly grateful for her presence in my life.",
      },
      {
        name: "Lisa T.",
        text: "I still remember the evening I stumbled upon Tanya’s page during one of my lowest moments. I was battling severe anxiety, stuck in a draining job, and entangled in a toxic relationship. Tanya’s approach was unlike anything I had experienced before—her patience, her wisdom, and her willingness to share her own journey made me feel safe and understood. With her guidance over three transformative months, I gained the courage to leave toxic spaces, stop depending on medication, and step into a version of myself I’m proud of. Tanya didn’t just offer tools for transformation; she offered unwavering belief in my potential. I’ll always carry her lessons with me.",
      },
    ];
  
    return (
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-blue-900">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {testimonialsList.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white transition-all duration-300 ease-in-out transform shadow-md hover:scale-105 hover:shadow-xl rounded-lg p-6 text-justify"
              >
                <p className="italic text-gray-600">"{testimonial.text}"</p>
                <p className="text-right font-semibold text-blue-700 mt-4">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  