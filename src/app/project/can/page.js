'use client'
import { useRef, useEffect } from 'react'
import Image from "next/image";
import Header from "../../../../components/Header";
import Cans from "/public/images/cans.png"
import Cedar from "/public/images/cedarmock.png"
import Pine from "/public/images/pinemock.png"
import Maple from "/public/images/maplemock.png"
import styles from "./Can.module.css";
import { useScroll, motion, useTransform, useSpring } from "framer-motion"

const Can = () => {

    const cedarRef = useRef();
    const pineRef = useRef();
    const mapleRef = useRef();

    const { scrollYProgress: cedarProgress } = useScroll({
        target: cedarRef,
        offset: ["start start", "end end"]
    });

    const { scrollYProgress: pineProgress } = useScroll({
        target: pineRef,
        offset: ["start start", "end end"]
    });

    const { scrollYProgress: mapleProgress } = useScroll({
        target: mapleRef,
        offset: ["start start", "end end"]
    });

    const scaleCedar = useSpring(useTransform(cedarProgress, [0, 1], [1, 0.8]), {
        stiffness: 100,  // Controls the resistance (higher = snappier)
        damping: 15,     // Controls how much the motion slows down (higher = smoother)
        mass: 0.5        // Adjusts inertia (lower values make it feel lighter)
    });
    const rotateCedar = useSpring(useTransform(cedarProgress, [0, 1], [0, -5]), {
        stiffness: 100,
        damping: 15
    });

    const scalePine = useSpring(useTransform(pineProgress, [0, 1], [1, 0.8]), {
        stiffness: 100,
        damping: 15
    });
    const rotatePine = useSpring(useTransform(pineProgress, [0, 1], [0, -5]), {
        stiffness: 100,
        damping: 15
    });

    const scaleMaple = useSpring(useTransform(mapleProgress, [0, 1], [1, 0.8]), {
        stiffness: 100,
        damping: 15
    });
    const rotateMaple = useSpring(useTransform(mapleProgress, [0, 1], [0, -5]), {
        stiffness: 100,
        damping: 15
    });

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div>
                    <h1 className="font-bold text-[4em]">EVERGREEN BREWING</h1>
                </div>

                <div className="p-4">
                    <a>
                        <Image
                            src={Cans}
                            alt="cans"
                            width={1000}
                            height={1000}
                        />
                    </a>
                </div>

                <div className="flex flex-col mt-[1em] w-[57%] gap-[5em]">
                    <h1 className="flex justify-center font-bold text-[3em]">Package Design</h1>
                    <p className="font-light text-[22px]">Evergreen Brewing is a brewery deeply inspired by the rich, earthy essence of the great outdoors. Created by utilizing Adobe Photoshop and Illustrator. This design uses a wood texture with a dark background to make the typography more prominent. It all ties into together with the colors of the pictures matching the typography color.  </p>
                </div>

                <div className=" flex flex-col p-4 gap-[3em] relative h-[310vh]">
                    <motion.div
                        ref={cedarRef}
                        style={{ scale: scaleCedar, rotate: rotateCedar }}
                        className="sticky top-0 h-screen"
                    >
                        <div className='flex mt-[10em]' />
                        <Image
                            src={Cedar}
                            alt="cedar"
                            width={1000}
                            height={1000}
                        />
                    </motion.div>
                    <motion.div
                        ref={pineRef}
                        style={{ scale: scalePine, rotate: rotatePine }}
                        className="sticky top-0 h-screen"
                    >
                        <div className='flex mt-[10em]' />
                        <Image
                            src={Pine}
                            alt="pine"
                            width={1000}
                            height={1000}
                        />
                    </motion.div>
                    <motion.div
                        ref={mapleRef}
                        style={{ scale: scaleMaple, rotate: rotateMaple }}
                        className="sticky top-0 h-screen"
                    >
                        <div className='flex mt-[10em]' />
                        <Image
                            src={Maple}
                            alt="maple"
                            width={1000}
                            height={1000}
                        />
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default Can;