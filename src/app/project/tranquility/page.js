"use client";
import Header from "../../../../components/Header";
import Scrollanimation from "../../../../components/Scroll";
import styles from "./Tranquility.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "../../../../components/Footer";
import Cranes from "/public/images/tranquilityCover.png";
import Live from "/public/images/live_chat.png";

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
            />
          </a>
        </div>

        <div className="flex flex-col mt-[6em] w-[57%] gap-[2em]">
          <div className="flex flex-col gap-[1em]">
            <h1 className="flex justify-center font-bold text-[3em] text-[#FF5F00]">
              Mental Health Care App
            </h1>
            <p className="font-light text-[22px]">
              Tranquility Cranes is a mobile app designed to support individuals
              dealing with stress, anxiety, and other mental health challenges.
              It bridges gaps in mental health care through guided coping
              exercises, personalized activity recommendations, and structured
              self-care schedules. Community forums provide a safe space for
              users to connect and share their experiences. At the heart of the
              app is Terry Crane, a compassionate mascot who offers
              encouragement and companionship throughout the user’s journey. A
              unique egg-care feature reinforces the importance of
              self-nurturing, symbolizing mental well-being. With a calming
              aesthetic and a soothing palette of soft blues, Tranquility Cranes
              creates a serene environment that fosters peace and relaxation.
            </p>
          </div>

          <div className="flex flex-col gap-[1em]">
            <h1 className="flex justify-start font-bold text-[3em] text-[#FF5F00]">
              Website Link
            </h1>
            <div className="flex flex-row gap-[1em] font-medium text-[18px]">
              <a href="https://tranquillity-cranes.vercel.app/" target="_blank">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  className="flex p-4 rounded-[8px] bg-[#FF5F00]"
                >
                  Website Link
                </motion.button>
              </a>
            </div>
          </div>

          <div className="flex flex-col w-[57%] mt-[3em] gap-[1em]">
            <h1 className="flex justify-start font-bold text-[3em] text-[#FF5F00]">
              Main Features
            </h1>
            <div className="flex flex-col gap-[1em]">
              <h1 className="flex justify-start font-bold text-[2em] text-[#0097CE]">
                Live Chat
              </h1>
              <Image
                className="rounded-[20px]"
                src={Live}
                alt="live chat"
                width={300}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tranquility;
