import Image from "next/image";

const Program = () => {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
              Introducing: <span className="text-pink-600">The EmpowerHER Blueprint</span>
            </h2>
            <p className="mt-4 text-xl md:text-2xl font-medium text-gray-600">
              Your Roadmap to Inner Peace, Purpose, and Prosperity
            </p>
          </div>
  
          <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center text-justify">
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Program Overview</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                The EmpowerHER Blueprint is a thoughtfully designed counseling program tailored to meet the unique needs of ambitious women who want to conquer anxiety and thrive in all areas of life.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="text-pink-600 text-2xl">💖</span>
                  <p className="text-gray-700">
                    <strong>Spiritual Healing Session:</strong> Recharge and realign your inner energy to achieve emotional balance.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-pink-600 text-2xl">📞</span>
                  <p className="text-gray-700">
                    <strong>Bi-Weekly Counseling Calls:</strong> Personalized guidance to track your progress and tackle challenges.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-pink-600 text-2xl">📋</span>
                  <p className="text-gray-700">
                    <strong>Custom Plan for Achieving Results:</strong> A step-by-step strategy to help you reach your desired goals efficiently.
                  </p>
                </li>
              </ul>
            </div>
  
            <div className="w-auto">
                <Image
                  src="/images/tanya-photo-2.jpg"
                  alt="Tanya Choubey"
                  className="rounded-lg shadow-lg"
                  width={300}
                  height={300}
                />
            </div>
          </div>
  
          {/* Performance Benefits */}
          <div className="mt-12 bg-pink-50 p-8 md:p-12 rounded-2xl shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
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
                <li key={index} className="flex items-start gap-4">
                  <span className="text-green-500 text-2xl">✅</span>
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
  