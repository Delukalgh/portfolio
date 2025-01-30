import next from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <Image 
                        src="/images/SVG/logo.svg"
                        width={150}
                        height={150}
                    />
                </div>
                <div className={styles.navLinks}>
                    <ul className="">
                    <li> <Link href="/project">Projects </Link></li>
                    <li> <Link href="/project">About </Link></li>
                    <li> <Link href="/contact">Contact </Link></li>
                    </ul>
                </div>
            </header>
        </>
    )
}