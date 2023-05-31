import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <h1>Welcome To Your Quiz</h1>
      <button>
        <Link href={"/setup"}>Set Up your Quiz</Link>
      </button>
    </main>
  );
}
