import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#111827] px-10 py-4 shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link className="text-white font-extrabold text-2xl tracking-wider" href={"/"}>
          E-COM
        </Link>
        <Link
          className="bg-white text-indigo-600 font-semibold py-2 px-6 rounded-md shadow-lg hover:bg-indigo-100 transition-all duration-300 ease-in-out"
          href={"/addTopic"}
        >
          Add Topic
        </Link>
      </div>
    </nav>
  );
}
