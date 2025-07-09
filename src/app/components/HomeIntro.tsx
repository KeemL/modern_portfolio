import Link from "next/link";

export default function HomeIntro() {
  return (
    <div className="align-center justify-center space-y-4 rounded-lg text-center font-bold text-black">
      <p className="text-2xl text-gray-400"> {`Hello, I'm`} </p>
      <h1 className="text-6xl text-white">Hakeem Lingo</h1>
      <p className="text-3xl text-gray-400"> Coder, Animator, Creative.</p>
      {/* <div className="space flex justify-center gap-x-10">
        <a href=""> View Resume</a>
        <a href=""> View Projects</a>
      </div> */}
      <div className="flex justify-center space-x-8 text-gray-700">
        <Link href="#projects">
          <button className="bg-cerulean rounded-lg border p-4 text-white hover:bg-black">
            View Projects
          </button>
        </Link>

        <Link href="#contact">
          <button className="hover:bg-cerulean rounded-lg border bg-white p-4 hover:text-black">
            Get In Touch
          </button>
        </Link>
      </div>
    </div>
  );
}
