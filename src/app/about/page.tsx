export default function About() {
  return (
    <div className="justify-center space-y-4 rounded-lg text-center font-bold text-black">
      <p className="text-2xl text-gray-700"> {`Hello I'm`} </p>
      <h1 className="text-6xl">Hakeem Lingo</h1>
      <p className="text-3xl text-gray-700"> Coder, Animator, Creative.</p>
      {/* <div className="space flex justify-center gap-x-10">
        <a href=""> View Resume</a>
        <a href=""> View Projects</a>
      </div> */}
      <div className="flex justify-center space-x-8 text-gray-700">
        <button className="bg-vandyke rounded-lg border p-4 text-white hover:bg-black">
          Download CV
        </button>
        <button className="rounded-lg border bg-white p-4 hover:bg-black hover:text-white">
          Get In Touch
        </button>
      </div>
    </div>
  );
}
