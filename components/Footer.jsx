export default function Footer() {
  return (
    <footer>
      <div className="foot-grid wrap" style={{ padding: 0 }}>
        <div>
          <div className="foot-logo">
            A<b>U</b>M
          </div>
          <p>
            Showroom Anugerah Utama Motor Palangkaraya — mobil berkualitas,
            proses jujur, pelayanan ramah.
          </p>
        </div>
        <div className="foot-col">
          <h4>Navigasi</h4>
          <a href="/#tentang">Tentang</a>
          <a href="/#kategori">Kategori</a>
          <a href="/#unit">Unit</a>
        </div>
        <div className="foot-col">
          <h4>Kontak</h4>
          <a
            href="https://wa.me/628212642026"
            target="_blank"
            rel="noopener noreferrer"
          >
            0821-2642-026
          </a>
          <a
            href="https://www.instagram.com/anugerah.utama.palangkaraya?igsh=NWJrNTgyNHY0NGx0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
        <div className="foot-col">
          <h4>Jam Buka</h4>
          <p>Setiap hari</p>
          <p>08.00 – 17.00 WIB</p>
        </div>
      </div>
      <div className="foot-bottom">
        <span>© 2026 Anugerah Utama Motor Palangkaraya.</span>
        <span>Jl. RTA Milono No. KM 7, Menteng, Palangka Raya.</span>
      </div>
    </footer>
  );
}
