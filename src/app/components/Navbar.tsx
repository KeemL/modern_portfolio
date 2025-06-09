export default function Navbar() {
  return (
    <nav className="bg-vandyke flex h-20 justify-end-safe">
      <div className="self-center bg-green-600">
        <p> HAKEEM LINGO</p>
      </div>
      <ul className="mr-8 flex space-x-6 place-self-center text-3xl tracking-tight text-black">
        <div className="text-right"></div>
        <li>
          <a href="#about" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:underline">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
