import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

import { useMediaQuery } from '@react-hook/media-query';


const Education = () => {
  const isScreenMd = useMediaQuery('(min-width: 667px)');
  console.log("isScreenMd",isScreenMd)
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex flex-col w-full gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div >
        <div className="flex flex-col gap-2 py-4 lgl:py-12 font-titleFont">
          {/*<p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
  <h2 className="text-3xl font-bold md:text-4xl">Education Quality</h2>*/}
        </div>
        <div className="mt-6 lgl:mt-14 max-md:w-[85%] md:w-[45%] md:h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 relative md:left-[50%]">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="University of Colombo School of Computing, Sri Lanka(2021-Present)"
            des="GPA : 2.82"
          />
          <ResumeCard
            className="inherit calculated-width"
            left={true}
            title="G.C.E. ADVANCED LEVELS"
            subTitle="Sujatha Vidyalaya, Matara (2016 - 2019)"
            result=""
            des="G.C.E. Advanced Level examination in the common stream
            
            Combined Mathematics- A | Chemistry- B | Physics- C"
          />
          <ResumeCard
            title="G.C.E. ORDINARY LEVELS (2015)"
            subTitle="Sujatha Vidyalaya, Matara"
            result=""
            des="9A"
          />
        </div>
      </div>
      {/* part Two */}

      
    </motion.div>
  );
}

export default Education