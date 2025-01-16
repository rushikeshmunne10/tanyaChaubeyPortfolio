import Image from 'next/image';
import TypingEffect from './TypingEffect';

const Home = () => {
    return (
        <div className='h-screen w-full mt-8'>
            <div className="typing-effect hidden md:block">
                <TypingEffect />
            </div>
            <div className="flex items-center justify-center px-8 pt-12 md:pt-0">
                <div className="flex flex-col-reverse md:flex-row items-center bg-[#F0BB78] shadow-[#543A14] shadow-lg rounded-lg p-8 max-w-6xl">
                    {/* Text Content */}
                    <div className="flex-1">
                        <blockquote className="text-lg sm:text-2xl italic text-[#2E2E2E] mb-4 text-center md:text-left">
                            "Hi, I&lsquo;m <b className='text-[#8E244D]'>Tanya Chaubey</b>, a Life Coach dedicated to helping women find balance, empowerment, and harmony in every facet of their lives—both personal and professional."
                        </blockquote>
                    </div>
                    {/* Client Photo */}
                    <div className="w-64 h-64 overflow-hidden rounded-full shadow-md mb-4 md:mb-0 md:mr-6">
                        <Image
                            src="/images/tanya-new.jpg" // Replace with the actual photo path
                            alt="Tanya Chaubey in a white and blue dress"
                            width={250}
                            height={250}
                            className="object-cover object-center w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
