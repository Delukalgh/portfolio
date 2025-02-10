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

                <div className="flex flex-col mt-[1em] w-[57%] gap-[2em]">
                    <div>
                        <h1 className="flex justify-center font-bold text-[3em] text-[#FF5F00]">Medication Reminder App</h1>
                        <p className="font-light text-[22px]">Remedify is an app designed with accessibility in mind to improve medical adherance rate.</p>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="flex justify-start font-bold text-[3em] text-[#FF5F00]">Additionale Links</h1>
                        <div className="flex flex-row gap-[4em] font-medium text-[18px]">
                            <a href="https://www.remedify.ca/">Remedify Website</a>
                            <a href="https://remedify-blog.vercel.app/">Remedify Blog</a>
                            <a href="https://github.com/yeenathan/asclepius">Remeify Repo</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row w-[57%] mt-[3em] gap-[2em]">
                    <div className="flex flex-col w-[57%]">
                        <h1 className="flex justify-start font-bold text-[3em] text-[#FF5F00]">Tools</h1>
                        <ul className="pl-5 list-disc grid grid-cols-2 ">
                            <li>Expo/React Native</li>
                            <li>Azure cloud functions & blob storage</li>
                            <li>OpenAI GPT-4o mini</li>
                            <li>Kitten UI</li>
                            <li>Azure Computer Vision</li>
                            <li>Canadian Drug Product Database</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col w-[57%] mt-[3em]">
                    <h1 className="flex justify-start font-bold text-[3em] text-[#FF5F00]">Reason</h1>
                    <p className="font-light text-[22px]">
                        Sure! Here's a refined version with a fresh wording approach:
                        Studies show that only about 50% of patients with chronic illnesses take their medications as prescribed. 
                        The two main obstacles? Misunderstanding instructions and forgetfulness.<br></br>
                        Remedify is an AI-powered medication management app designed to improve adherence and simplify health routines. 
                        More than just a digital pill organizer, it’s tailored for individuals managing multiple prescriptions or cognitive 
                        challenges—where the risk of missed or incorrect doses is high. With a strong emphasis on accessibility, Remedify not only 
                        provides smart reminders but also offers a comprehensive medication library, ensuring users stay informed and on track with their treatment.</p>
                </div>
            </div>
        </>
    )
}

export default Remedify