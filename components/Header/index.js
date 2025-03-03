import next from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import Home from "@/app/page";

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <a href="/">
                        <Image
                            src="/images/SVG/logo.svg"
                            width={100}
                            height={100}
                            alt="logo"
                        />
                    </a>
                </div>
                <div className={styles.navLinks}>
                    <ul className="">
                        <li> <Link href="/#projects">Projects </Link></li>
                        <li> <Link href="/about">About </Link></li>
                        <li> <Link href="/contact">Contact </Link></li>
                    </ul>
                </div>
            </header>
        </>
    )
}