'use client'
import { useRef, useEffect } from 'react'
import next from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Cans from '/public/images/cans.png'
import Blue from '/public/images/blue.png'
import React from 'react'
import { useScroll, motion, useTransform } from "framer-motion"


const Projects = () => {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    })
    useEffect(() => {
    }, [])

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

    return (
        <div ref={container} className="flex flex-col work-links m-auto items-center relative h-[200vh]">
            <motion.div
                style={{ scale, rotate }}
                className="sticky top-0 p-4 h-screen"
            >
                <a href="/project/can">
                    <Image
                        src={Cans}
                        alt="cans"
                        width={1200}
                        height={1200}
                    />
                </a>

            </motion.div>
            <div
                className="relative p-4 h-screen">
                <a href="/project/cigbox"
                >
                    <Image
                        src={Blue}
                        alt='Blue Cigbox'
                        width={'900'}
                        height={'900'}
                    />
                </a>
            </div>

        </div>
    )
}

export default Projects