import Image from 'next/image';

const About = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">

                <div className="bg-[#F0BB78] shadow-[#543A14] shadow-lg rounded-lg text-[#2E2E2E] p-8">
                    <div className="flex flex-col lg:flex-row items-center gap-8">

                        <div className="overflow-hidden shadow-md mb-6 md:mb-0">
                            <Image
                                src="/images/tanya-new02.jpg"
                                alt="Tanya Chaubey"
                                width={300}
                                height={300}
                                quality={75}
                                loading="lazy"
                                className="object-cover object-center w-full h-full rounded-md"
                            />
                        </div>

                        <div className="flex-1 text-justify">
                            <p className=" text-md sm:text-lg leading-relaxed mb-6">
                                My journey into life coaching wasn&lsquo;t planned, but it was destined. I spent years climbing the corporate ladder, ticking off every box society deemed as &rsquo;success.&lsquo; But behind closed doors, I was battling an overwhelming sense of emptiness. A turbulent relationship, long hours at work, and a constant sense of burnout had me questioning everything. It felt like my world was falling apart.
                            </p>
                            <p className=" text-md sm:text-lg leading-relaxed mb-6">
                                When life hit rock bottom in relationships and marriage, everything was completely shattered. In those darkest moments, I made a decision—to pause, to breathe, and to rediscover myself. I packed my bags and started traveling. I read countless books, immersed myself in learning about numerology and astrology, and rediscovered every aspect of life. With every new destination, every sunset, and every conversation with strangers, I began to heal. I reconnected with my passions, rebuilt my confidence, and most importantly, found clarity.
                            </p>
                            <p className="text-md sm:text-lg leading-relaxed mb-6">
                                That clarity led me here—to a purpose bigger than myself. I realized I wasn&lsquo;t alone in this struggle. So many women juggle careers, relationships, family, and expectations, all while neglecting their own well-being. I knew I had to step in, share my story, and guide others on their path to self-discovery.
                            </p>
                            <p className=" text-md sm:text-lg leading-relaxed mb-6">
                                Today, as a certified life coach, I work with women who are ready to reclaim their power, set meaningful goals, and create a life they truly love. My coaching isn&lsquo;t about quick fixes—it&lsquo;s about transformation, one intentional step at a time.
                            </p>
                            <p className=" text-md sm:text-lg leading-relaxed mb-6">
                                If you&lsquo;re feeling lost, stuck, or simply ready for change, know this—you&lsquo;re not alone, and your journey towards a balanced, empowered, and fulfilling life starts here.
                            </p>
                            <p className="mt-6 text-lg font-bold text-[#3D4A3A]">
                                Let&lsquo;s take that first step together.
                            </p>
                            <p className="font-bold text-lg text-[#3D4A3A]">
                                Your journey. Your story. Your transformation.
                            </p>
                            <p className="italic text-[#5A3A1E] mt-2 text-right">— Tanya Chaubey</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
