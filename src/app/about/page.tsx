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
      <div className="bg-primary flex w-2/5 flex-col gap-4 rounded-sm p-4 text-left">
        <h1>About Me</h1>
        <p>
          {`I’m an alumnus at the Georgia Institute of Technology, with a major in`}{" "}
          <a
            href="https://www.gatech.edu/academics/degrees/bachelors/computational-media-bs"
            className="text-white underline after:content-['_↗'] hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Computational Media
          </a>
          {` — an interdisciplinary program that blends
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
