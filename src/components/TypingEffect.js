import Image from 'next/image';

const TypingEffect = () => {
  return (
    <section className="relative py-16 text-center mb-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* First Typing Text */}
        <h1 className="text-4xl font-extrabold text-[#065a60] mb-4">
          <span className="typing-text-one">
            Anxiety Doesn’t Define You — Let’s Rewrite Your Story Together...
          </span>
        </h1>
        {/* Second Typing Text */}
        <h2 className="text-2xl font-extrabold text-[#8E244D]">
          <span className="typing-text-two">
            Break Free from Anxiety and Create the Life You Deserve...
          </span>
        </h2>
      </div>

      {/* Scoped Styles */}
      <style jsx>{`
        .typing-text-one {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid #000; /* Adjust cursor color */
          width: 0;
          animation: typing1 8s steps(50, end) infinite, blink1 3s step-end infinite;
          font-size: 32px; /* Adjust font size */
        }

        .typing-text-two {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid #000; /* Adjust cursor color */
          width: 0;
          animation: typing2 8s steps(50, end) infinite, blink2 3s step-end infinite;
          font-size: 32px; /* Adjust font size */
        }

        @keyframes typing1 {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes typing2 {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink1 {
          50% {
            border-color: transparent;
          }
        }

        @keyframes blink2 {
          50% {
            border-color: transparent;
          }
        }
      `}</style>
    </section>
  );
};

export default TypingEffect;
