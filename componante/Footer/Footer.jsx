import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.webp" alt="SAFRANI blog" width={50} height={50} />
          <h1 className={styles.logoText}>Blog</h1>
        </div>
        <p className={styles.desc}>
          This blog is created by SAFRANI Fatima ezzahra <br/>
        </p>
      </div>
    </div>
  );
};

export default Footer;