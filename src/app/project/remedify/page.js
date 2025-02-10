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

            </div>
        </>
    )
}

export default Remedify