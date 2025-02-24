'use client';
import Header from "../../../components/Header"
import styles from "./Contact.module.css";
import { motion } from "framer-motion"
import Link from "next/link";

export default function Contact() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className="flex mt-[5em]">
                    <h1 className="font-bold text-[3em] text-[#FF5F00]">Contact</h1>
                </div>
                <div className="flex flex-row justify-between w-[57%] mt-[3em]">
                    <div className="flex flex-col gap-[1em]">
                        <p className="font-bold text-[2em] text-[#0097CE]">
                            Mail
                        </p>
                        <a className="text-[16px]">
                            deluka.lgh@gmail.com
                        </a>

                        {/* <Link href="">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.8 }}
                                className="flex p-4 rounded-[8px] bg-[#FF5F00]"
                            >
                                deluka.lgh@gmail.com
                            </motion.button>
                        </Link> */}
                    </div>

                    <div className="flex flex-col gap-[1em]">
                        <p className="font-bold text-[2em] text-[#0097CE]">
                            Social Media
                        </p>

                        <Link href="https://www.linkedin.com/in/delukalgh/">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.8 }}
                                className="flex p-4 rounded-[8px] bg-[#FF5F00] text-[16px]"
                            >
                                LinkedIn
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}