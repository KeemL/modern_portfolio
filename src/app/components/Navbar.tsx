export default function Navbar() {
  return (
    <nav className="bg-vandyke sticky top-0 z-50 flex h-20 items-center justify-between px-8 text-white">
      {/* Left: Name */}
      <div className="text-olive text-3xl font-bold">LINGO LABS</div>

      {/* Center: Nav Links in white box */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <ul className="flex space-x-6 rounded-lg bg-white px-8 py-2 text-center text-3xl tracking-tight text-black shadow-md">
          <li>
            <a href="#about" className="hover-underline-olive">
              About Me
            </a>
          </li>
          <li>
            <a href="#projects" className="hover-underline-olive">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover-underline-olive">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
