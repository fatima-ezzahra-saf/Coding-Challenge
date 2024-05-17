import React from 'react';
import Link from 'next/link';
import DeleteBtn from './DeleteBtn'
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({title,desc,id}) => {
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
                    <Link href="/posts/">
                      <h1 className="card-title">{title}</h1> 
                    </Link>
                    <p className="desc">{desc}</p>
                    <Link href={`/readMore/${id}`} className="btn btn-primary">Read More</Link>
                    <div>
                      <br/>
                    </div>
                    <Link href={`/updateTopic/${id}`} className="btn btn-warning">Edit</Link>&nbsp;&nbsp;
                    <DeleteBtn id={id} />
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
