import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = () => {
  return (
    <div className="container mt-5"> 
      <div className="row justify-content-center">
        <div className="col-md-6"> 
          <div className="card">
            <div className="card-body">
              <div className="row align-items-center"> 
                <div className="col-md-4"> 
                  <div className="image-container">
                    <img src="food.png" alt="Food" className="img-fluid rounded" width="100" height="100" /> 
                  </div>
                </div>
                <div className="col-md-8"> 
                  <div className="text-container">
                    <div className="detail">
                      <span className="date">77777</span>
                      <span className="category">Food</span>
                    </div>
                    <Link href="/posts/">
                      <h1 className="card-title">Food Blog</h1> 
                    </Link>
                    <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum felis id lorem condimentum, et malesuada libero ullamcorper.</p>
                    <Link href="/posts/" className="btn btn-primary">Read More</Link> 
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
