"use client"
import Header from "../../../../components/Header"
import Scrollanimation from "../../../../components/Scroll"
import styles from "./Magazine.module.css";
import Image from "next/image";
import Toyo from '/public/images/magmockup.png'
import Eight from "/public/images/pageeight.png"
import Nine from "/public/images/pagenine.png"
import Ten from "/public/images/pageten.png"
import { motion } from "framer-motion"

const Magazine = () => {
    return (
        <>
            <Scrollanimation />
            <Header />
            <div className={styles.container}>
                <div>
                    <h1 className="flex text-center font-bold text-[4em] text-[#FF5F00]">Spaces of Serenity <br></br>The Visionary Architecture of Toyo Ito</h1>
                </div>

                <div className="p-4">
                    <a>
                        <Image
                            src={Toyo}
                            alt="Magazine Mockup"
                            width={1000}
                            height={1000}
                        />
                    </a>
                </div>
                <div className="flex flex-col mt-[1em] w-[57%] gap-[5em]">
                    <h1 className="flex justify-center font-bold text-[3em] text-[#FF5F00]">Magazine</h1>
                    <p className="font-light text-[22px]">A magazine dedicated to the works of Toyo Ito called Spaces of Serenity: The Visionary Architecture of Toyo Ito. This magazine features Toyo Ito’s most famous works. The consistent use of negative space gives the reader a sense of breathability and freedom. </p>
                </div>
                <div className="flex w-[57%] mt-[3em]">
                    <a href="https://indd.adobe.com/view/19d2688e-e18e-4ac4-992c-09076ec6b7ef" target="_blank">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.8 }}
                            className="flex p-4 rounded-[8px] bg-[#FF5F00]">Click here!</motion.button>
                    </a>
                </div>
                <div className="flex flex-col p-4 mt-[8em] gap-10">
                    <a>
                        <Image
                            src={Eight}
                            alt="page 8 of magazine"
                            width={1000}
                            height={1000}
                        />
                    </a>
                    <a>
                        <Image
                            src={Nine}
                            alt="page 9 of magazine"
                            width={1000}
                            height={1000}
                        />
                    </a>
                    <a>
                        <Image
                            src={Ten}
                            alt="page 10 of magazine"
                            width={1000}
                            height={1000}
                        />
                    </a>
                </div>

            </div>
        </>
    )
}

export default Magazine