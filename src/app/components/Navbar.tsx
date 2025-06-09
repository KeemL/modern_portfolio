export default function Navbar() {
  return (
    <nav className="flex h-20 bg-amber-300">
      <ul className="flex space-x-6 place-self-center text-3xl tracking-tight text-black">
        <li>
          <a href="#about" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#experience" className="hover:underline">
            Experience
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
