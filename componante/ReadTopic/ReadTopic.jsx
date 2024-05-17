import React from 'react';
import styles from './readTopic.module.css';
import Link from 'next/link';
import DeleteBtn from './DeleteBtn';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function More({ id, title, description }) {
  return (
    <div className={styles.card}>
      <div>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div>
        <p className={styles.description}>{description}</p>
      </div>
      <Link href={`/updateTopic/${id}`} className="btn btn-warning">Edit</Link>&nbsp;&nbsp;
      <DeleteBtn id={id} />
    </div>
  );
}
