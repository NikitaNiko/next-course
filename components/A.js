import Link from "next/link";
import stl from '../styles/A.module.css'

export default function ({text, href}) {
    return (
        <Link className={stl.link} href={href}>
            <span>{text}</span>
        </Link>
    )
}