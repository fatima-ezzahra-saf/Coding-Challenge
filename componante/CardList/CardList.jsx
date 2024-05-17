import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Image from "next/image";
import Card from "../card/Card";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const CardList = async () => {
  const {topics} = await getTopics();

  
  return (
    <div>
       <h1 className={styles.title} style={{textAlign:"center"}}>Recent Posts</h1>
      {topics.map((t) => (
        <div className={styles.container} key={t._id}>
          <div className={styles.posts}>
            <Card title={t.title} desc={t.description} id={t._id} />
          </div>
        </div>
      ))}
      <Pagination />
    </div>
  );
};

export default CardList;