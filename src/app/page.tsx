"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Header from "../../components/Header";
import Scrollanimation from "../../components/Scroll";
import Image from "next/image";
import Cans from "../../public/images/cans.png";
import Blue from "/public/images/blue.png";
import Toyo from "/public/images/magmockup.png";
import Cover from "/public/images/cover.jpg";
import { useScroll, motion, useTransform } from "framer-motion";
import { AuroraBackground } from "@/components/aurora-background";
import Footer from "../../components/Footer";

export default function Home() {
  // const element = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: element,
  //   offset: ["start 0.9", "start 0.25"],
  // });

  // const words =
  //   `Front-End Developer and UX/UI Designer with experience in creating responsive, user-friendly web applications using HTML, CSS, JavaScript, and frameworks such as React. Skilled in translating design wireframes into high-quality code, optimizing performance, and ensuring cross-browser compatibility.`.split(
  //     " "
  //   );

  // const length = words.length;
  return (
    <>
      <AuroraBackground>
        <div className={styles.container}>
          <div className="min-h-screen">
            <Header />
            <section className="relative flex flex-row justify-around pt-[5em]">
              <div>
                <div className={styles.title}>
                  <p className="text-[#FF5F00] text-[6em]">
                    Deluka <span>LGH</span>
                  </p>{" "}
                  <p className="text-[28px] font-light">
                    Front-End Developer <br></br>UX/UI Designer
                  </p>
                </div>
              </div>
              <div className="block">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <a href="/project/remedify">
                    <Image
                      className="rounded-[20px]"
                      src={Cover}
                      alt="Remedify Cover"
                      width={600}
                      height={600}
                    />
                  </a>
                </motion.div>
              </div>
            </section>
          </div>
          <main className="flex mt-[12em] justify-center items-center">
            <div
              id="projects"
              className="flex flex-col work-links m-auto items-center relative  gap-10"
            >
              <h1 className="flex justify-center font-bold text-[3em] text-[#FF5F00]">
                Projects
              </h1>
              <div className="flex flex-row gap-8">
                <div className="block">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <a href="/project/can">
                      <Image
                        className="rounded-[20px]"
                        src={Cans}
                        alt="cans"
                        width={500}
                        height={500}
                      />
                    </a>
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <a href="/project/cigbox">
                    <Image
                      className="rounded-[20px]"
                      src={Blue}
                      alt="Blue Cigbox"
                      width={500}
                      height={500}
                    />
                  </a>
                </motion.div>
              </div>

              <div className="flex flex-row gap-8">
                <div className="block">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <a href="/project/magazine">
                      <Image
                        className="rounded-[20px]"
                        src={Toyo}
                        alt="magazine"
                        width={500}
                        height={500}
                      />
                    </a>
                  </motion.div>
                </div>

                <div className="block">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <a href="/project/remedify">
                      <Image
                        className="rounded-[20px]"
                        src={Cover}
                        alt="Remedify Cover"
                        width={500}
                        height={500}
                      />
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </main>
          <div
            id="about"
            className="flex flex-col justify-center items-center pt-[8em]"
          >
            <h1 className="flex justify-center p-8 font-bold text-[3em] text-[#FF5F00]">
              Who am I
            </h1>
            <div className="flex flex-col w-[60%] items-center justify-center gap-[2em]">
              <p className={styles.description}>
                Front-End Developer and UX/UI Designer with experience in
                creating responsive, user-friendly web applications using HTML,
                CSS, JavaScript, and frameworks such as React. Skilled in
                translating design wireframes into high-quality code, optimizing
                performance, and ensuring cross-browser compatibility.
                {/* {words.map((word, i) => {
                  const start = i / length;
                  const end = start + 1 / length;
                  return (
                    <Word
                      key={i}
                      range={[start, end]}
                      progress={scrollYProgress}
                    >
                      {word}{" "}
                    </Word>
                  );
                })} */}
              </p>
              <a
                href="/resume.pdf"
                target="_blank"
                className="flex justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  className="flex p-4 pl-8 pr-8 rounded-[8px] bg-[#FF5F00] text-[16px]"
                >
                  Resume
                </motion.button>
              </a>
            </div>
          </div>
        </div>
      </AuroraBackground>
      <Footer />
    </>
  );
}

// interface WordProps {
//   children: React.ReactNode;
//   range: [number, number];
//   progress: any;
// }

// const Word: React.FC<WordProps> = ({ children, range, progress }) => {
//   const opacity = useTransform(progress, range, [0, 1]);

//   return (
//     <motion.span style={{ opacity }} className={styles.word}>
//       {children}{" "}
//     </motion.span>
//   );
// };

// const Word = ({ children, range, progress }) => {
//   const opacity = useTransform(progress, range, [0, 1]);

//   return (
//     <motion.span style={{ opacity }} className={styles.word}>
//       {children}{" "}
//     </motion.span>
//   );
// }
