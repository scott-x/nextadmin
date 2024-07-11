"use client";

import React, { memo } from 'react'
import styles from './index.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// eslint-disable-next-line react/display-name
const MenuLink = memo(({ item }) => {
    const pathname = usePathname()
    console.log("pathname", pathname)
    return (
        <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
            {item.icon}
            {item.title}
        </Link>
    )
})

export default MenuLink