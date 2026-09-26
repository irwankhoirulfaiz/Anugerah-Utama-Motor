import Link from "next/link";

export default function Navbar({ variant = "home" }) {
  return (
    <div className="nav-wrap">
      <div className="nav">
        <Link href="/" className="logo">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M3 13l1.5-4.5A2 2 0 016.4 7h11.2a2 2 0 011.9 1.5L21 13" />
            <rect x="2" y="13" width="20" height="6" rx="2" />
            <circle cx="7" cy="19" r="1.5" />
            <circle cx="17" cy="19" r="1.5" />
          </svg>
          A<b>U</b>M
        </Link>

        {variant === "home" ? (
          <nav className="links">
            <a href="#tentang">Tentang</a>
            <a href="#kategori">Kategori</a>
            <a href="#unit">Unit</a>
            <a href="#testimoni">Testimoni</a>
            <a href="#lokasi">Lokasi</a>
          </nav>
        ) : (
          <nav className="links">
            <Link href="/">Beranda</Link>
            <a href="#mpv">MPV</a>
            <a href="#city">City Car</a>
            <a href="#suv">SUV</a>
            <a href="#cabin">Double Cabin</a>
          </nav>
        )}

        <a
          className="btn sm"
          href="https://wa.me/628212642026"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hubungi Kami
        </a>
      </div>
    </div>
  );
}
