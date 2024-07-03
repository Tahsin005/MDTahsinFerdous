import React from "react";
import profilepic from "../assets/tahsin-hero.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
  DiPython,
} from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDjango } from "react-icons/si";
import { PiFileCppFill } from "react-icons/pi";
import { TbBrandCpp } from "react-icons/tb";
import { motion } from "framer-motion";
import SkillsGrid from "./SkillGrid";

const Hero = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 pt-12 pb-5 mt-16 mb-10 relative">
      <div className="grid lg:grid-cols-2 place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className=""
        >
          <TypeAnimation
            sequence={[
              "Fullstack Dev",
              1000,
              "Comp. Programmer",
              1000,
              "</>",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-4xl  mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            HEY, I AM <br />
            <span className="text-purple-500">MD. Tahsin Ferdous</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 md:text-2xl text-lg mb-6"
          >
            A Computer Science and Engineering major, passionate about full-stack web development. I use Django for backend APIs and HTML, CSS, Tailwind CSS, JavaScript and React for frontend to build scalable web applications.
            <br />
            <span className="font-bold text-purple-500">Open for Work &
            Collaboration.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
                                       border-purple-400 rounded-xl"
            >
              <a href="../assets/resume/MD. Tahsin Ferdous Resume.pdf" download>Download Resume!</a>
            </motion.button>

            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
              <motion.a whileHover={{ scale: 1.2 }} href="#">
                <AiOutlineGithub />
              </motion.a>

              <motion.a whileHover={{ scale: 1.2 }} href="#">
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a whileHover={{ scale: 1.2 }} href="#">
                <AiOutlineMail />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="sm:mx-auto lg:ms-auto">
        <motion.img
          src={profilepic}
          className="w-[300px] md:w-[450px] bg-[#2f133b] rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
        className="text-7xl px-12 md:px-0 w-full mx-auto py-24"
      >
        <div className="text-gray-200 text-4xl text-center">Tech Stack</div>
        
        <div className="mt-8 ">
            <SkillsGrid></SkillsGrid>
        </div>
      </motion.div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
