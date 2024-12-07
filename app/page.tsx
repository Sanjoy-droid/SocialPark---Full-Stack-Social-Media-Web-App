import Image from "next/image";
import Navbar from "./Components/Navbar";
import Post from "./Post/page";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className=" mx-24 ">
        <Post />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Footer
      </footer>
    </div>
  );
}
