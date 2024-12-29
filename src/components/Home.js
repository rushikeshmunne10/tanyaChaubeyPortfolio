import Image from 'next/image';

const Home = () => {
    return (
        <div className="flex items-center justify-center h-screen w-full px-8">
            <div className="flex flex-col-reverse md:flex-row items-center bg-white shadow-xl rounded-lg p-8 max-w-6xl">
                {/* Text Content */}
                <div className="flex-1">
                    <blockquote className="text-lg sm:text-2xl italic text-gray-700 mb-4 text-center md:text-left">
                        "Hi, I&lsquo;m <b className='text-pink-700'>Tanya Chaubey</b>, a Life Coach dedicated to helping women find balance, empowerment, and harmony in every facet of their lives—both personal and professional."
                    </blockquote>
                </div>
                {/* Client Photo */}
                <div className="w-60 h-60 overflow-hidden rounded-full shadow-md mb-4 md:mb-0 md:mr-6">
                    <Image
                        src="/images/tanya-photo.jpg" // Replace with the actual photo path
                        alt="Tanya Chaubey in a white and blue dress"
                        width={250}
                        height={250}
                        className="object-cover object-center w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;