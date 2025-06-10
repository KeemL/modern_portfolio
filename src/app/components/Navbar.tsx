export default function Navbar() {
  return (
    <nav className="bg-vandyke flex h-20 items-center justify-between">
      <div className="">
        <p className="text-olive ml-4 text-3xl font-bold">HAKEEM LINGO</p>
      </div>
      <ul className="mr-8 flex space-x-6 text-3xl tracking-tight text-black">
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
