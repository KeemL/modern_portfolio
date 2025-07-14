export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex h-20 items-center justify-between bg-black px-8 text-white">
      {/* Left: Name */}
      <div className="text-cerulean text-3xl font-bold">LINGO LABS</div>

      {/* Center: Nav Links in white box */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <ul className="flex space-x-8 rounded-lg bg-white px-8 py-2 text-center text-3xl tracking-tight text-black shadow-md">
          <li>
            <a href="/about" className="hover-underline-primary">
              About Me
            </a>
          </li>
          <li>
            <a href="#projects" className="hover-underline-primary">
              Projects
            </a>
          </li>
          <li>
            <a
              href="https://outlook.office.com/mail/deeplink/compose?to=hakeemlingo@gatech.edu&subject=Portfolio%20Inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-underline-primary"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
