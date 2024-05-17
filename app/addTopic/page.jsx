"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="topicTitle" className="form-label">Topic Title</label>
              <input
                type="text"
                className="form-control"
                id="topicTitle"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter topic title"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="topicDescription" className="form-label">Topic Description</label>
              <textarea
                className="form-control"
                id="topicDescription"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter topic description"
                rows={7} 
              />
            </div>
            <button type="submit" className="btn btn-primary">Add Topic</button>
          </form>
        </div>
      </div>
    </div>
  );
}
