import next from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Cans from '/public/images/cans.png'
import React from 'react'

const Projects = () => {
    return (
        <div className="work-links m-auto ">
            <div className="p-4">
                <a href="/project/can">
                    <Image
                        src={Cans}
                        alt="cans"
                        width={600}
                        height={600}
                    />
                </a>

            </div>

        </div>
    )
}

export default Projects
