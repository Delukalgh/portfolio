import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.logo}>
          <a href="/">
            <Image
              src="/images/SVG/logo.svg"
              width={50}
              height={50}
              alt="logo"
            />
          </a>
        </div>
        <div className="absolute">
          <p>Copyright</p>
        </div>
      </footer>
    </>
  );
}
