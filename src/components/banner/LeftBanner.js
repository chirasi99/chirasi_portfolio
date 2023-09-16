import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: [ "Full Stack Developer.", "Mobile Application Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="flex flex-col w-full gap-20 lgl:w-1/2">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal ">WELCOME</h4>
        <h1 className="font-bold text-white md:text-6xl sml:text-5xl xs:text-3xl">
          Hi, I'm <span className="capitalize text-designColor">Chirasi Amaya</span>
        </h1>
        <h2 className="font-bold text-white md:text-4xl sml:text-2xl">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base leading-6 tracking-wide font-bodyFont">
        I am a passionate Software Developer with a strong desire for continuous learning. My expertise lies in developing user-friendly 
        web and mobile applications, blending creativity and functionality to create remarkable solutions.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner