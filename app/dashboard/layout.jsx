import React, { memo } from 'react'
import Sidebar from '../ui/dashboard/Sidebar'
import Navbar from '../ui/dashboard/Navbar'
import styles from '../ui/dashboard/dashboard.module.css'

// eslint-disable-next-line react/display-name
const Layout = memo(({ children }) => {
    return (
        <section className={styles.container}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <Navbar />
                {children}
            </div>
        </section>
    )
})

export default Layout