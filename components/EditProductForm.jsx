"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, description }) {
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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 bg-gray-900 shadow-2xl rounded-sm p-10 max-w-lg mx-auto mt-20"
    >
      <h2 className="text-3xl font-extrabold text-purple-400 mb-6">Edit Topic</h2>

      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-purple-600 bg-gray-800 text-white rounded-md px-6 py-4 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-200"
        type="text"
        placeholder="Enter Topic Title"
      />

      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-purple-600 bg-gray-800 text-white rounded-md px-6 py-4 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-200"
        type="text"
        placeholder="Enter Topic Description"
      />

      <button
        className="bg-purple-600 text-white font-bold py-4 rounded-md shadow-md text-lg transition-all duration-200 transform active:scale-95"
      >
        Save Changes
      </button>
    </form>
  );
}
