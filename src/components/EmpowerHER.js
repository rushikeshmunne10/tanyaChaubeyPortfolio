import { motion } from "framer-motion";
import { FaLeaf, FaPhoneAlt, FaChartLine, FaCheckCircle } from "react-icons/fa";

const EmpowerHER = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-rose-100 via-pink-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          Introducing:{" "}
          <span className="text-pink-600">The EmpowerHER Blueprint</span>
        </motion.h2>
        <motion.p
          className="text-xl text-gray-700 text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Your Roadmap to Inner Peace, Purpose, and Prosperity
        </motion.p>

        {/* Program Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Program Overview
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <FaLeaf className="text-pink-600 text-xl" />
                <p className="text-gray-700">
                  <span className="font-bold">Spiritual Healing Session:</span>{" "}
                  Recharge and realign your inner energy to achieve emotional
                  balance.
                </p>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-pink-600 text-xl" />
                <p className="text-gray-700">
                  <span className="font-bold">Bi-Weekly Counseling Calls:</span>{" "}
                  Personalized guidance to track your progress and tackle
                  challenges.
                </p>
              </li>
              <li className="flex items-center space-x-3">
                <FaChartLine className="text-pink-600 text-xl" />
                <p className="text-gray-700">
                  <span className="font-bold">
                    Custom Plan for Achieving Results:
                  </span>{" "}
                  A step-by-step strategy to help you reach your desired goals
                  efficiently.
                </p>
              </li>
            </ul>
          </motion.div>

          {/* Right Content - Graphics */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="rounded-lg shadow-lg bg-white/50 backdrop-blur-md p-6">
              <h4 className="text-lg font-bold text-gray-700 mb-2 text-center">
                Join now to experience true transformation!
              </h4>
              <motion.img
                src="/images/program-image.jpg"
                alt="EmpowerHER Blueprint"
                className="w-full rounded-lg"
                whileHover={{ scale: 1.05 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Performance Benefits
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Experience holistic counseling for mind, body, and soul alignment.",
              "Gain clarity and strengthen relationships within just 90 days.",
              "Transform into a better version of yourself while improving personal and professional dynamics.",
              "Master mindset training to overcome anxiety and maintain positivity.",
              "Benefit from a realistic, actionable approach that delivers measurable results.",
              "Enjoy 3 free follow-up sessions within six months of program completion.",
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/30 backdrop-blur-md rounded-lg p-4 shadow-md flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
              >
                <FaCheckCircle className="text-green-500 text-2xl" />
                <p className="text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmpowerHER;
