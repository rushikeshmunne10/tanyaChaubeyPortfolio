import Image from "next/image";

const Program = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#065a60] leading-tight">
            Introducing: <span className="text-pink-700">The EmpowerHER Blueprint</span>
          </h2>
          <p className="mt-4 text-lg md:text-2xl font-medium text-[#2E2E2E]">
            Your Roadmap to Inner Peace, Purpose, and Prosperity
          </p>
        </div>

        <div className="bg-[#F0BB78] shadow-[#543A14] shadow-lg rounded-lg p-8 md:p-12 flex flex-col-reverse lg:flex-row gap-8 items-center text-justify">
          <div className="flex-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 md:mb-12">Program Overview</h3>
            <p className="text-[#2E2E2E] leading-relaxed mb-6">
              The EmpowerHER Blueprint is a thoughtfully designed counseling program tailored to meet the unique needs of ambitious women who want to conquer anxiety and thrive in all areas of life.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-pink-600 text-2xl"><Image src="/images/praying.png" alt="benefits" width={50} height={50} quality={75} loading="lazy" className="w-32 sm:w-24 md:w-16"/></span>
                <p className="text-[#2E2E2E]">
                  <strong>Spiritual Healing Session:</strong> Recharge and realign your inner energy to achieve emotional balance.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-pink-600 text-2xl"><Image src="/images/online-appointment.png" alt="benefits" width={50} height={50} quality={75} loading="lazy" className="w-32 sm:w-24 md:w-16 "/></span>
                <p className="text-[#2E2E2E]">
                  <strong>Bi-Weekly Counseling Calls:</strong> Personalized guidance to track your progress and tackle challenges.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-pink-600 text-2xl"><Image src="/images/planning.png" alt="benefits" width={50} height={50} quality={75} loading="lazy" className="w-32 sm:w-24 md:w-16 "/></span>
                <p className="text-[#2E2E2E]">
                  <strong>Custom Plan for Achieving Results:</strong> A step-by-step strategy to help you reach your desired goals efficiently.
                </p>
              </li>
            </ul>
          </div>

          <div className="w-auto">
            <Image
              src="/images/program-2.jpg"
              alt="EmpowerHer Program"
              className="rounded-lg shadow-lg"
              width={500}
              height={300}
            />
          </div>
        </div>

        {/* Performance Benefits */}
        <div className="mt-12 bg-[#F0BB78] shadow-[#543A14] shadow-lg rounded-lg p-8 md:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-wide text-[#2E2E2E] mb-6 text-center">
            Performance Benefits
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
            {[
              "Experience holistic counseling for mind, body, and soul alignment.",
              "Gain clarity and strengthen relationships within just 90 days.",
              "Transform into a better version of yourself while improving personal and professional dynamics.",
              "Master mindset training that equips you with tools to overcome anxiety and maintain positivity.",
              "Benefit from a realistic, actionable approach that delivers measurable results.",
              "Enjoy 3 free follow-up sessions within six months of program completion for continued guidance.",
            ].map((benefit, index) => (
              <li key={index} className="flex items-center gap-4">
                <span className="text-2xl">
                  <Image src="/images/authenticity.png" alt="benefits" width={40} height={40} className="w-32 sm:w-24 md:w-16 "/>
                </span>
                <p className="text-gray-700">{benefit}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Program;
