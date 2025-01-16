import Image from 'next/image';

const TypingEffect = () => {
  return (
    <section className="relative py-16 text-center mb-6">
      <div className="max-w-6xl mx-auto px-4">
        {/* First Typing Text */}
        <h1 className="text-4xl font-extrabold text-[#065a60] mb-4">
          <div className="typing-text-one">
            Anxiety Doesn’t Define You — Let’s Rewrite Your Story Together...
          </div>
        </h1>
        {/* Second Typing Text */}
        <h2 className="text-2xl font-extrabold text-[#8E244D]">
          <span className="typing-text-two">
            Break Free from Anxiety and Create the Life You Deserve...
          </span>
        </h2>
      </div>


      <style jsx>{`
  .typing-text-one,
  .typing-text-two {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    border-right: 3px solid #000; /* Cursor color */
    width: 0;
    max-width: 100%;
    font-size: 32px; /* Font size */
  }

  .typing-text-one {
    animation: typing1 4s steps(50, end) 0s forwards, blink1 1s step-end infinite 4s;
  }
  
  .typing-text-two {
    animation: typing2 4s steps(50, end) 5s forwards, blink2 1s step-end infinite 8s;
  }


  /* Typing animation for the first line */
  @keyframes typing1 {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* Typing animation for the second line */
  @keyframes typing2 {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* Cursor blinking animation for the first line */
  @keyframes blink1 {
    50% {
      border-color: transparent;
    }
  }

  /* Cursor blinking animation for the second line */
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
