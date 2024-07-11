"use client";

import React, { memo } from 'react'
import styles from './navbar.module.css'
import { usePathname } from 'next/navigation';
import { CiSearch } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdPublic } from "react-icons/md";


// eslint-disable-next-line react/display-name
const Navbar = memo(() => {
    const pathname = usePathname()
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                {pathname.split('/').pop()}
            </div>
            <div className={styles.menu}>
                <div className={styles.search}>
                    <CiSearch />
                    <input type="text" placeholder='search...' className={styles.input} />
                </div>
                <div className={styles.icons}>
                    <CiChat1 size={20} />
                    <IoIosNotificationsOutline size={20} />
                    <MdPublic scale={20} />
                </div>
            </div>

        </div>
    )
})

export default Navbar