import React, { memo } from 'react'
import styles from './sidebar.module.css'
import { MdDashboard, MdLogout } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { FaProductHunt } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import MenuLink from './menuLink';
import { UUID } from 'uuidjs';
import Image from 'next/image';

const menuItems = [
    {
        title: "pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />
            },
            {
                title: "User",
                path: "/dashboard/user",
                icon: <CiUser />
            },
            {
                title: "Products",
                path: "/dashboard/product",
                icon: <FaProductHunt />
            }
        ]
    },
    {
        title: "User",
        list: [
            {
                title: "Setting",
                path: "/dashboard/setting",
                icon: <CiSettings />
            },
            {
                title: "Help",
                path: "/dashboard/help",
                icon: <IoIosHelpCircleOutline />
            },
        ]
    }
]

// eslint-disable-next-line react/display-name
const SideBar = memo(() => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image className={styles.userImage} src='https://statics.scott-xiong.com/docusaurus/ac5a82b0b3e44168b4f24942e366a99c.png' width="50" height="50" alt='' />
                <div className={styles.userDetail}>
                    <span className={styles.username}>Scott Xiong</span>
                    <span className={styles.userTitle} >Administratory</span>
                </div>
            </div>
            <ul className={styles.list}>
                {menuItems.map((item) => (
                    <li key={UUID.generate()} className={styles.item}>
                        <span className={styles.cat}>{item.title}</span>
                        {item.list.map((listItem) => (
                            <MenuLink key={UUID.generate()} item={listItem} />
                        ))}
                    </li>
                ))}
            </ul>

            <button className={styles.logout}>
                <MdLogout />
                logout
            </button>
        </div>
    )
})

export default SideBar