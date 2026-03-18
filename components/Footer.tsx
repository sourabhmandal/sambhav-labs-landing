export default function Footer() {
  const links = [
    {
      name: "GitHub",
      href: "https://github.com/sourabhmandal",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/sourabh-mandal",
    },
  ]
  return (
    <footer className="flex flex-col items-start justify-between gap-4 border-t border-black px-6 py-6 md:flex-row md:items-center">
      <div className="flex items-center gap-2">
        <div className="h-4 w-4 rounded-sm bg-black" />
        <span className="mono text-xs text-neutral-500">
          Sambhav Labs © 2025
        </span>
      </div>
      <div className="flex gap-6">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="mono text-xs text-neutral-400 transition-colors hover:text-black"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  )
}
