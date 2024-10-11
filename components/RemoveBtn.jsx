"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
  const router = useRouter();
  
  const removeProduct = async () => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button
      onClick={removeProduct}
      className="bg-red-500 text-white p-3 rounded-full shadow-lg transition-all duration-200 ease-in-out flex items-center justify-center"
      title="Delete"
    >
      <HiOutlineTrash size={24} />
    </button>
  );
}
