import Image from "next/image";

const Expertise = () => {
  const expertiseList = [
    {
      title: "Anxiety Issues",
      icon: "/images/anxiety.png",
      description: "Guiding you to manage and reduce anxiety through proven techniques for a calmer, more focused mind.",
    },
    {
      title: "Stress Management",
      icon: "/images/stress-management.png",
      description: "Helping you identify stress triggers and develop strategies to regain control and inner peace.",
    },
    {
      title: "Creating Work-Life Balance",
      icon: "/images/work-life.png",
      description: "Empowering you to set boundaries, prioritize effectively, and find harmony between professional and personal life.",
    },
    {
      title: "Confidence Building",
      icon: "/images/power.png",
      description: "Unlocking your potential by boosting self-esteem, assertiveness, and a positive self-image.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8 text-[#065a60]">
          Areas of Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {expertiseList.map((item, index) => (
            <div
              key={index}
              className="bg-[#F0BB78] shadow-[#543A14] transition-all duration-300 ease-in-out transform shadow-md hover:scale-105 hover:shadow-xl rounded-lg p-6 text-center"
            >
              <div className="flex justify-center items-center text-4xl mb-4">
                <Image src={item.icon} alt="expertise" width={100} height={100}/>
              </div>
              <h3 className="text-2xl font-semibold text-[#272640]">{item.title}</h3>
              <p className="text-[#2E2E2E] mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
