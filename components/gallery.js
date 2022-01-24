import Image from "next/image"
import { motion } from "framer-motion"

export default function Gallery({ pictures }) {
    return <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
        {pictures.map((url, i) =>
            <div
                className="relative h-[30vh]"
                key={url}
            >
                <Image
                    src={url}
                    layout="fill"
                    objectFit="contain"
                    priority={i < 12}
                    quality={25}
                />
            </div>
        )}
    </div>

}