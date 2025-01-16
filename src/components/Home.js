import Image from 'next/image';

const Home = () => {
    return (
        <div className='h-screen w-full mt-16 py-8 mb-16'>
            <div className="max-w-7xl mx-auto px-4 text-center mb-8">
                <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-[#065a60] mb-4">
                    <div className="typing-text-one">
                        Anxiety Doesn’t Define You — Let’s Rewrite Your Story Together...
                    </div>
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-[#8E244D]">
                    <span className="typing-text-two">
                        Break Free from Anxiety and Create the Life You Deserve...
                    </span>
                </h2>
            </div>
            <div className="flex items-center justify-center px-8 pt-2 sm:pt-12">
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
