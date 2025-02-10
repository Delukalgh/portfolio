import Header from "../../../../components/Header"
import styles from "./Remedify.module.css";
import Image from "next/image";
import Cover from "/public/images/cover.jpg"
import Auto from "/public/images/automated.jpg"
import Info from "/public/images/insight.jpg"
import Primary from "/public/images/primarypersona.png"
import Secondary from "/public/images/secondarypersona.png"

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

                <div className="flex flex-col w-[57%] mt-[3em] gap-[2em]">
                    <h1 className="flex justify-start font-bold text-[3em] text-[#FF5F00]">Reason</h1>
                    <p className="font-light text-[22px]">
                        Studies show that only about 50% of patients with chronic illnesses take their medications as prescribed.
                        The two main obstacles? Misunderstanding instructions and forgetfulness.
                    </p>
                    <span className="font-light text-[22px]">
                        Remedify is an AI-powered medication management app designed to improve adherence and simplify health routines.
                        More than just a digital pill organizer, it’s tailored for individuals managing multiple prescriptions or cognitive
                        challenges—where the risk of missed or incorrect doses is high. With a strong emphasis on accessibility, Remedify not only
                        provides smart reminders but also offers a comprehensive medication library, ensuring users stay informed and on track with their treatment.
                    </span>
                </div>

                <div className="flex flex-col w-[57%] mt-[3em]">
                    <h1 className="flex justify-start font-bold text-[3em] text-[#FF5F00]">Main Features</h1>
                    <div className="flex flex-col gap-[3em]">
                        <p className="font-light text-[22px]">Automated Scanning</p>
                        <Image
                            src={Auto}
                            alt="automated scanning"
                            width={1000}
                            height={1000}
                        />
                    </div>
                    <div className="flex flex-col mt-[8px]">
                        <p className="font-light text-[22px]">Automated scanning for ease of use referencing information from the Canadian Drug Product Database.</p>
                        <p className="font-light text-[22px]">For the Azure AI Vision OCR to work image data is uploaded uing blob storage.</p>
                    </div>
                    <div className="flex flex-col gap-[3em] mt-[3em]">
                        <p className="font-light text-[22px]">Generated Information</p>
                        <Image
                            src={Info}
                            alt="generated information"
                            width={1000}
                            height={1000}
                        />
                    </div>
                    <div className="flex flex-col mt-[8px] gap-[2em]">
                        <p className="font-light text-[22px]">AI genearted information about medication such as side effects are fetched from the Canadian Drug Product Database.</p>
                        <p className="font-light text-[22px]">OpenAI's GPT-4o mini is being used to analyze text data from the OCR and put into the corresponding objects. It's also being
                            used to generate information on medications using the data that is being fetched the Canadian Drug Product Database.
                        </p>
                    </div>

                </div>
                <div className="flex flex-col w-[57%] mt-[3em] gap-[2em]">
                    <h1 className="flex justify-start font-bold text-[3em] text-[#FF5F00]">Research</h1>
                    <p className="font-light text-[22px]">Numerous surveys and interviews were run by the members of the team to ensure that the idea of the app is refined
                        and validated.</p>
                    <div className="flex flex-row justify-between">
                    <Image
                        src={Primary}
                        alt="primary persona"
                        width={450}
                        height={450}
                    />

                    <Image
                        src={Secondary}
                        alt="secondary persona"
                        width={450}
                        height={450}
                    />
                    </div>
                    <p className="font-light text-[22px]">The persona's were built with the target audience in mind, which was refined by the interviews and surveys.</p>
                </div>
            </div>
        </>
    )
}

export default Remedify