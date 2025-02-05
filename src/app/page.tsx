import Link from "next/link";
import styles from "../styles/Home.module.css";
import Header from "../../components/Header";
import Image from "next/image";
import Cans from "../../public/images/cans.png"
export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center mt-[10em]">
        <div>
          <div className={styles.title}>
            <p>Hello I'm, Deluka LGH</p> <p>Front-End Developer</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[10em]">
          <p className={styles.description}>
            Front-End Developer and UX/UI Designer
            with experience in creating responsive,
            user-friendly web applications using HTML, CSS, JavaScript, and frameworks
            such as React.Skilled in translating design wire frames into
            high-quality code, optimizing performance, and ensuring cross-browser
            compatibility.

          </p>
        </div>

      <main className="flex m-8 justify-center items-center">
        <div className="work-links m-auto">
          <div className="p-4">
            <a href="/project/can">
              <Image
                src={Cans}
                alt="cans"
                width={500}
                height={500}
              />
            </a>

          </div>

        </div>
      </main>


    </>
  );
}
