const Expertise = () => {
    const expertiseList = [
      { title: "Empowerment Coaching", icon: "🌟", description: "Helping women find their inner strength and confidence." },
      { title: "Work-Life Balance", icon: "⚖️", description: "Strategies to harmonize career and personal life." },
      { title: "Stress Management", icon: "🧘", description: "Techniques to reduce stress and improve mental well-being." },
      { title: "Leadership Development", icon: "🌱", description: "Building leadership skills for professional growth." },
      { title: "Goal Setting", icon: "🎯", description: "Helping you set and achieve meaningful goals." },
    ];
  
    return (
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-900">
            Areas of Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {expertiseList.map((item, index) => (
              <div
                key={index}
                className="bg-white transition-all duration-300 ease-in-out transform shadow-md hover:scale-105 hover:shadow-xl rounded-lg p-6 text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-700">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Expertise;
  