import Header from "../../../../components/Header"
import styles from "./Remedify.module.css";
import Image from "next/image";
import Cover from "/public/images/cover.jpg"

const Remedify = () => {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div>
                    <h1 className="flex text-center font-bold text-[4em]">Remedify</h1>
                </div>

                <div className="p-4">
                    <a>
                        <Image
                            src={Cover}
                            alt="blue cigarette"
                            width={1000}
                            height={1000}
                        />
                    </a>
                </div>

                <div className="flex flex-col mt-[1em] w-[57%] gap-[5em]">
                    <h1 className="flex justify-center font-bold text-[3em] text-[#FF5F00]">Medication Reminder App</h1>
                    <p className="font-light text-[22px]">Remedify is an app designed with accessibility in mind to improve medical adherance rate.</p>
                    <div className="flex flex-col gap-[2em]">
                        <h1 className="flex justify-start font-bold text-[3em] text-[#FF5F00]">Additionale Links</h1>
                        <div className="flex flex-row gap-[4em] font-medium text-[18px]">
                            <a href="https://www.remedify.ca/">Remedify Website</a>
                            <a href="https://remedify-blog.vercel.app/">Remedify Blog</a>
                            <a href="https://github.com/yeenathan/asclepius">Remeify Repo</a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Remedify