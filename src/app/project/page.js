import Image from 'next/image'
import Cans from "/public/images/cans.png"

export default function Project() {
    return(
        <>
            <h1>PROJECTS PAGE</h1>
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
        </>
    )
}