"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function UpdateTopic({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="p-4 border rounded">
            <div className="mb-3">
              <label htmlFor="newTopicTitle" className="form-label">New Topic Title</label>
              <input
                type="text"
                className="form-control"
                id="newTopicTitle"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Enter new topic title"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="newTopicDescription" className="form-label">New Topic Description</label>
              <textarea
                className="form-control"
                id="newTopicDescription"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder="Enter new topic description"
                rows={7} // Nombre de lignes visible dans la zone de texte
              />
            </div>
            <button type="submit" className="btn btn-primary">Update Topic</button>
          </form>
        </div>
      </div>
    </div>
  );
}