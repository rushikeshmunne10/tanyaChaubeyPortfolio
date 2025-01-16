import Image from 'next/image';

const ServicesOffered = () => {
  const servicesList = [
    {
      title: "Anxiety Healing",
      icon: "/images/stress-management.png", 
      description: "Guiding you to overcome anxiety through calming techniques and therapeutic practices.",
    },
    {
      title: "Mindset Remapping through NLP",
      icon: "/images/mindset.png", 
      description: "Helping you reshape your thought patterns to unlock personal growth using NLP techniques.",
    },
    {
      title: "Relationship Counseling",
      icon: "/images/counseling.png",
      description: "Empowering individuals and couples to build healthy and fulfilling relationships.",
    },
    {
      title: "Spiritual Healing",
      icon: "/images/spiritual-growth.png", // Replace with appropriate SVG path
      description: "Offering guidance to reconnect with your inner self and achieve spiritual balance.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-950">
          Services Offered
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="bg-[#F0BB78] shadow-[#543A14] shadow-lg rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl p-6 text-center"
            >
              <div className="flex justify-center items-center text-4xl mb-2">
                <Image src={service.icon} alt={service.title} width={150} height={100} quality={75} loading="lazy"/>
              </div>
              <h3 className="text-2xl font-bold text-[#272640]">
                {service.title}
              </h3>
              <p className="text-[#2E2E2E] mt-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOffered;
