"use client";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  return (
    <div className="prose mx-auto min-h-screen max-w-3xl min-w-screen bg-blue-100 p-8 text-lg text-black">
      <button
        onClick={() => router.back()}
        className="mb-6 rounded bg-gray-300 px-4 py-2 hover:bg-gray-400"
      >
        ← Back
      </button>
      <div className="flex flex-col gap-4">
        <h1>About Me</h1>
        <p>
          {`I’m an alumnus at the Georgia Institute of Technology, with a major in
        Computational Media — an interdisciplinary program that blends
        computing, digital design, and human-centered problem solving.`}
        </p>
        <p>
          {`This background provides a unique perspective on technology, combining a
        strong foundation in programming with user-centered design principles,
        supplying me with both technical precision and creative intent.`}
        </p>
        <p>
          {`At the heart of my work is a goal to build fulfilling experiences with
        code, where I've created full-stack applications, games, and websites
        that prioritize both function and experience.`}
        </p>
        <p>
          {`I'm looking to employ my technical skills and determination to
        contribute to work that makes an impact.`}
        </p>
      </div>
    </div>
  );
}
