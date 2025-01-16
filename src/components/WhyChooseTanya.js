import Image from "next/image";

const WhyChooseTanya = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#065a60]">
            Why Choose <span className="text-blue-950">Tanya Choubey?</span>
          </h2>
          <p className="mt-4 text-md md:text-xl text-[#2E2E2E]">
            Dedicated to empowering women to take charge of their lives and embrace holistic growth.
          </p>
        </div>

        <div className="bg-[#F0BB78] shadow-[#543A14] shadow-lg rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">

            <div className="w-auto">
                <Image
                  src="/images/tanya-photo.jpg"
                  alt="Tanya Choubey"
                  className="rounded-lg shadow-lg"
                  width={250}
                  height={250}
                />
            </div>


            <div className="flex-1 text-justify">
              <p className="text-[#2E2E2E] text-md sm:text-lg leading-relaxed mb-6">
                With years of expertise and a deep understanding of the challenges women face in high-pressure environments, I&apos;m here to empower you to take charge of your life. Whether it's healing emotional wounds, building confidence, or redefining your life goals, I&apos;ll walk this journey with you every step of the way.
              </p>
              <p className="text-[#2E2E2E] text-md sm:text-lg leading-relaxed mb-8">
                Your growth matters, and so does your peace of mind. Together, we&apos;ll build a brighter and more fulfilling future tailored just for you.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <Image src="/images/star.png" alt="key points" width={25} height={25}/>
                  <p className="text-[#2E2E2E] font-bold">
                    Proven track record of helping clients achieve emotional balance and clarity.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                <Image src="/images/star.png" alt="key points" width={25} height={25}/>
                  <p className="text-[#2E2E2E] font-bold">
                    Holistic approach tailored to individual needs for personal and professional growth.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                <Image src="/images/star.png" alt="key points" width={25} height={25}/>
                  <p className="text-[#2E2E2E] font-bold">
                    Deep understanding of challenges faced by women in high-pressure environments.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTanya;
