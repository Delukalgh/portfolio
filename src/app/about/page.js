"use client";
import Header from "../../../components/Header";
import styles from "./About.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import Photo from "/public/images/portfolio.jpg";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className="flex flex-row w-[60%]">
          <div className="flex flex-col">
            <Image src={Photo} alt="me" width={500} height={500}></Image>
          </div>
          <div className="flex flex-col items-center gap-[1em]">
            <h1 className="flex justify-center font-bold text-[3em] text-[#FF5F00]">
              Who am I
            </h1>
            <div className="flex flex-col w-[60%] items-center justify-center gap-[2em]">
              <p className={styles.description}>
                Front-End Developer and UX/UI Designer with experience in
                creating responsive, user-friendly web applications using HTML,
                CSS, JavaScript, and frameworks such as React. Skilled in
                translating design wireframes into high-quality code, optimizing
                performance, and ensuring cross-browser compatibility.
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
      </div>
    </>
  );
}
