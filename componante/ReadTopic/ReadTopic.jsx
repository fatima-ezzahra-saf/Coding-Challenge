"use client";

export default function UpdateTopic({title, description }) {

  return (
    <div>
        <div>
            <h1>{title}</h1>
        </div>
        <div>
            <p>{description}</p>
        </div>
    </div>
  );
}