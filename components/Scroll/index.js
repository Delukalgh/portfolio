"use client"
import { motion, useScroll } from "framer-motion"
import React from "react";

export default function Scrollanimation() {
    const { scrollYProgress } = useScroll()

    return (
        <>
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0, 
                    height: 10,
                    originX: 0,
                    backgroundColor: "#0097CE",
                }}
            />
        </>
    )
}