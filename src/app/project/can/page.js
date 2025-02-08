import Image from "next/image";
import Header from "../../../../components/Header";
import Cans from "/public/images/cans.png"
import Cedar from "/public/images/cedarmock.png"
import Pine from "/public/images/pinemock.png"
import Maple from "/public/images/maplemock.png"
import styles from "./Can.module.css";

const Can = () => {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div>
                    <h1 className="font-bold text-[4em]">EVERGREEN BREWING</h1>
                </div>

                <div className="p-4">
                    <a>
                        <Image
                            src={Cans}
                            alt="cans"
                            width={1000}
                            height={1000}
                        />
                    </a>
                </div>

                <div className="flex flex-col mt-[1em] w-[57%] gap-[5em]">
                    <h1 className="flex justify-center font-bold text-[3em]">Package Design</h1>
                    <p className="font-light text-[22px]">Evergreen Brewing is a brewery deeply inspired by the rich, earthy essence of the great outdoors. Created by utilizing Adobe Photoshop and Illustrator. This design uses a wood texture with a dark background to make the typography more prominent. It all ties into together with the colors of the pictures matching the typography color.  </p>
                </div>

                <div className=" flex flex-col p-4 gap-[3em]">
                    <a>
                        <Image
                            src={Cedar}
                            alt="cedar"
                            width={1000}
                            height={1000}
                        />
                    </a>
                    <a>
                        <Image 
                            src={Pine}
                            alt="pine"
                            width={1000}
                            height={1000}
                        />
                    </a>
                    <a>
                        <Image 
                            src={Maple}
                            alt="maple"
                            width={1000}
                            height={1000}
                        />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Can;