import Image from 'next/image';

const ContactInformation = () => {
  return (
    <section className="py-16 mb-8">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#065a60]">
            Contact <span className="text-blue-950">Information</span>
          </h2>
          <p className="mt-4 text-md sm:text-xl text-[#2E2E2E]">
            Feel free to reach out for any inquiries or to book a session.
          </p>
        </div>

        <div className="bg-[#F0BB78] shadow-[#543A14] shadow-lg rounded-lg p-8 text-[2E2E2E]">
          <div className="grid grid-cols-1 gap-8">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
              <Image src="/images/gmail.png" alt="gmail" width={40} height={40}/>
                <p className='text-xl'><strong>Email:</strong></p>
                <p className="text-emerald-950 text-lg underline italic">{process.env.NEXT_PUBLIC_EMAIL_URL}</p>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="text-center">
                <p className="text-xl font-bold text-[#2E2E2E] mb-6">
                  Connect with me on social media:
                </p>
                <div className="flex space-x-6 justify-center">
                  <span className="text-pink-700 hover:text-pink-500">
                    <a href={process.env.NEXT_PUBLIC_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"><Image src="/images/instagram.png" alt="instagram" width={40} height={40} className='shadow-md shadow-black rounded-full'/></a>
                  </span>
                  <span className="text-blue-800 hover:text-blue-600">
                    <a href={process.env.NEXT_PUBLIC_FACEBOOK_URL} target="_blank" rel="noopener noreferrer"><Image src="/images/facebook.png" alt="facebook" width={40} height={40} className='shadow-md shadow-black rounded-full'/></a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
