import React from 'react'
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full py-20 border-b-[1px] border-b-black"
    >

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="flex flex-col w-full gap-10 lgl:flex-row lgl:gap-20"
      >
        <div className="w-full lgl:w-1/2">
          <div className="flex flex-col gap-4 py-12 font-titleFont">
            <p className="text-sm text-designColor tracking-[4px] uppercase">
              Features
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">Development Skill</h2>
          </div>
          <div className="flex flex-col gap-6">
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">HTML 5</p>
              <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="relative h-full rounded-md w-[80%] bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
                >
                  <span className="absolute right-0 -top-7">80%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">CSS3</p>
              <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[65%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute right-0 -top-7">65%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">JAVASCRIPT</p>
              <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute right-0 -top-7">80%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">Python</p>
              <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute right-0 -top-7">80%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">NodeJS</p>
              <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute right-0 -top-7">70%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">ReactJS</p>
              <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute right-0 -top-7">60%</span>
                </motion.span>
              </span>
            </div>
          </div>
        </div>

        
        <div className="w-full lgl:w-1/2">
          <div className="flex flex-col gap-4 py-12 font-titleFont">
            <p className="text-sm text-designColor tracking-[4px] uppercase">
              Features
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">Development Skill</h2>
          </div>
          <div className="flex flex-col gap-6">
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">React</p>
              <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="relative w-full h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
                >
                  <span className="absolute right-0 -top-7">100%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">HTML 5</p>
              <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute right-0 -top-7">95%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">CSS3</p>
              <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute right-0 -top-7">80%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">JAVASCRIPT</p>
              <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute right-0 -top-7">75%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">SOFTWARE</p>
              <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute right-0 -top-7">90%</span>
                </motion.span>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Skills