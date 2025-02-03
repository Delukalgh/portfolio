import Image from "next/image";
import Header from "../../../../components/Header";
import Cans from "/public/images/cans.png"

const Can = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center gap-[1px]">
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

                <div className="flex flex-col mt-[1em] w-[57%] gap-[1em]">
                    <h1 className="flex justify-center font-bold text-[2em]">Package Design</h1>
                    <p>Evergreen Brewing is a brewery deeply inspired by the rich, earthy essence of the great outdoors. Created by utilizing Adobe Photoshop and Illustrator. This design uses a wood texture with a dark background to make the typography more prominent. It all ties into together with the colors of the pictures matching the typography color.  </p>
                </div>
            </div>
        </>
    );
}

export default Can;