import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UnitGrid from "@/components/UnitGrid";

const WA_LINK = "https://wa.me/628212642026";

const categories = [
  {
    key: "mpv",
    label: "MPV Keluarga",
    className: "",
    img: "https://images.unsplash.com/photo-1675311183084-755007dbb223?w=600&q=80&auto=format&fit=crop",
  },
  {
    key: "city",
    label: "City Car",
    className: "c2",
    img: "https://images.unsplash.com/photo-1564988190211-cfee63481d3a?w=600&q=80&auto=format&fit=crop",
  },
  {
    key: "suv",
    label: "SUV",
    className: "c3",
    img: "https://images.unsplash.com/photo-1654688554491-69d21d38fb91?w=600&q=80&auto=format&fit=crop",
  },
  {
    key: "cabin",
    label: "Double Cabin",
    className: "c4",
    img: "https://images.unsplash.com/photo-1610647929723-a8922852cd44?w=600&q=80&auto=format&fit=crop",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar variant="home" />

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">Showroom Mobil · Palangka Raya</div>
            <h1>
              Mobil Berkualitas,
              <br />
              Harga Bersahabat.
            </h1>
            <p className="lead">
              Anugerah Utama Motor membantu Anda menemukan mobil bekas
              berkualitas di Palangka Raya — kondisi transparan, proses
              cepat, rating 5.0 dari pelanggan kami.
            </p>
            <div className="hero-cta">
              <a className="btn" href={WA_LINK} target="_blank" rel="noopener noreferrer">
                Chat WhatsApp
              </a>
              <a
                className="btn outline"
                style={{
                  background: "transparent",
                  borderColor: "rgba(255,255,255,0.25)",
                  color: "#fff",
                }}
                href="#unit"
              >
                Lihat Unit
              </a>
            </div>
          </div>
          <div className="hero-art">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1562141961-b5d1dfb57448?w=1000&q=80&auto=format&fit=crop"
              alt="Mobil sport"
              style={{
                boxShadow: "0 30px 60px rgba(0,0,0,0.45)",
                position: "relative",
                zIndex: 2,
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1521410195597-69e2218fcee8?w=500&q=80&auto=format&fit=crop"
              alt="Mobil sedan"
              style={{
                width: "46%",
                borderRadius: 16,
                boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                position: "absolute",
                left: "-8%",
                bottom: "-14%",
                zIndex: 3,
                border: "4px solid #0F1116",
              }}
            />
          </div>
        </div>

        <div className="wrap">
          <div className="quickbar">
            <div className="qb-item">
              <div className="lbl">Alamat Showroom</div>
              <div className="val">Jl. RTA Milono No. KM 7, Menteng</div>
            </div>
            <div className="qb-item">
              <div className="lbl">Jam Operasional</div>
              <div className="val">08.00 – 17.00 WIB</div>
            </div>
            <div className="qb-item">
              <div className="lbl">Telepon / WA</div>
              <div className="val">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  0821-2642-026
                </a>
              </div>
            </div>
            <a className="btn" href={WA_LINK} target="_blank" rel="noopener noreferrer">
              Chat Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* KATEGORI */}
      <section className="section-tight" style={{ marginTop: 70 }} id="kategori">
        <div className="wrap">
          <div className="head-row">
            <div>
              <div className="eyebrow-sm">Kategori Mobil</div>
              <h2 className="sec-title">Pilih Sesuai Kebutuhan Anda</h2>
            </div>
            <p className="sec-desc">
              Dari mobil keluarga sampai kendaraan niaga, showroom kami
              menyesuaikan dengan aktivitas harian Anda di Palangka Raya.
            </p>
          </div>
          <div className="cat-grid">
            {categories.map((cat) => (
              <Link
                key={cat.key}
                className={`cat-card ${cat.className}`}
                href={`/katalog#${cat.key}`}
                style={{ backgroundImage: `url('${cat.img}')` }}
              >
                <svg
                  className="ic"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M3 13l1.5-4.5A2 2 0 016.4 7h11.2a2 2 0 011.9 1.5L21 13" />
                  <rect x="2" y="13" width="20" height="6" rx="2" />
                  <circle cx="7" cy="19" r="1.5" />
                  <circle cx="17" cy="19" r="1.5" />
                </svg>
                <h3>{cat.label}</h3>
                <div className="go">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path d="M7 17L17 7M8 7h9v9" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* UNIT PILIHAN (dinamis dari Firestore) */}
      <section id="unit">
        <div className="wrap">
          <div className="unit-sec">
            <div className="head-row">
              <div>
                <div className="eyebrow-sm">Unit Pilihan</div>
                <h2 className="sec-title">Unit yang Sedang Ready</h2>
              </div>
              <Link className="btn dark sm" href="/katalog">
                Lihat Semua →
              </Link>
            </div>
            <UnitGrid />
          </div>
        </div>
      </section>

      {/* FEATURE STRIP + PROMO */}
      <div className="wrap">
        <div className="strip">
          <div className="f">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            <p>Kondisi unit dijelaskan apa adanya, tanpa menutupi kekurangan.</p>
          </div>
          <div className="f">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
            </svg>
            <p>Harga bersaing dengan ruang negosiasi yang wajar.</p>
          </div>
          <div className="f">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
            </svg>
            <p>Proses konsultasi hingga serah terima yang cepat.</p>
          </div>
          <div className="f">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            <p>Buka setiap hari, 08.00 – 17.00 WIB.</p>
          </div>
        </div>

        <div className="promo">
          <div className="promo-copy">
            <h2>Konsultasi Gratis Sebelum Membeli</h2>
            <p style={{ color: "#B9C0D4", marginTop: 12, fontSize: 15 }}>
              Belum yakin unit mana yang cocok? Tim kami bantu Anda memilih
              tanpa biaya dan tanpa paksaan.
            </p>
            <a className="btn" href={WA_LINK} target="_blank" rel="noopener noreferrer">
              Konsultasi via WhatsApp
            </a>
          </div>
          <div className="promo-art">
            <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="200" cy="190" rx="160" ry="14" fill="#000" opacity="0.4" />
              <path
                d="M40 150 C48 110 85 80 140 78 L260 78 C300 78 328 100 345 135 L365 150 L365 168 L20 168 L20 150 Z"
                fill="#3A4258"
              />
              <path
                d="M140 78 L165 52 C173 44 186 40 199 40 L245 40 C258 40 270 46 279 56 L300 78 Z"
                fill="#4A5470"
              />
              <circle cx="105" cy="168" r="28" fill="#0F1116" />
              <circle cx="105" cy="168" r="13" fill="#8B93A8" />
              <circle cx="300" cy="168" r="28" fill="#0F1116" />
              <circle cx="300" cy="168" r="13" fill="#8B93A8" />
            </svg>
          </div>
          <div className="promo-badge">
            <div className="big">5.0★</div>
            <div className="small">
              Rating Google
              <br />
              13 Ulasan
            </div>
          </div>
        </div>
      </div>

      {/* TESTIMONI */}
      <section id="testimoni">
        <div className="wrap">
          <div className="eyebrow-sm">Testimoni</div>
          <h2 className="sec-title">Dipercaya Pelanggan Palangka Raya</h2>
          <div className="rating-card">
            <div className="rating-big">5.0</div>
            <div className="rating-side">
              <div className="stars">★★★★★</div>
              <p>
                Berdasarkan 13 ulasan di Google Maps. Terima kasih atas
                kepercayaan Anda kepada Anugerah Utama Motor.
              </p>
              <a
                className="btn outline sm"
                style={{ marginTop: 16, display: "inline-flex" }}
                href="https://www.instagram.com/anugerah.utama.palangkaraya?igsh=NWJrNTgyNHY0NGx0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lihat Instagram Kami
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LOKASI */}
      <section id="lokasi">
        <div className="wrap">
          <div className="eyebrow-sm">Lokasi & Kontak</div>
          <h2 className="sec-title">Kunjungi Showroom Kami</h2>
          <div className="loc-grid">
            <div className="loc-info">
              <div className="item">
                <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 21s-7-6.2-7-11a7 7 0 1114 0c0 4.8-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                <div>
                  <h4>Alamat</h4>
                  <p>
                    Jl. RTA Milono No. KM 7, Menteng, Kec. Jekan Raya, Kota
                    Palangka Raya, Kalimantan Tengah 74874
                  </p>
                </div>
              </div>
              <div className="item">
                <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <div>
                  <h4>Jam Operasional</h4>
                  <p>Setiap hari · 08.00 – 17.00 WIB</p>
                </div>
              </div>
              <div className="item">
                <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.68 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0122 16.92z" />
                </svg>
                <div>
                  <h4>Telepon / WhatsApp</h4>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                    0821-2642-026
                  </a>
                </div>
              </div>
              <div className="item">
                <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
                <div>
                  <h4>Instagram</h4>
                  <a
                    href="https://www.instagram.com/anugerah.utama.palangkaraya?igsh=NWJrNTgyNHY0NGx0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @anugerah.utama.palangkaraya
                  </a>
                </div>
              </div>
            </div>
            <div className="map-frame">
              <iframe
                src="https://www.google.com/maps?q=Showroom+Anugerah+Utama+Motor+Palangkaraya,+Jl.+RTA+Milono+No.KM+7,+Menteng,+Jekan+Raya,+Palangka+Raya&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Showroom Anugerah Utama Motor"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
