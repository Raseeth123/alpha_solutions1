"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 bg-gray-900 shadow-2xl rounded-sm p-10 max-w-lg mx-auto mt-20"
    >
      <h2 className="text-3xl font-extrabold text-purple-400 mb-6">Add New Topic</h2>

      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-purple-600 bg-gray-800 text-white rounded-md px-6 py-4 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-200"
        type="text"
        placeholder="Enter Topic Title"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-purple-600 bg-gray-800 text-white rounded-md px-6 py-4 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-200"
        type="text"
        placeholder="Enter Topic Description"
      />

      <button
        type="submit"
        className="bg-purple-600 text-white font-bold py-4 rounded-md shadow-md transition-all duration-200 transform active:scale-95"
      >
        Add Topic
      </button>
    </form>
  );
}
