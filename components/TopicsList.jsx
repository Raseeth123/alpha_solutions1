import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function TopicsList() {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="mt-20 p-6 border border-gray-700 flex justify-between gap-5 items-start rounded-lg shadow-lg bg-gray-800 transition-shadow duration-300 ease-in-out"
        >
          <div>
            <h2 className="font-extrabold text-2xl text-blue-400">{t.title}</h2>
            <div className="mt-2 text-gray-300">{t.description}</div>
          </div>

          <div className="flex gap-4">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <button
                className="bg-blue-500 text-white font-bold py-3 px-5 rounded-lg shadow-lg"
                title="Edit Topic"
              >
                <HiPencilAlt size={24} />
              </button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

