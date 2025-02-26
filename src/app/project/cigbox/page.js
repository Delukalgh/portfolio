import styles from "./Cig.module.css";
import Header from "../../../../components/Header";
import Scrollanimation from "../../../../components/Scroll"
import Paper from "/public/images/Paper.png"
import Blue from "/public/images/blue.png"
import Green from "/public/images/green.png"
import Pink from "/public/images/pink.png"
import Image from "next/image";


const Cig = () => {
    return (
        <>
            <Scrollanimation />
            <Header />
            <div className={styles.container}>

                <div>
                    <h1 className="font-bold text-[4em] text-[#FF5F00]">SOVEREIGN CIGARETTE</h1>
                </div>

                <div className="p-4">
                    <a>
                        <Image
                            src={Paper}
                            alt="blue cigarette"
                            width={1000}
                            height={1000}
                        />
                    </a>
                </div>

                <div className="flex flex-col mt-[1em] w-[57%] gap-[5em]">
                    <h1 className="flex justify-center font-bold text-[3em] text-[#FF5F00]">Logo Design Project</h1>
                    <p className="font-light text-[22px]">The design features vibrant backgrounds and playful graphics, blending them into an eye-catching and engaging aesthetic. The posters adopt an Art Deco style, evoking a sense of nostalgia for the older generation.</p>
                </div>

                <div className="flex flex-col p-4 mt-[8em] gap-10">
                    <a>
                        <Image
                            src={Blue}
                            alt="blue cigarette"
                            width={600}
                            height={600}
                        />
                    </a>
                    <a>
                        <Image
                            src={Green}
                            alt="green cigarette"
                            width={600}
                            height={600}
                        />
                    </a>
                    <a>
                        <Image
                            src={Pink}
                            alt="pink cigarette"
                            width={600}
                            height={600}
                        />
                    </a>
                </div>


            </div>
        </>
    )
};

export default Cig;