'use client';
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Header from "../../components/Header";
import Image from "next/image";
import Cans from "../../public/images/cans.png"
import { useScroll, motion, useTransform } from "framer-motion";
import { validateHeaderValue } from "http";
import Projects from "./project/page";

export default function Home() {

  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.9', 'start 0.25']
  });

  const words = `Front-End Developer and UX/UI Designer with experience in creating responsive, user-friendly web applications using HTML, CSS, JavaScript, and frameworks such as React. Skilled in translating design wireframes into high-quality code, optimizing performance, and ensuring cross-browser compatibility.`.split(" ");

  const length = words.length;
  return (
    <>
      <Header />
      <div className={styles.container}>

        <div className="flex flex-col justify-center mt-[10em]">
          <div>
            <div className={styles.title}>
              <p>Hello I'm, Deluka LGH</p> <p><span>Front-End Developer</span> | UX/UI Designer</p>
            </div>
          </div>
        </div>
        <div className={styles.hcontainer} />
        <div className="flex justify-center ">
          <p
            className={styles.description}
            ref={element}
          >
            {words.map((word, i) => {
              const start = i / length;
              const end = start + (1 / length);
              return <Word key={i} range={[start, end]} progress={scrollYProgress}>{word} </Word>;
            })}
          </p>
        </div>

        <main className="flex mt-[12em] justify-center items-center">
          <Projects />
        </main>

      </div>

    </>
  );
}

interface WordProps {
  children: React.ReactNode;
  range: [number, number];
  progress: any; 
}

const Word: React.FC<WordProps> = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <motion.span style={{ opacity }} className={styles.word}>
      {children}{" "}
    </motion.span>
  );
};

// const Word = ({ children, range, progress }) => {
//   const opacity = useTransform(progress, range, [0, 1]);

//   return (
//     <motion.span style={{ opacity }} className={styles.word}>
//       {children}{" "}
//     </motion.span>
//   );
// }
