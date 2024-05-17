import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 style={{textAlign:"center",color:"#db7cc3",textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)"}}>About the blog</h1>
      <div className={styles.post}>
        <h1 style={{textAlign:"center"}}></h1>
        <div className={styles.imgContainer}>
          <Image src="/what-is-a-blog-1.webp" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Blog</h1>
          <p className={styles.postDesc}>
          Welcome to this blog, your go-to destination for insightful articles, engaging stories, and thought-provoking discussions.

          At this blog, we're passionate about sharing knowledge, sparking conversations, and connecting with our readers on a deeper level. Our team of writers and contributors bring a diverse range of perspectives, expertise, and experiences to each piece we publish.

          Whether you're looking for practical advice, inspiration, or simply a good read, you'll find it here. Explore our archives, join the conversation in the comments, and be part of our growing community of curious minds.

          Thank you for being part of our journey. Let's explore, learn, and grow together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;