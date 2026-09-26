import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Katalog Tipe Mobil — Anugerah Utama Motor",
};

const WA_LINK = "https://wa.me/628212642026";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M5 13l4 4L19 7" />
  </svg>
);

const types = [
  {
    id: "mpv",
    num: "01 · KELUARGA",
    title: "MPV — Ruang Lega untuk Semua",
    tag: "MPV Keluarga",
    img: "https://images.unsplash.com/photo-1675311183084-755007dbb223?w=900&q=80&auto=format&fit=crop",
    desc: "Dirancang untuk mobilitas keluarga dengan kabin berkapasitas 6-7 penumpang. Pilihan paling fleksibel untuk aktivitas harian sekaligus perjalanan luar kota bersama keluarga besar.",
    advantages: [
      "Kabin luas, muat hingga 7 penumpang dengan bagasi tambahan",
      "Konsumsi bahan bakar irit untuk pemakaian harian",
      "Suku cadang mudah ditemukan di Palangka Raya",
      "Nilai jual kembali stabil karena permintaan tinggi",
    ],
    bestFor: "keluarga dengan anak, usaha antar-jemput, perjalanan rutin luar kota.",
    reverse: false,
  },
  {
    id: "city",
    num: "02 · PERKOTAAN",
    title: "City Car — Lincah di Jalan Padat",
    tag: "City Car",
    img: "https://images.unsplash.com/photo-1564988190211-cfee63481d3a?w=900&q=80&auto=format&fit=crop",
    desc: "Bodi ringkas dan bertenaga cukup membuat city car jadi andalan untuk mobilitas dalam kota — mudah parkir, mudah manuver, dan ringan di kantong untuk perawatan sehari-hari.",
    advantages: [
      "Ukuran ringkas, mudah parkir di area sempit",
      "Bahan bakar paling irit di kelasnya",
      "Biaya perawatan dan pajak relatif ringan",
      "Pilihan ideal sebagai mobil kedua di rumah",
    ],
    bestFor: "mobilitas individu, pemula belajar mengemudi, mobil kedua keluarga.",
    reverse: true,
  },
  {
    id: "suv",
    num: "03 · PETUALANG",
    title: "SUV — Tangguh di Segala Medan",
    tag: "SUV",
    img: "https://images.unsplash.com/photo-1654688554491-69d21d38fb91?w=900&q=80&auto=format&fit=crop",
    desc: "Ground clearance tinggi dan tenaga mesin yang lebih besar membuat SUV nyaman diajak menembus kondisi jalan Kalimantan Tengah yang beragam, tanpa mengorbankan kenyamanan dalam kota.",
    advantages: [
      "Ground clearance tinggi, aman untuk jalan tidak rata",
      "Tenaga mesin besar, kuat menanjak dan membawa muatan",
      "Posisi duduk tinggi, pandangan jalan lebih luas",
      "Tampilan gagah, cocok untuk kebutuhan bisnis",
    ],
    bestFor: "perjalanan luar kota/antar kabupaten, medan tidak rata, gaya berkendara aktif.",
    reverse: false,
  },
  {
    id: "cabin",
    num: "04 · NIAGA",
    title: "Double Cabin — Siap Kerja Keras",
    tag: "Double Cabin",
    img: "https://images.unsplash.com/photo-1610647929723-a8922852cd44?w=900&q=80&auto=format&fit=crop",
    desc: "Kombinasi kabin penumpang dan bak terbuka menjadikan double cabin andalan pelaku usaha — mengangkut barang dan penumpang sekaligus, dengan daya tahan mesin diesel yang teruji.",
    advantages: [
      "Bak terbuka untuk mengangkut barang dan alat kerja",
      "Mesin diesel bertenaga, tahan pemakaian berat",
      "Kabin tetap nyaman untuk membawa penumpang",
      "Cocok dimodifikasi sesuai kebutuhan usaha",
    ],
    bestFor: "pelaku usaha, perkebunan/pertambangan, kebutuhan angkut barang rutin.",
    reverse: true,
  },
];

export default function KatalogPage() {
  return (
    <>
      <Navbar variant="katalog" />

      <section className="katalog-hero">
        <div className="eyebrow-sm">Katalog Tipe Mobil</div>
        <h1>Kenali Tipe Mobil dan Keunggulannya</h1>
        <p>
          Sebelum menentukan pilihan, kenali dulu karakter tiap tipe mobil di
          showroom kami — agar unit yang Anda pilih benar-benar sesuai
          kebutuhan sehari-hari.
        </p>
        <div className="jump">
          {types.map((t) => (
            <a key={t.id} href={`#${t.id}`}>
              {t.tag}
            </a>
          ))}
        </div>
      </section>

      {types.map((t) => (
        <section className="type-block" id={t.id} key={t.id}>
          <div className={`wrap type-grid${t.reverse ? " rev" : ""}`}>
            <div
              className="type-visual"
              style={{ backgroundImage: `url('${t.img}')` }}
            >
              <div className="tag">{t.tag}</div>
            </div>
            <div className="type-copy">
              <div className="num">{t.num}</div>
              <h2>{t.title}</h2>
              <p className="desc">{t.desc}</p>
              <div className="adv-list">
                {t.advantages.map((a) => (
                  <div className="adv-item" key={a}>
                    <div className="ic">
                      <CheckIcon />
                    </div>
                    <span>{a}</span>
                  </div>
                ))}
              </div>
              <div className="best-for">
                <b>Cocok untuk:</b> {t.bestFor}
              </div>
              <a
                className="btn"
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Tanya Unit {t.tag}
              </a>
            </div>
          </div>
        </section>
      ))}

      <div className="wrap">
        <div className="cta-strip">
          <h2>Masih Bingung Pilih yang Mana?</h2>
          <p>
            Ceritakan kebutuhan Anda ke tim kami — kami bantu rekomendasikan
            tipe dan unit yang paling pas, tanpa biaya konsultasi.
          </p>
          <a className="btn" href={WA_LINK} target="_blank" rel="noopener noreferrer">
            Konsultasi via WhatsApp
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
