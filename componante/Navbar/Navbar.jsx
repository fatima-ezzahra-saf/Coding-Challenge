import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/logo.webp" alt="" width={150} height={150}/>
      </div>
      <div className={styles.logo}>Actual topics</div>
      <div className={styles.links}>
      <Link href="/" className={styles.link}>Home Page</Link>
        <Link href="/addTopic" className={styles.link}>Create a topic</Link>
      </div>
    </div>
  );
};

export default Navbar;