"use client";
import Header from "../../../../components/Header";
import Scrollanimation from "../../../../components/Scroll";
import styles from "./Tranquility.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "../../../../components/Footer";
import Cranes from "/public/images/tranquilityCover.png";

const Tranquility = () => {
  return (
    <>
      <Scrollanimation />
      <Header />
      <div className={styles.container}>
        <div>
          <h1 className="flex text-center font-bold text-[4em] text-[#FF5F00]">
            Tranquility Cranes
          </h1>
        </div>

        <div className="p-4">
          <a>
            <Image
              src={Cranes}
              alt="tranquility cover"
              width={1000}
              height={1000}
            >
              
            </Image>
          </a>
        </div>
      </div>
    </>
  );
};

export default Tranquility;
