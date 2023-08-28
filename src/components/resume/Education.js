import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex flex-col w-full gap-10 lgl:flex-row lgl:gap-20"
    >
      {/* part one */}
      <div >
        <div className="flex flex-col gap-2 py-4 lgl:py-12 font-titleFont">
          {/*<p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
  <h2 className="text-3xl font-bold md:text-4xl">Education Quality</h2>*/}
        </div>
        <div className="mt-6 lgl:mt-14 w-[45%] h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 relative left-[50%]">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="University of Colombo School of Computing, Sri Lanka(2021-Present)"
            result="3.24/4"
            des=""
          />
          <ResumeCard
            className="relative -left-[105%] "
            left={true}
            title="G.C.E. ADVANCED LEVELS"
            subTitle="Telijjawila Central College, Matara (2017 - 2019)"
            result=""
            des="Faced the G.C.E. Advanced Level examination in the common stream
            Combined Maths- A | ICT- A | Physics- C"
          />
          <ResumeCard
            title="G.C.E. ORDINARY LEVELS (2016)"
            subTitle="Akuressa Maha Vidyalaya, Matara"
            result=""
            des="6A, 1B, and 2C"
          />
          <ResumeCard
            className="relative -left-[105%]"
            left={true}
            title="AS - Science & Information"
            subTitle="SuperKing College (2001 - 2005)"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
        </div>
      </div>
      {/* part Two */}

      
    </motion.div>
  );
}

export default Education