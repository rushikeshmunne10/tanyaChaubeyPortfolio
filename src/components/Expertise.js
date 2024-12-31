const Expertise = () => {
  const expertiseList = [
    {
      title: "Anxiety Issues",
      icon: "😟",
      description: "Guiding you to manage and reduce anxiety through proven techniques for a calmer, more focused mind.",
    },
    {
      title: "Stress Management",
      icon: "🧘",
      description: "Helping you identify stress triggers and develop strategies to regain control and inner peace.",
    },
    {
      title: "Creating Work-Life Balance",
      icon: "⚖️",
      description: "Empowering you to set boundaries, prioritize effectively, and find harmony between professional and personal life.",
    },
    {
      title: "Confidence Building",
      icon: "💪",
      description: "Unlocking your potential by boosting self-esteem, assertiveness, and a positive self-image.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-900">
          Areas of Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
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
