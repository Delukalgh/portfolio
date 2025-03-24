"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Header from "../../components/Header";
import Scrollanimation from "../../components/Scroll";
import Image from "next/image";
import Cans from "../../public/images/cans.png";
import Cancover from "../../public/images/Can2.png";
import Blue from "/public/images/blue.png";
import Toyo from "/public/images/magmockup.png";
import Cover from "/public/images/cover.jpg";
import { useScroll, motion, useTransform } from "framer-motion";
import { AuroraBackground } from "@/components/aurora-background";
import Footer from "../../components/Footer";
import Tranquility from "/public/images/tranquilityCover.png";

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

        <div className={styles.container}>
          <div className="min-h-screen">
            <Header />
            <section className="relative flex flex-row justify-around pt-[5em]">
              <div>
                <div className={styles.title}>
                  <p className={styles.gradient}>
                    Deluka LGH
                  </p>
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
                  <a href="#remedify">
                    <Image
                      className="rounded-[20px]"
                      src={Cover}
                      alt="Remedify Cover"
                      width={600}
                      height={600}
                    />
                  </a>
                  <p className="text-[28px] font-medium text-center pt-[10px]">Case Study</p>
                </motion.div>
              </div>
            </section>
          </div>
          <main className="flex mt-[12em] justify-center items-center">
            <div
              id="projects"
              className="flex flex-col work-links m-auto items-center relative  gap-[10em]"
            >
              <h1 className="flex justify-center font-bold text-[3em] text-[#FF5F00]">
                Projects
              </h1>

              <div className="block" id="remedify">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    border: "6px solid #0097CE",
                    background: "#0097CE",
                    borderRadius: "20px",
                  }}
                  whileTap={{ scale: 0.8 }}
                >
                  <a href="/project/remedify">
                    <Image
                      className="rounded-[20px]"
                      src={Cover}
                      alt="Remedify Cover"
                      width={1000}
                      height={1000}
                    />
                  </a>
                  <div className="flex justify-center pt-[18px]">
                    <h1 className="text-[28px] font-medium text-[#FF5F00]">
                      Remedify
                    </h1>
                  </div>
                </motion.div>
              </div>

              {/* <div className="block">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    border: "6px solid #0097CE",
                    background: "#0097CE",
                    borderRadius: "20px",
                  }}
                  whileTap={{ scale: 0.8 }}
                >
                  <a href="/project/tranquility">
                    <Image
                      className="rounded-[20px]"
                      src={Tranquility}
                      alt="Tranquility Cover"
                      width={1000}
                      height={1000}
                    />
                  </a>
                  <div className="flex justify-center pt-[18px]">
                    <h1 className="text-[28px] font-medium text-[#FF5F00]">
                      Tranquility Cranes
                    </h1>
                  </div>
                </motion.div>
              </div> */}

              <div className="block">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    border: "6px solid #0097CE",
                    background: "#0097CE",
                    borderRadius: "20px",
                  }}
                  whileTap={{ scale: 0.8 }}
                >
                  <a href="/project/magazine">
                    <Image
                      className="rounded-[20px]"
                      src={Toyo}
                      alt="magazine"
                      width={1000}
                      height={1000}
                    />
                  </a>
                  <div className="flex justify-center pt-[18px]">
                    <h1 className="text-[28px] font-medium text-[#FF5F00]">
                      Spaces of Serenity: The Visionary Architecture of Toyo Ito
                    </h1>
                  </div>
                </motion.div>
              </div>

              <div className="block">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    border: "6px solid #0097CE",
                    background: "#0097CE",
                    borderRadius: "20px",
                  }}
                  whileTap={{ scale: 0.8 }}
                >
                  <a href="/project/can">
                    <Image
                      src={Cancover}
                      alt="cans"
                      width={1000}
                      height={1000}
                    />
                  </a>
                  <div className="flex justify-center pt-[18px]">
                    <h1 className="text-[28px] font-medium text-[#FF5F00]">
                      Evergreen Brewing
                    </h1>
                  </div>
                </motion.div>
              </div>

              <motion.div
                whileHover={{
                  scale: 1.1,
                  border: "6px solid #0097CE",
                  background: "#0097CE",
                  borderRadius: "20px",
                }}
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
                <div className="flex justify-center pt-[18px]">
                  <h1 className="text-[28px] font-medium text-[#FF5F00]">
                    Sovereign Cigarettes
                  </h1>
                </div>
              </motion.div>
            </div>
          </main>
        </div>

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
