import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/images.jpg" alt="facebook" width={24} height={24} style={{width:"100px",height:"100px"}}/>
      </div>
      <div className={styles.logo}>Acctuality topics</div>
      <div className={styles.links}>
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <Link href="/" className={styles.link}>About</Link>
      </div>
    </div>
  );
};

export default Navbar;