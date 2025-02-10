import Header from "../../../../components/Header"
import styles from "./Magazine.module.css";
import Image from "next/image";
import Toyo from '/public/images/magmockup.png'
import Eight from "/public/images/pageeight.png"
import Nine from "/public/images/pagenine.png"
import Ten from "/public/images/pageten.png"

const Magazine = () => {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div>
                    <h1 className="flex text-center font-bold text-[4em]">Spaces of Serenity <br></br>The Visionary Architecture of Toyo Ito</h1>
                </div>

                <div className="p-4">
                    <a>
                        <Image
                            src={Toyo}
                            alt="blue cigarette"
                            width={1000}
                            height={1000}
                        />
                    </a>
                </div>
                <div className="flex flex-col mt-[1em] w-[57%] gap-[5em]">
                    <h1 className="flex justify-center font-bold text-[3em]">Magazine</h1>
                    <p className="font-light text-[22px]">A magazine dedicated to the works of Toyo Ito called Spaces of Serenity: The Visionary Architecture of Toyo Ito. This magazine features Toyo Ito’s most famous works. The consistent use of negative space gives the reader a sense of breathability and freedom. </p>
                </div>
                <div className="flex flex-col p-4 mt-[8em] gap-10">
                    <a>
                        <Image
                            src={Eight}
                            alt="page 8 of magazine"
                            width={1000}
                            height={1000}
                        />
                    </a>
                    <a>
                        <Image
                            src={Nine}
                            alt="page 9 of magazine"
                            width={1000}
                            height={1000}
                        />
                    </a>
                    <a>
                        <Image
                            src={Ten}
                            alt="page 10 of magazine"
                            width={1000}
                            height={1000}
                        />
                    </a>
                </div>

            </div>
        </>
    )
}

export default Magazine