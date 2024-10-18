"use client"
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classnames from 'classnames';
import { AiFillBug } from "react-icons/ai";

const data = [
    { id: 1, lable: "Dashboard", href: "/" },
    { id: 2, lable: "issues", href: "/issues" },
]

function Navigator() {
    const currentPathName = usePathname();

    return (
        <nav className='flex items-center space-x-6 px-5 h-14 border-b'>
            <Link href="/"><AiFillBug /></Link>
            <ul className='flex space-x-6'>
                {
                    data.map(item => (
                        <Link
                            key={item.id}
                            href={item.href}
                            className={classnames({
                                'text-zinc-900': item.href === currentPathName,
                                'text-zinc-500': item.href !== currentPathName,
                                'hover:text-zinc-800 transition-colors duration-300': true
                            })}
                        >
                            {item.lable}
                        </Link>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navigator