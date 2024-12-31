import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaEnvelope, FaXTwitter } from 'react-icons/fa6';

const ContactInformation = () => {
  return (
    <section className="py-16 mb-8">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Contact <span className="text-blue-900">Information</span>
          </h2>
          <p className="mt-4 text-md sm:text-lg text-gray-600">
            Feel free to reach out for any inquiries or to book a session.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="grid grid-cols-1 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4 justify-center">
                <FaEnvelope size={30} className="text-zinc-700 hover:text-zinc-500" />
                <p className='text-lg'><strong>Email:</strong></p>
                <p className="text-gray-700 text-lg underline">{process.env.NEXT_PUBLIC_EMAIL_URL}</p>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="text-center">
                <p className="text-2xl text-gray-700 mb-6">
                  Connect with me on social media:
                </p>
                <div className="flex space-x-6 justify-center">
                  <span className="text-blue-800 hover:text-blue-600">
                    <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL} target="_blank" rel="noopener noreferrer"><FaLinkedin size={35} /></a>
                  </span>
                  <span className="text-black hover:text-gray-700">
                    <a href={process.env.NEXT_PUBLIC_TWITTER_URL} target="_blank" rel="noopener noreferrer"><FaXTwitter size={35} /></a>
                  </span>
                  <span className="text-pink-700 hover:text-pink-500">
                    <a href={process.env.NEXT_PUBLIC_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"><FaInstagram size={35} /></a>
                  </span>
                  <span className="text-blue-800 hover:text-blue-600">
                    <a href={process.env.NEXT_PUBLIC_FACEBOOK_URL} target="_blank" rel="noopener noreferrer"><FaFacebook size={35} /></a>
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
