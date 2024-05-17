import React from 'react';
import Link from 'next/link';
import DeleteBtn from '../ReadTopic/DeleteBtn';
import styles from './card.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({ title, desc, id }) => {
  const truncateDesc = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    } else {
      return text;
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <div className="image-container">
                    <img src="topic.jpg" alt="topic" className="img-fluid rounded" width="100" height="100" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="text-container">
                    <Link href="/posts/">
                      <h1 className={`${styles.link} ${styles.shadow}`}>{title}</h1> {/* Add shadow class */}
                    </Link>
                    <p className="desc">{truncateDesc(desc, 150)}</p>
                    <Link href={`/readMore/${id}`} className="btn btn-primary">
                      Read More
                    </Link>
                    <div>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
