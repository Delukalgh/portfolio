'use client'
import { useRef, useEffect } from 'react'
import next from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Cans from '/public/images/cans.png'
import Blue from '/public/images/blue.png'
import React from 'react'


const Projects = () => {

    return (
        <div className="flex flex-col work-links m-auto items-center relative h-[200vh]">
            <div>
                <a href="/project/can">
                    <Image
                        src={Cans}
                        alt="cans"
                        width={1200}
                        height={1200}
                    />
                </a>

            </div>
            <div>
                <a href="/project/cigbox">
                    <Image
                        src={Blue}
                        alt='Blue Cigbox'
                        width={'900'}
                        height={'900'}
                    />
                </a>
            </div>

        </div>
    )
}

export default Projects