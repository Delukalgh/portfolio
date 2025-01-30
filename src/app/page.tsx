import Link from "next/link";
import styles from "../styles/Home.module.css";
import Header from "../../components/Header";
import Image from "next/image";
import Cans from "../../public/images/cans.png"
export default function Home() {
  return (
    <>
      <Header />
      <div className="mt-[8em] flex flex-row justify-between   ">
        <div >
          <h1 className={styles.title}>
            Deluka <br /> LGH
          </h1>
        </div>
        <div className="bg-violet-700 " style={{ marginRight: "12em", width: "512px", height: "400px" }} />
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
